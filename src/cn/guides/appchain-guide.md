# 应用链开发者指南

在进入开发之前，假设您已经了解[章鱼网络](https://oct.network/)以及章鱼网络[整体架构](https://docs.oct.network/cn/general/octopus-overview.html#octopus-network-overview)。

## 开发测试

搭建开发测试环境和熟悉必要的工具

+ [安装 Rust 以及 Substrate](https://docs.substrate.io/main-docs/install/)
+ [Substrate 命令行工具](https://docs.substrate.io/reference/command-line-tools/)

选择开发模板，基于章鱼网络提供的模板进行开发，我们提供

+ [应用链开发模板](https://github.com/octopus-network/barnacle/tree/release-v0.9.18)
+ [应用链EVM兼容开发模板](https://github.com/octopus-network/barnacle/tree/release-v0.9.18-evm)

选择Barnacle进行定制业务逻辑开发

+ [应用链开发](https://docs.oct.network/cn/guides/appchain-develop.html#implement-appchain-runtime)
+ [Substrate构建文档](https://docs.substrate.io/main-docs/build/)
+ [Substrate Pallet文档](https://docs.substrate.io/tutorials/work-with-pallets/)

选择Barnacle-evm进行业务逻辑开发

+ [应用链EVM兼容](https://docs.oct.network/cn/guides/appchain-evm.html#appchain-evm-compatible)
+ [Moonbeam以太坊API](https://docs.moonbeam.network/builders/build/eth-api/)

务必在本地环境搭建一个多节点的应用链网络，方便进行开发测试。

+ [搭建Substrate私有网络](https://docs.substrate.io/tutorials/get-started/simulate-network/)


## 测试网/主网启动

熟悉[应用链启动流程](https://docs.oct.network/cn/guides/appchain-startup.html)，应用链代码开发完成后，可联系章鱼团队启动测试网。

+ [注册](https://docs.oct.network/cn/guides/appchain-register.html#appchain-register)
+ [审计]()
+ [投票](https://docs.oct.network/cn/guides/voting-appchain.html#voting-for-appchain)
+ [启动](https://docs.oct.network/cn/guides/appchain-startup.html#appchain-booting-process)

主网启动流程和测试网一样。


## 升级维护

[升级](https://docs.oct.network/cn/guides/appchain-upgrade.html#appchain-upgrade)


## 验证节点

所有人可以作为验证人和委托人两种角色加入章鱼网络，并参与应用链的治理和质押

+ [章鱼网络质押](https://docs.oct.network/cn/general/octopus-staking.html#octopus-network-staking)
+ [验证人指南](https://docs.oct.network/cn/maintain/validator-guide.html)
+ [委托人指南](https://docs.oct.network/cn/maintain/delegator-delegate.html)

查看验证节点

+ 通过章鱼网络查看对应[应用链的状态](https://mainnet.oct.network/appchains)
+ 通过[telemetry节点监控](https://telemetry.mainnet.octopus.network)查看节点同步状况