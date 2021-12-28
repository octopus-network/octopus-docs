## 监控节点

Telemetry 会暴露节点的信息，你可以使用`--telemetry-url`选项连接到指定的 telemetry 服务器。如果你决定将节点信息发送到公共 telemetry，对于主网，当你启动验证人节点时，可以使用`--telemetry-url`选项，设置其值为`'wss://telemetry.mainnet.octopus.network/submit 9 '`，并且需要使用`--name`选项设置节点名称。这样访问 [telemetry](https://telemetry.mainnet.octopus.network/)，就可以通过你的节点名查看你节点的状态。

> 注意：
> * 对于测试网，使用`'wss://telemetry.mainnet.octopus.network/submit 9'`设置`--telemetry-url`选项，并访问 [telemetry](https://telemetry.testnet.octopus.network/) 查看节点状态。