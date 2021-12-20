## 常见问题

*此常见问题侧重于解答 Octopus 应用链开发者提出的技术问题。如果有更一般的问题，希望我们的[Octopus 网络常见问题](https://oct.network/#faqs)可以解答。如果有未解决的问题，请随时在[Octopus Discord](https://discord.gg/6GTJBkZA9Q)上提问。*

**章鱼网络中的应用链，是否有类似波卡网络中的 Collator(收集人节点)？**

章鱼网络中没有类似波卡网络的收集人节点。波卡收集人是平行链和中继链的全节点，它收集平行链交易并为中继链上的验证节点生成状态转换证明。而每个章鱼网络中的应用链是一个**独立的**为特定应用构建的区块链，章鱼网络中有应用链的验证节点，打包并验证应用链的交易，这些节点是由 OCT 持有者运行，并参与某个应用链的 OCT 质押为其提供安全性。

**应用链开发者可以自定义出块时间吗？**

出块时间是可自定义的，在 Barnacle 模版中是[3s](https://github.com/octopus-network/barnacle/blob/master/runtime/src/lib.rs#L156)。




