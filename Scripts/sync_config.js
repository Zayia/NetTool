// Surge 定时脚本：把当前 profile 推送到 GitHub 私有仓库
//
// 部署：
//   1. Surge -> 脚本 -> 新建脚本，粘贴本文件，命名 sync_config.js
//   2. 在 [Script] 段加一行（cron 表达式按需改，示例为每 6 小时）：
//      sync_config = type=cron, cronexp="0 0 * / 6 * *", script-path=sync_config.js, timeout=60
//      注意：实际写进配置时把 "* / 6" 中间的空格去掉
//   3. 首次需把 GitHub token 写进 persistentStore（见 README）
//
// 设计：
//   - token 存在 $persistentStore，不进配置文件，因此不会随 profile 被推到仓库
//   - 通过 Surge 自己的 HTTP API 读取 profile（脚本沙盒读不到 iCloud 文件）
//   - 内容与远端一致时不提交，避免产生空 commit
//   - clash.yaml 由仓库里的 GitHub Actions 生成，本脚本只推 surge.conf

var OWNER = "Zayia";
var REPO = "surge-config";
var BRANCH = "main";
var FILE = "surge.conf";
var SURGE_API = "http://127.0.0.1:6166/v1/profiles/current";
// API 密码和 GitHub token 都存在 persistentStore，不写死在脚本里
// （本脚本托管在公开仓库 Zayia/NetTool，不能含任何凭据）
var SURGE_KEY = $persistentStore.read("surge_api_key") || "";
var API = "https://api.github.com/repos/" + OWNER + "/" + REPO + "/contents/" + FILE;

/* ---------- UTF-8 <-> base64 ---------- */
function utf8ToB64(str) {
  var bytes = [], i, c, c2, cp;
  for (i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    if (c < 0x80) {
      bytes.push(c);
    } else if (c < 0x800) {
      bytes.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
    } else if (c >= 0xd800 && c <= 0xdbff && i + 1 < str.length) {
      c2 = str.charCodeAt(i + 1);
      if (c2 >= 0xdc00 && c2 <= 0xdfff) {
        i++;
        cp = 0x10000 + ((c & 0x3ff) << 10) + (c2 & 0x3ff);
        bytes.push(0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3f),
                   0x80 | ((cp >> 6) & 0x3f), 0x80 | (cp & 0x3f));
        continue;
      }
      bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
    } else {
      bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
    }
  }
  var bin = "";
  for (i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

function b64ToUtf8(b64) {
  var bin = atob(String(b64).replace(/\s/g, ""));
  var out = "", i = 0, b, cp;
  while (i < bin.length) {
    b = bin.charCodeAt(i);
    if (b < 0x80) {
      out += String.fromCharCode(b); i += 1;
    } else if (b < 0xe0) {
      out += String.fromCharCode(((b & 0x1f) << 6) | (bin.charCodeAt(i + 1) & 0x3f)); i += 2;
    } else if (b < 0xf0) {
      out += String.fromCharCode(((b & 0x0f) << 12) |
        ((bin.charCodeAt(i + 1) & 0x3f) << 6) | (bin.charCodeAt(i + 2) & 0x3f)); i += 3;
    } else {
      cp = ((b & 0x07) << 18) | ((bin.charCodeAt(i + 1) & 0x3f) << 12) |
           ((bin.charCodeAt(i + 2) & 0x3f) << 6) | (bin.charCodeAt(i + 3) & 0x3f);
      cp -= 0x10000;
      out += String.fromCharCode(0xd800 + (cp >> 10), 0xdc00 + (cp & 0x3ff)); i += 4;
    }
  }
  return out;
}

/* ---------- 收尾 ---------- */
var finished = false;
function finish(title, body) {
  if (finished) return;
  finished = true;
  console.log(title + " | " + body);
  if (title !== "跳过") $notification.post("Surge 配置同步", title, body);
  $done();
}

/* ---------- 主流程 ---------- */
var token = $persistentStore.read("github_token");
console.log("[sync] start token=" + (token ? "set(" + token.length + ")" : "NONE")
            + " key=" + (SURGE_KEY ? "set" : "NONE"));
if (!token) {
  finish("失败", "未设置 github_token");
} else {
  $httpClient.get(
    { url: SURGE_API, headers: { "X-Key": SURGE_KEY } },
    function (err, resp, data) {
      if (err || resp.status !== 200) {
        finish("失败", "读取 Surge 配置失败 " + (err ? JSON.stringify(err) : resp.status));
        return;
      }
      var profile;
      try {
        var pj = JSON.parse(data);
        // originalProfile = 用户在 App 里编辑的原文（125 行）
        // profile         = 合并模块后的生效版（600+ 行），不要用
        profile = pj.originalProfile || pj.profile;
      } catch (e) {
        finish("失败", "解析配置失败");
        return;
      }
      if (!profile || profile.indexOf("[General]") < 0) {
        finish("失败", "配置内容异常");
        return;
      }

      var ghHeaders = {
        "Authorization": "Bearer " + token,
        "Accept": "application/vnd.github+json",
        "Content-Type": "application/json",
        "User-Agent": "surge-config-sync"
      };

      // 先取远端当前文件，拿 sha 并比较内容
      $httpClient.get(
        { url: API + "?ref=" + BRANCH, headers: ghHeaders },
        function (e2, r2, d2) {
          var sha = null, remote = null;
          if (!e2 && r2.status === 200) {
            try {
              var j = JSON.parse(d2);
              sha = j.sha;
              remote = b64ToUtf8(j.content);
            } catch (e) {}
          } else if (e2 || (r2.status !== 404 && r2.status !== 200)) {
            finish("失败", "读取仓库失败 " + (e2 ? "网络错误" : r2.status));
            return;
          }

          if (remote !== null && remote === profile) {
            finish("跳过", "配置无变化");
            return;
          }

          var body = {
            message: "surge: sync " + new Date().toISOString(),
            content: utf8ToB64(profile),
            branch: BRANCH
          };
          if (sha) body.sha = sha;

          $httpClient.put(
            { url: API, headers: ghHeaders, body: JSON.stringify(body) },
            function (e3, r3, d3) {
              if (e3) { finish("失败", "推送失败: 网络错误"); return; }
              if (r3.status === 200 || r3.status === 201) {
                var n = profile.split("\n").length;
                finish("成功", "已推送 " + n + " 行");
              } else {
                var msg = "";
                try { msg = JSON.parse(d3).message; } catch (e) {}
                finish("失败", "推送返回 " + r3.status + (msg ? ": " + msg : ""));
              }
            }
          );
        }
      );
    }
  );
}
