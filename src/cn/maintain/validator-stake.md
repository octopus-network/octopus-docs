## 质押 OCT

要成为应用链的验证人，需要完成质押 OCT 的操作。

> **注意**
>
> * 验证人的 NEAR 账户应该有一些 NEAR 代币和足够的 OCT 代币用于质押。
> * 对于测试网络，请从[Faucet](https://faucet.testnet.oct.network/)获取 OCT。
> * 如果打算停止验证人，请**务必**先进行`Unbond`操作，并保持节点运行直到下一轮验证人上线。一键部署的验证节点，可以在 **My Node** 区域做`Destory`操作；手动部署的验证节点，则手动停止其验证节点。

验证人访问章鱼网络([Mainnet](https://mainnet.oct.network) 和 [Testnet](https://testnet.oct.network))，选择`Appchains`选项，进入应用链列表页面，并选择想要参与质押的应用链，进行以下操作：

1. 在应用链页面 **My Staking** 区域，点击`Register Validator`；

2. 在弹出页面中，输入：
    * `Validator Account`，验证人的应用链账号，是在[生成验证人帐户](./validator-generate-keys.md)步骤中生成的 SS58 地址。
    * `Staking Amount`，验证人参与质押的 OCT 数量，主网最低为10,000 OCT；
    * `Email`，验证人的联系邮箱；
    * `Twitter ID`，验证人的 Twitter 帐号;
    * 选择是否允许其他 OCT 持有者通过委托将 OCT 委托给验证人节点；
    
点击`Register`。

![stake](../../maintain/validator_stake.jpg)
