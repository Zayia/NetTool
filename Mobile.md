# 中国移动

Scripting **1.3.2**，抓取脚本 **2.0.1**，更新于 2026-10-09。与中国联通采用相同架构：代理工具抓取凭据写入 BoxJS，Scripting 读取 BoxJS 或手动凭据，直接调用中国移动接口并显示小组件。

已移除代理代查入口、自动回退、Surge 定时查询与面板、BoxJS 手动查询按钮和 Bark 设置。Scripting 直接查询是唯一的查询方式；网络仍遵循设备当前的网络与分流配置。

| 文件 | 地址 |
| --- | --- |
| BoxJS 统一订阅（移动、联通） | https://raw.githubusercontent.com/Zayia/NetTool/main/BoxJs/ComponentService.boxjs.json |
| Surge 模块 | https://raw.githubusercontent.com/Zayia/NetTool/main/surge/ChinaMobile.sgmodule |
| Egern 模块 | https://raw.githubusercontent.com/Zayia/NetTool/main/Egern/ChinaMobile.yaml |
| Loon 插件 | https://raw.githubusercontent.com/Zayia/NetTool/main/Loon/ChinaMobile.lpx |
| Quantumult X 重写 | https://raw.githubusercontent.com/Zayia/NetTool/main/QuantumultX/ChinaMobile.conf |
| 抓取脚本（模块自动加载） | https://raw.githubusercontent.com/Zayia/NetTool/main/Scripts/ChinaMobile.js |
| Scripting 安装包 | https://raw.githubusercontent.com/Zayia/NetTool/main/Scripting/中国移动.scripting |

## 安装和升级

1. 更新「Zayia 组件服务」BoxJS 订阅，以及当前代理客户端的中国移动模块、插件或重写，地址见上表。升级后资源只包含登录参数抓取规则。停用重复导入的旧版移动资源。
2. 在 BoxJS「Zayia 组件服务 → 中国移动」中填写手机号。已有 Zayia 凭据可继续使用，变量名和应用 ID 保持不变；首次安装或凭据失效时，启用对应资源和 MITM，信任客户端证书，再打开中国移动 App 登录以抓取参数。
3. 下载并导入「中国移动.scripting」1.3.2，默认从 BoxJS 读取凭据。设置页的「安装与订阅」提供同一组资源地址，「凭据来源」用于配置 BoxJS。
4. 在设置页配置完成后，点击「完成」保存，再刷新桌面小组件。Scripting、代理资源、JS 通知和 BoxJS 应用均使用「中国移动」，共用订阅为「Zayia 组件服务」。

各代理客户端的存储独立。切换客户端后，需要在新客户端启用 BoxJS、填写手机号并重新抓取。只更新同一客户端的资源无需重新抓取仍有效的参数。

## 凭据来源

- **BoxJS 优先：**「从 BoxJS 读取凭据」默认开启。地址默认 `https://boxjs.com`，可填写当前浏览器中实际能打开的地址，例如 `http://boxjs.com`。读取时需要对应客户端的 BoxJS 服务正常运行。
- **手动凭据：** BoxJS 读取失败、字段缺失或关闭读取时，使用设置页填写的完整手动凭据。移动需要手机号、加密登录参数、登录地址和加密标识（2、12 或 14），应从 BoxJS 的同一账号复制。Cookie 可选，留空时自动登录获取；这些字段不会与另一组凭据拼接。
- **成功账号缓存：** 查询成功后的凭据与会话保存到 Scripting 本地。未填写手动凭据且 BoxJS 只是读取失败时，仅在来源及已读字段一致的情况下使用此前成功账号；BoxJS 明确清空必填项时不会恢复旧账号。关闭 BoxJS 后需要填写手动凭据。

修改凭据设置并保存后，下次重新查询数据，避免沿用原账号的数据缓存。凭据来源兜底与数据显示旧缓存，都不涉及代理工具代查接口。

BoxJS 变量继续使用 `zayia_china_mobile_` 前缀：

| 后缀 | 内容 |
| --- | --- |
| `phonenumber` | 手机号，用户填写 |
| `params` | 加密登录参数，自动抓取 |
| `url` | 登录地址，自动抓取 |
| `x_qen` | 加密标识，自动抓取 |
| `cookie` | 可选的已有会话，允许留空 |
| `silent` | 关闭抓取通知 |
| `capture_notice_at` | 抓取通知时间，脚本维护 |

Scripting 刷新后的会话保存在 **Scripting 本地**，BoxJS 的 `cookie` 只作为可选输入。代理抓取脚本不再刷新 Cookie，也不发起任何外部请求。

## 查询

Scripting 调用中国移动官方话费和套餐接口，沿用已通过设备验证的加密、签名及会话处理：查询参数 `t` 和 URL 后缀保留完整 `Set-Cookie`。旧会话返回 `410000` 时自动登录后重试一次；查询遇到 HTTP 502/503/504 时沿用会话最多重试一次，登录请求本身不会因网关错误重试。

网络查询总超时为 30 秒。需要立即获取数据时，可在缓存设置中临时选择「只走网络」，保存后刷新小组件。

## 小组件显示与缓存

通用、定向和合计流量统一以 GB 显示，1 GB = 1024 MB。接口 `03/MB`、`04/GB` 会先统一换算；话费保留合法的零余额和负余额。

无限套餐或无法获得有效总量时，可在「通用高速流量配置」填写总量（GB），打开「显示剩余百分比」，用该额度减去已用通用流量计算剩余量。正常有限套餐优先使用接口额度。留空或填 0 关闭，支持小数。

默认刷新间隔为 180 分钟，自动缓存至少 4 小时；立即查询可临时选择「只走网络」。查询失败时可按设置显示允许范围内的旧数据缓存。iOS 决定桌面组件实际刷新时间。

## 抓取通知

相同的加密参数、登录地址和加密标识不重复写入或通知。参数变化时保存，成功通知最多每 10 分钟一次。BoxJS「静默模式」关闭抓取通知。抓取仍校验解密结果，遇到 App 风险验证时保留已有凭据，请先在 App 中完成验证。

## 来源与验证

界面基于 [ByteValley/NetTool](https://github.com/ByteValley/NetTool) 中国移动组件。加密库源自 [ChinaTelecomOperators/ChinaMobile](https://github.com/ChinaTelecomOperators/ChinaMobile) 的 `10086.js` 1.2.0，保留 GPL-3.0 许可证，见 [ChinaMobile.LICENSE](Scripts/ChinaMobile.LICENSE)。代理抓取脚本只包含抓取逻辑及 AES 校验所需的库。

1.2.3 的直接登录、话费和套餐查询已由用户在设备上验证成功。1.3.0 在此基础上移除代理查询，并测试 BoxJS/手动凭据选择、旧设置迁移、会话刷新、有限重试、超时、四客户端抓取和数据显示。自动测试使用模拟账号；新版在代理客户端的导入和实际设备表现需安装后确认。
