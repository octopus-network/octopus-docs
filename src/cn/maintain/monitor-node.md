## 监控验证节点

通过 [Telemetry](https://telemetry.mainnet.octopus.network/) 可以查看节点状态。

如果验证节点是自动部署的，验证人的节点名称将默认为`validator-[NEAR account]`, 其中`[NEAR account]`为注册验证人时，登录章鱼网络使用的 NEAR 账户。

如果验证节点是手动部署，验证人可以在启动验证人节点时，使用`--telemetry-url`选项，设置其值为`'wss://telemetry.mainnet.octopus.network/submit 9 '`，并且使用`--name`选项设置验证节点的名称，这样就可以通过节点名称查看节点的状态。

### 验证人的状态

在验证人列表中，验证人主要有以下几种状态：

* Registered, missing session keys，需设置Session Key； 
* New, coming next day(era)，需等待进入下个验证人集合；
* Validating，验证人正常工作；
* Validating, not producing blocks，需检查验证节点是否正常运行；
* Unstaking，解除质押；
