# 中国联通组件服务

中国联通与中国移动共用「Zayia 组件服务」BoxJS 订阅。中国移动的模块和 Scripting 安装说明见 [Mobile.md](Mobile.md)。

选择你正在使用的客户端安装对应资源，启用脚本和 MITM，信任该客户端的 MITM 证书，然后打开中国联通 App 首页触发抓取。

| 客户端 | 资源地址 | 导入位置 |
| --- | --- | --- |
| Surge | [ChinaUnicom.sgmodule](https://raw.githubusercontent.com/Zayia/NetTool/main/surge/ChinaUnicom.sgmodule) | 模块 → 安装新模块 |
| Egern | [ChinaUnicom.yaml](https://raw.githubusercontent.com/Zayia/NetTool/main/Egern/ChinaUnicom.yaml) | 模块 → 添加远程模块 |
| Loon | [ChinaUnicom.lpx](https://raw.githubusercontent.com/Zayia/NetTool/main/Loon/ChinaUnicom.lpx) | 插件 → 添加插件 |
| Quantumult X | [ChinaUnicom.conf](https://raw.githubusercontent.com/Zayia/NetTool/main/QuantumultX/ChinaUnicom.conf) | 重写 → 引用远程资源 |

这些是模块、插件或重写资源，不是完整代理配置文件。抓取规则只处理联通首页的目标请求头，不需要请求体。

## BoxJS

先在当前客户端中配置并启用 BoxJS，再在 BoxJS 的订阅管理中添加：

```text
https://raw.githubusercontent.com/Zayia/NetTool/main/BoxJs/ComponentService.boxjs.json
```

此订阅同时包含「中国联通」和「中国移动」。已有「Zayia 组件服务」时更新订阅即可，无需再添加另一个地址。抓取后，在「Zayia 组件服务 → 中国联通 → 联通 Cookie」查看结果。

合并订阅保留两家的应用 ID 和变量名，已有 Zayia 凭据可继续使用，无需重新抓取。原单独的「Zayia 中国移动」订阅用户请改用上述地址，确认数据正常后取消旧订阅，不要清空账号数据。

抓取脚本 1.0.6 起保留请求中的 `login_type` 原值，包括 `06`、`19` 等，不再限制为 `01`，也不补默认值。更新客户端的模块、插件或重写资源后，重新打开联通 App 首页即可抓取；已有 Scripting 1.0.5 可继续使用。

```text
持久化根键：ZayiaComponentService
变量：@ZayiaComponentService.ChinaUnicom.Settings.Cookie
读取接口：<BoxJS 地址>/query/data/ZayiaComponentService
```

各客户端的持久化存储彼此独立，Scripting 需要访问当前负责抓取的客户端所提供的 BoxJS。换用客户端后需重新抓取，订阅地址和变量名不变。

## Scripting

下载并导入：[中国联通.scripting（1.0.8）](https://raw.githubusercontent.com/Zayia/NetTool/main/Scripting/中国联通.scripting)。移动用户导入：[中国移动.scripting（1.2.1）](https://raw.githubusercontent.com/Zayia/NetTool/main/Scripting/中国移动.scripting)，使用方法见 [Mobile.md](Mobile.md)。

两个小组件的设置页均已接入上述统一订阅地址。联通读取逻辑仍为 BoxJS 优先，失败时回退本地手动 Cookie；关闭 BoxJS 时直接使用手动 Cookie。

四种客户端中，两套资源分别统一命名为「中国联通组件服务」「中国移动组件服务」。Scripting 显示名称和安装包文件名统一使用简体「中国联通」「中国移动」。若改名后的安装包被识别为新脚本，请确认设置，并将桌面组件绑定到新脚本；BoxJS 凭据变量保持不变。

### 手动高速流量额度（1.0.6）

1. 运行「中国联通」，在「通用高速流量配置 → 通用高速流量总量（GB）」填写额度，例如 `40`，也支持 `40.5` 这类小数。留空或填 `0` 关闭兜底。
2. 在「渲染配置」打开「当前：显示剩余百分比」，点击右上角「完成」，刷新小组件。
3. 套餐没有有效的有限总量时，按手动额度减去接口已用通用流量计算。例如 40 GB 已用 12 GB，显示剩余 28.00 GB、70%；用量超过额度时，剩余显示 0.00 GB。有限套餐优先使用接口总量，即使用完也不会切换成手动额度。

通用、定向和合计流量统一以 GB 显示，保留两位小数（1 GB = 1024 MB）；关闭剩余开关时显示已用量和已用比例。手动额度只用于通用流量，合计流量按原设置决定是否计入定向。

修改额度后，下次渲染会用缓存中的原始用量重新计算；不会把手动总量写进用量缓存。升级后若仍在使用旧缓存，可先把缓存模式设为「只走网络」刷新一次，再恢复「自动」。桌面刷新时机由 iOS 调度。

## 格式与验证说明

- Egern 使用原生 YAML 的 `scriptings.http_request` 与 `mitm.hostnames.includes`，不再复用 Surge 地址。
- Loon 使用 `[Script]` 的 `http-request`，仅读取请求头。
- Quantumult X 使用官方远程重写格式：`hostname` 与 `script-request-header`。Scripting 的安装按钮使用 `add-resource` 和编码后的 JSON，追加资源。
- 四种资源复用同一份脚本。Surge、Egern、Loon 使用 `$persistentStore`；Quantumult X 使用 `$prefs`。结束时调用 `$done({})` 放行原请求。
- 已执行本地模拟测试、YAML 解析和远程资源检查。Egern、Loon、Quantumult X 的设备端运行需安装后验证；此前 Surge 抓取已由用户验证。

参考：[原版 Egern YAML](https://github.com/ByteValley/NetTool/blob/main/Egern/Module/Component/ChinaMobile.yaml)、[Loon 插件示例](https://github.com/Loon0x00/LoonExampleConfig/blob/master/Plugin/Plugin_Example.plugin)、[Quantumult X 远程重写示例](https://github.com/crossutility/Quantumult-X/blob/master/sample-import-rewrite.snippet)、[Quantumult X 安装链接规范](https://github.com/crossutility/Quantumult-X/blob/master/url-scheme.md)。
