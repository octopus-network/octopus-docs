## 使用 GCP 自动部署验证节点

### 开始之前

1. [创建 Google 帐号](https://support.google.com/accounts/answer/27441?hl=zh-Hans)
2. [创建项目](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
3. [创建 Cloud 结算帐号](https://cloud.google.com/billing/docs/how-to/manage-billing-account)并[为项目启动结算功能](https://cloud.google.com/billing/docs/how-to/modify-project)
4. [启用 Compute Engine API](https://console.cloud.google.com/apis/api/compute.googleapis.com/overview)

### 部署

验证人用[生成验证人帐户](./validator-generate-keys.md)中创建的 NEAR 账户访问并登录章鱼网络[主网](https://mainnet.oct.network)。

![validator login](../../images/maintain/validator_login.jpg)

然后点击`Appchains`选项，在应用链列表中，选择要成为验证人的应用链，点击进入应用链页面，进行以下操作：

1. 在应用链页面 **My Node** 区域，选择 `GCP` 并使用 Google 帐号登录；

![gcp login](../../images/maintain/validator_gcp_login.jpg)

登录后，点击`Next`，勾选以下允许Octopus Network可以访问，然后点击`Continue`；

![gcp access](../../images/maintain/validator_gcp_access.jpg)

2. 在 **My Node** 区域会显示自动部署的实例配置信息和大致成本，确认后选择你的`Project`，并在`Deploy region`下拉框选择实例部署的区域，点击`Confirm`；

![gcp confirm](../../images/maintain/validator_gcp_confirm.jpg)

3. 在 **My Node** 区域节点状态为`Applying`，此时是自动部署服务在部署节点。

![validator applying](../../images/maintain/validator_gcp_applying.jpg)

请等待大约3~5分钟，节点状态会变为`Syncing`，此时是验证节点在同步应用链的区块数据，越早上线的应用链，节点同步用的时间会越长。请耐心等待。

![validator syncing](../../images/maintain/validator_gcp_syncing.jpg)

如需了解节点的同步情况，可参考[监控节点](./monitor-node.md)。

等待节点同步完成后，在 **My Node** 区域节点状态会变为`Running`。

![validator running](../../images/maintain/validator_gcp_running.jpg)

自动部署的验证节点，可以在 **My Node** 区域，点击`Instance Status`最右侧的图标，可以查看运行验证节点实例的硬件状态信息（比如CPU、硬盘、内存）。

![validator instance status](../../images/maintain/validator_instance_status.jpg)

节点状态为`Running`时，可进行下一步操作[注册验证人](./validator-register.md)。