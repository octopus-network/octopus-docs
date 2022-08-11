## 升级验证节点

应用链客户端节点发布新的版本后，验证人需要升级其验证节点。

使用自动部署功能部署验证节点的验证人，您只需要在应用链页面 **My Node** 区域，点击 `Upgrade Image` 即可完成升级。

![upgrade image](../../images/maintain/validator_upgrade_image.jpg)

确认 `Upgrade` 并输入 AWS secret key，确定后节点状态会变成 `Upgrading`。

![upgrade image2](../../images/maintain/validator_upgrade_image2.jpg)

![upgrade image3](../../images/maintain/validator_upgrade_image3.jpg)

当节点状态从 `Upgrading` 变成 `Running`后，您可以访问[Telemetry](https://telemetry.mainnet.octopus.network/)，检查您验证节点的版本是否已正确升级。 

对于手动部署验证节点的验证人，请关注 Discord 的**validators-delegators**频道，章鱼网络团队会发布应用链节点新版本的信息，您需要：

* 1. 编译新版本的应用链源码，生成新的应用链客户端；
* 2. 停掉升级前的验证节点；
* 3. 用新的应用链客户端启动验证节点。

如果您使用 Docker 部署的，那么可以使用章鱼网络编译的 Docker 镜像。比如：[Myriad Node v2.1.5](https://github.com/octopus-appchains/myriad-node/releases/tag/2.1.5)

