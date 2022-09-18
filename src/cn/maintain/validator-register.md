## 注册验证人

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

在应用链页面 **My Node** 区域，点击`···`，选择`Set Session Key`，在弹出页面中，选择上一步注册中填写的应用链账户，对于自动部署的验证人，只需点击`Set`。

![validator set sessionkey](../../images/maintain/validator_set_sessionkey.jpg)

![validator set sessionkey](../../images/maintain/validator_set_sessionkey2.jpg)

对于手动部署的验证人，需要在`Session key`输入框中输入`author_rotateKeys`操作中输出的`result`字段的内容；

![validator set sessionkey](../../images/maintain/validator_set_sessionkey1.jpg)

![validator set sessionkey](../../images/maintain/validator_set_sessionkey3.jpg)

设置成功后，并且验证节点正常运行，等待一个奖励周期大约 1 天，它将会进入新一轮的验证人集合中。

#### 检查 Session key

可以通过 PolkadotJS-Apps 检查会话密钥是否设置正确，配置 Apps 的`自定义终端`，应用链的 RPC Endpoit 可以从该应用链在章鱼网络[主网](https://mainnet.oct.network)页面获得。

连接到应用链后导航到`开发者`选项，选择`链状态`，选择`session > nextKeys(AccountId32)`选项，选择验证节点使用的验证人账户，点击`+`。

![check session keys](../../images/maintain/validator_check_session_keys.jpg)

检查返回值是否和设置的 Session Key 一致。

### 领取质押奖励

在一个奖励周期大约 1 天后，验证人将会获得质押奖励，需要手动领取。在 **My Staking** 区域，点击**Rewards**，在`Validator Reward`列表页面中，点击`Claim`按钮领取奖励。

![validator claim rewards](../../images/maintain/validator_claim_rewards.jpg)

### 停止验证人

如果打算停止验证人，需要在验证人列表中选择验证人，点击`Manage`打开`Validator Profile`页面。

![validator manage](../../images/maintain/validator_manage.jpg)

> **注意**，停止验证人后，质押的 OCT 有一个解绑期，在解绑期结束之前，无法提现，并且也不会获得任何质押奖励。

在`Validator Profile`页面中，点击`Unbond Validator`按钮执行解除质押操作。

![validator unbond](../../images/maintain/validator_unbond.jpg)

然后，停止验证节点的运行。自动部署的验证节点，在 **My Node** 区域中，点击`Destory`按钮可以删除自动部署的实例。

### 提现质押的 OCT

在应用链的 **My Staking** 区域，点击`···`，选择`Withdraw Stakes`。

![unbond withdraw](../../images/maintain/unbond_withdraw.jpg)

解绑期结束后，可以点击`Withdraw`提现质押的 OCT。

![withdraw stakes](../../images/maintain/withdraw_stakes.jpg)