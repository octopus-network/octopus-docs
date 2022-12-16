## 注册验证人

本指南是针对自动部署服务的验证人。对于手动部署的验证人，请参考本指南[注册验证器](./validator-register-manually.md)。

注册应用链的验证人，需要完成注册验证人和设置 Session Key 的操作。

### 注册验证人

在应用链页面 **My Node** 区域，点击`Register Validator`。在弹出页面中输入：

* `Appchain Account`，验证人的应用链账号，是在[生成验证人帐户](./validator-generate-keys.md)步骤中生成的地址。
* `Deposit Amount`，验证人质押的 OCT 数量；
* `Email`，验证人的联系邮箱；
* `Twitter ID`，验证人的 Twitter 帐号;
* `Accept delegation`，选择验证人节点是否接受[委托人委托](./delegator-delegate.md)；
    
点击`Register`。

![validator register](../../images/maintain/validator_register.jpg)

注册成功后，请等待大约1～2分钟，验证人的应用链账户中会收到 1 个应用链的代币，用于进行下一步的操作。

### 设置 Session Key

**注意**，确保验证节点已完成链数据的同步，并且验证人的应用链账户中已收到应用链的代币。

使用自动部署验证节点服务，验证人只需在应用链页面 **My Node** 区域，点击`···`，选择`Set Session Key`，在弹出页面中，选择上一步注册中填写的应用链账户，点击`Set`。

![validator set sessionkey](../../images/maintain/validator_set_sessionkey.jpg)

![validator set sessionkey](../../images/maintain/validator_set_sessionkey2.jpg)

#### 检查 Session key

可以通过 PolkadotJS-Apps 检查会话密钥是否设置正确，配置 Apps 的`自定义终端`，应用链的 RPC Endpoit 可以从该应用链在章鱼网络[主网](https://mainnet.oct.network)页面获得。

![RPC Endpoit](../../images/maintain/appchain_rpc.jpg)

连接到应用链后导航到`开发者`选项，选择`链状态`，选择`session > nextKeys(AccountId32)`选项，选择验证节点使用的验证人账户，点击`+`。

![check session keys](../../images/maintain/validator_check_session_keys.jpg)

检查返回值是否和设置的 Session Key 一致。

设置 Session Key 成功后，并且验证节点正常运行，等待一个奖励周期大约 1 天，它将会进入新一轮的验证人集合中。

---


**恭喜！** 如果你已经遵循所有这些步骤，并被选入验证人集合，那么你现在已经在运行一个应用链验证人节点。欢迎加入验证人/委托人专属的 Discord 频道，通过点击每个应用链页面上的按钮。

![discord](../../images/maintain/validator_join_discord.jpg)