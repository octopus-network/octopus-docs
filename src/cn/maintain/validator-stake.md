## 质押 OCT

要成为应用链的验证人，需要完成质押 OCT 的操作。

> **注意**
>
> * 验证人的 NEAR 账户应该有一些 NEAR 代币和足够的 OCT 代币用于质押。
> * 对于测试网络，请从[Faucet](https://faucet.testnet.oct.network/)获取 OCT。
> * 如果打算停止验证人，请先进行`Unstake`操作，并保持节点运行直到下一轮验证人上线（测试网络中约 20 分钟）。一键部署的验证节点，可以点击`Deploy Validator`，然后做`Destory`操作；手动部署的验证节点，则手动停止其验证节点。

验证人访问章鱼网络[测试网](https://testnet.oct.network/)，选择`Appchains`选择，进入应用链列表页面，只需进行以下2步操作：

1. 在应用链列表页面中选择应用链，点击`Stake`；
2. 在弹出页面中，输入你的`Validator ID`和`Staking Amount`，点击`Stake`。

`Validator ID`是验证人的应用链账号，是在[生成验证人帐户](./validator-generate-keys.md)步骤中生成的 SS58 地址。

![stake](../../maintain/validator_stake.jpg)
