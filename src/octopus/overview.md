## 章鱼网络概述

章鱼网络服务于 Web3.0 应用的区块链，也称为应用链。章鱼网络为应用链提供租赁安全性，互操作性，基础设施以及许多其它有用的服务。

![章鱼网络体系结构](../en/octopus/Octopus_Architecture.png)

### 中继

章鱼中继是运行在 NEAR 区块链网络上的一组[智能合约](https://github.com/octopus-network/octopus-relay-contract)。它为应用链提供按需分配的租用安全性，并提供与 NEAR 以及其它应用链之间的互操作性。

### 应用链

应用链是指基于 Substrate 为特定 Web3.0 应用开发的区块链。基于 Substrate 的区块链可以通过集成 pallet [pallet-octopus-appchain](https://github.com/octopus-network/pallet-octopus-appchain)，成为章鱼网络中的应用链，并[加入章鱼网络](https://github.com/octopus-network/pallet-octopus-appchain/blob/master/docs/Appchain_Guide.md)。从而获得章鱼网络提供的灵活且负担得起的租用安全性，强大的互操作性以及许多有用的基础设施。

### 验证人

章鱼验证人通过在章鱼中继为应用链质押OCT，并为应用链[运行验证人节点](../validator/guide.md)，以此为应用链提供安全性。

应用链的所有验证人节点数量组成出块共识的法定人数，他们质押OCT，获得应用链提供的通证奖励，有不良行为的验证人会被惩罚。