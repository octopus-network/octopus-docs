## 常见问题

*此常见问题侧重于解答 Octopus 应用链开发者提出的技术问题。如果有更一般的问题，希望我们的[Octopus 网络常见问题](https://oct.network/#faqs)可以解答。如果有未解决的问题，请随时在[Octopus Discord](https://discord.gg/6GTJBkZA9Q)上提问。*

**章鱼网络中的应用链，是否有类似波卡网络中的 Collator(收集人节点)？**

没有。波卡收集人是平行链和中继链的全节点，它收集平行链交易并为中继链上的验证节点生成状态转换证明。而每个章鱼网络中的应用链是一个**独立的**为特定应用构建的区块链，类似[Compound Gateway](https://compound.cash/)和[Polymesh](https://polymath.network/polymesh)，章鱼网络中的 Relay 是 NEAR 上的智能合约，应用链的安全性是由 OCT 持有者参与质押并运行应用链验证节点来提供的，故章鱼网络不需要收集人。

**应用链开发者可以自定义出块时间吗？**

出块时间是可自定义的，在 Barnacle 模版中是[3s](https://github.com/octopus-network/barnacle/blob/master/runtime/src/lib.rs#L156)。




