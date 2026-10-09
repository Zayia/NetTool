# 中国移动组件服务

Scripting 1.2.1，代理查询脚本 1.3.1-zayia，更新于 2026-10-09。BoxJS 与中国联通共用「Zayia 组件服务」订阅。四种代理客户端的资源名称统一为「中国移动组件服务」，安装包和 Scripting 显示名称统一为简体「中国移动」。

1.2.1 已撤回直接查询试用，恢复 1.1.2 的代理查询流程。导入新版后，小组件直接使用当前代理工具查询，不再先尝试 Scripting 直连；设置页也移除了直连开关和测试按钮。BoxJS 凭据、GB 显示和手动高速额度继续沿用，无需因此次回退重新抓取。

| 文件 | 地址 |
| --- | --- |
| BoxJS 统一订阅（移动、联通） | https://raw.githubusercontent.com/Zayia/NetTool/main/BoxJs/ComponentService.boxjs.json |
| Surge 模块 | https://raw.githubusercontent.com/Zayia/NetTool/main/surge/ChinaMobile.sgmodule |
| Egern 模块 | https://raw.githubusercontent.com/Zayia/NetTool/main/Egern/ChinaMobile.yaml |
| Loon 插件 | https://raw.githubusercontent.com/Zayia/NetTool/main/Loon/ChinaMobile.lpx |
| Quantumult X 重写 | https://raw.githubusercontent.com/Zayia/NetTool/main/QuantumultX/ChinaMobile.conf |
| 查询脚本（模块自动加载） | https://raw.githubusercontent.com/Zayia/NetTool/main/Scripts/ChinaMobile.js |
| Scripting 安装包 | https://raw.githubusercontent.com/Zayia/NetTool/main/Scripting/中国移动.scripting |

## 安装

1. 在 BoxJS 添加上表的统一订阅；已有「Zayia 组件服务」时更新订阅即可。在「Zayia 组件服务 → 中国移动」填写手机号。
2. 按当前客户端选择一份资源：Surge「配置 → 模块 → 安装新模块」、Egern「模块 → 添加远程模块」、Loon「插件 → 添加插件」或 Quantumult X「重写 → 引用远程资源」。启用脚本、重写和 MITM，信任该客户端的证书，停用旧版移动资源，避免两套规则同时捕获。
3. 打开中国移动 App，触发自动登录请求。首次捕获成功会通知，BoxJS 中加密登录参数、登录地址和加密标识将自动更新。若账号要求风险验证，先在 App 中完成验证后重新捕获。
4. 下载并导入「中国移动.scripting」。设置页提供四种客户端的安装入口。小组件通过当前代理客户端查询数据，查询时需保持对应资源和 MITM 生效。
5. 无限套餐或无有效总量时，可在 Scripting 设置页「通用高速流量配置」填写总量（GB），打开「显示剩余百分比」并保存。留空或填 0 关闭，支持小数。

已有 Zayia 账号数据的用户无需因合并订阅重新捕获：应用 ID 和全部变量名保持不变。原单独的「Zayia 中国移动」订阅已合并到上述地址，确认统一订阅显示数据后可取消旧订阅，请勿清空账号数据。两个 Scripting 小组件的设置页均指向统一订阅。

首次从原作者版本迁入时，添加订阅不会复制原版凭据，需要重新捕获。无需手动填写 Cookie，也无需开启原版「Scriptable 服务模式」。推荐把手机号填在 BoxJS；Surge 模块中填写手机号时，会覆盖本次查询使用的 BoxJS 手机号，并且对通知、面板和组件均生效。

各客户端的存储互相独立。切换客户端后，需要在新客户端启用 BoxJS、填写手机号并重新捕获；只更新同一客户端的资源无需重新抓取仍有效的参数。Scripting 安装包文件名已改为简体；若导入后被识别为新脚本，请确认设置并将桌面组件绑定到新的「中国移动」。

## 数据与显示

Scripting 向 `https://api.example.com/zayia/10086/query` 发送请求，由当前 Surge / Egern / Loon / Quantumult X 拦截后运行同一份查询脚本，返回 `{fee, plan}`。该地址是本机代理处理的入口，不是移动官方服务器。实际登录和套餐查询仍访问移动官方域名。

每份资源均包含登录参数抓取和小组件查询两条规则。Egern 使用原生 YAML，Loon 使用 `http-request` 并读取请求体；Quantumult X 抓取使用 `script-request-body`，查询使用 `script-analyze-echo-response` 直接返回 JSON。Quantumult X 的成功和失败响应分别使用完整的 `HTTP/1.1 200 OK`、`HTTP/1.1 502 Bad Gateway` 状态行。

独立的持久化变量使用 `zayia_china_mobile_` 前缀：

| 变量后缀 | 内容 |
| --- | --- |
| `phonenumber` | 手机号 |
| `params` | 加密登录请求体 |
| `url` | 登录接口地址 |
| `x_qen` | 加密标识，支持 2、12、14 |
| `cookie` | 查询时自动获取、刷新 |
| `silent` | 是否关闭抓取和定时通知 |
| `bark_key` | 可选的 Bark Key |

修复内容：

- 识别接口单位 `03/MB`、`04/GB`，统一换算后计算；通用、定向、合计流量固定以 GB 显示，保留两位小数。
- 每个流量分组分别选择明细或汇总，避免通用有明细时漏算只有汇总的定向流量。全部过期的明细不重新从汇总补回。
- 话费优先使用 `realBalanceFee`，兼容 `curFee`、`val`，保留合法的零余额或负余额。
- 手动高速额度只在无限/没有有效总量时兜底，正常有限套餐优先使用接口额度。40 GB 已用 12 GB 时显示剩余 28.00 GB、70%；超额后剩余为 0。
- 手动额度在渲染时应用，缓存保存接口用量。新版使用新的数据缓存版本，避免沿用原版错误单位的数据。
- 组件查询等待上限为 50 秒，覆盖响应体读取；成功后清理计时器。Surge、Egern、Loon 查询规则的执行超时为 60 秒，Quantumult X 由客户端控制重写脚本时限。
- Cookie 失效会刷新后重试，每次接口调用最多重试一次，避免无限循环。

Scripting 默认刷新间隔 180 分钟，自动缓存至少 4 小时；想立即查询时，可临时选择「只走网络」，刷新后恢复自动。iOS 决定桌面组件实际刷新时间。

## 通知规则

- 相同的加密参数、登录地址、加密标识：不重复写入，不通知。
- 其中任一变化：保存新值；成功通知最多每 10 分钟一次。通知间隔不限制数据更新。
- BoxJS 静默模式开启时，不发抓取和定时查询通知。模块静默参数留空时使用 BoxJS，填 1 开启静默、填 0 关闭。
- 组件后台查询和面板更新不弹通知；失败会返回可读错误。捕获失败只写日志，不修改原请求。
- Surge 保留每天 9 点的定时通知和每 6 小时刷新的面板；可在模块参数对应「禁用」项中填 `#` 关闭。Egern、Loon、Quantumult X 资源提供抓取和小组件查询，未添加定时任务或面板。

## 来源和验证

Scripting 界面基于 [ByteValley/NetTool](https://github.com/ByteValley/NetTool) 中国移动 1.0.0。查询脚本的加密和代理运行时来自 [ChinaTelecomOperators/ChinaMobile](https://github.com/ChinaTelecomOperators/ChinaMobile) 的 `10086.js` 1.2.0；修改层保留在发布脚本中，许可证见 [ChinaMobile.LICENSE](Scripts/ChinaMobile.LICENSE)。修改版未绑定原作者的自动更新地址。

已在四种客户端的模拟运行环境中验证三种登录加密、请求签名、Cookie 刷新、通知限制、异常返回和资源链接，并检查单位换算、分组回退及额度计算。测试使用模拟账号和接口响应，没有包含真实凭据；设备上的导入、MITM 拦截和实际移动账号查询仍需安装后验证。
