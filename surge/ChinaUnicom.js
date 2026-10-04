/*
 * Surge 请求头脚本。基于 ByteValley 中国联通组件服务的 BoxJS 数据结构。
 * 只保存小组件使用的字段，不修改请求、不输出凭据、不请求任何外部服务。
 * 持久化根键：ZayiaComponentService
 * BoxJS 字段：@ZayiaComponentService.ChinaUnicom.Settings.Cookie
 */
(function () {
  "use strict";

  const ROOT_KEY = "ZayiaComponentService";
  const TARGET = /^https:\/\/m\.client\.10010\.com\/navigationService\/naviService\/hotRecommend(?:\?.*)?$/;

  function isObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  function parseCookie(raw) {
    const fields = Object.create(null);
    for (const part of raw.split(";")) {
      const equal = part.indexOf("=");
      if (equal < 1) continue;
      // 仅按第一个等号分割，保留令牌中的 +、/、=，不进行 URL 解码。
      fields[part.slice(0, equal).trim()] = part.slice(equal + 1).trim();
    }
    return fields;
  }

  try {
    if (typeof $request === "undefined") return;
    if (!TARGET.test($request.url || "") || String($request.method).toUpperCase() !== "POST") return;

    const headers = $request.headers || {};
    const headerName = Object.keys(headers).find((name) => name.toLowerCase() === "cookie");
    const raw = headerName ? headers[headerName] : "";
    if (typeof raw !== "string" || /[\r\n]/.test(raw)) return;
    const fields = parseCookie(raw);

    // 一次请求必须同时携带这两个值，避免拼接不同会话的旧凭据。
    if (!fields.ecs_token || !fields.ecs_acc) {
      console.log("[中国联通] 本次请求缺少 ecs_token 或 ecs_acc，保留已有凭据。");
      return;
    }
    const loginType = fields.login_type || "01";
    if (loginType !== "01") {
      console.log("[中国联通] 本次不是手机登录类型，保留已有凭据。");
      return;
    }

    const parts = [
      "ecs_token=" + fields.ecs_token,
      "ecs_acc=" + fields.ecs_acc,
      "login_type=" + loginType,
    ];
    // 手机号用于话费 URL；不是额外的认证令牌。
    const mobile = [fields.c_mobile, fields.u_account].find((value) => /^1\d{10}$/.test(value || ""));
    if (mobile) parts.push("c_mobile=" + mobile);
    if (fields.c_version && /^[a-zA-Z0-9_@.-]+$/.test(fields.c_version)) {
      parts.push("c_version=" + fields.c_version);
    }
    const cookie = parts.join("; ");

    const stored = $persistentStore.read(ROOT_KEY);
    const root = stored ? JSON.parse(stored) : {};
    if (!isObject(root)) throw new Error("Invalid root");
    if (root.ChinaUnicom != null && !isObject(root.ChinaUnicom)) throw new Error("Invalid carrier");
    const carrier = root.ChinaUnicom || {};
    if (carrier.Settings != null && !isObject(carrier.Settings)) throw new Error("Invalid settings");
    const settings = carrier.Settings || {};
    if (settings.Cookie === cookie) return;

    settings.Cookie = cookie;
    carrier.Settings = settings;
    root.ChinaUnicom = carrier;
    if (!$persistentStore.write(JSON.stringify(root), ROOT_KEY)) throw new Error("Write failed");

    $notification.post("中国联通", "小组件凭据已更新", "已保存至 BoxJS：Zayia 组件服务 → 中国联通→ 联通 Cookie。");
  } catch (_) {
    // 不输出异常对象，避免运行时错误附带 Cookie 或持久化内容。
    console.log("[中国联通] 保存失败，请检查 ZayiaComponentService 数据格式及 Surge 持久化存储。");
  } finally {
    $done({});
  }
})();
