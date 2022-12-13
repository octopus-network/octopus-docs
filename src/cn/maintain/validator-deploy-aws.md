## 使用 AWS 自动部署验证节点

> 如果没有 AWS 账户，请先[创建和设置 AWS 账户](https://aws.amazon.com/cn/getting-started/guides/setup-environment/?nc1=h_ls)
>
> [创建 AWS Access Key](https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/id_credentials_access-keys.html)

验证人用[生成验证人帐户](./validator-generate-keys.md)中创建的 NEAR 账户访问并登录章鱼网络[主网](https://mainnet.oct.network)。

![validator login](../../images/maintain/validator_login.jpg)

然后点击`Appchains`选项，在应用链列表中，选择要成为验证人的应用链，点击进入应用链页面，进行以下操作：

1. 在应用链页面 **My Node** 区域，选择 `AWS` 并在`Access Key`输入框输入你的`AWS Access Key`，点击`Next`；

![aws access key](../../images/maintain/validator_aws_accesskey.jpg)

2. 在 **My Node** 区域会显示自动部署的AWS实例配置信息和大致成本，确认后请在`Secret Key`输入你的`AWS Secret Key`，并在`Deploy region`下拉框选择AWS实例部署的区域，点击`Confirm`；

![aws secret key](../../images/maintain/validator_aws_secretkey.jpg)

**注**：AWS Secret Key 仅会被用于此次部署，并且不会在任何地方被存储。

3. 在 **My Node** 区域节点状态为`Applying`，此时是自动部署服务在部署节点。

![validator applying](../../images/maintain/validator_aws_applying.jpg)

请等待大约3~5分钟，节点状态会变为`Syncing`，此时是验证节点在同步应用链的区块数据，越早上线的应用链，节点同步用的时间会越长。请耐心等待。

![validator syncing](../../images/maintain/validator_aws_syncing.jpg)

如需了解节点的同步情况，可参考[监控节点](./monitor-node.md)。

等待节点同步完成后，在 **My Node** 区域节点状态会变为`Running`。

![validator running](../../images/maintain/validator_aws_running.jpg)

自动部署的验证节点，可以在 **My Node** 区域，点击`Instance Status`最右侧的图标，可以查看运行验证节点实例的硬件状态信息（比如CPU、硬盘、内存）。

![validator instance status](../../images/maintain/validator_instance_status.jpg)

节点状态为`Running`时，可进行下一步操作[注册验证人](./validator-register.md)。

### 更改 AWS 实例类型

随着应用链需求的变化，您可以通过更改实例类型来调整 AWS 实例的大小。首先，在 **My Node** 区域点击`Instance`右侧的链接，进入自动部署的 AWS EC2 实例的控制台，然后，参考 AWS EC2 [更改实例类型](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ec2-instance-resize.html)完成操作。