## 应用链开发

在本指南中，我们将要做的事情包括：

1. 搭建应用链的开发环境；
2. 实现应用链的业务逻辑；
3. 启动应用链的本地网络；

### 搭建应用链的开发环境

我们基于 Substrate 框架来进行应用链开发。应用链的节点可以使用章鱼网络提供的[模板 Barnacle](https://github.com/octopus-network/barnacle)，它和 [Substrate 节点模版](https://github.com/substrate-developer-hub/substrate-node-template)类似，是一个最小可运行的应用链节点，使用它可以快速开始构建自己的应用链。应用链的前端可以使用 Substrate 开发者中心提供的[前端模版](https://github.com/substrate-developer-hub/substrate-front-end-template)，它是使用 ReactJS 构建。

首先，搭建 Rust 开发环境。

备注：在基于 Unix 的操作系统（如 macOS 或 Linux）上进行 Substrate 开发是最简单的，Windows 系统的开发者建议使用 Windows Subsystem Linux (WSL)。

对于大多数用户，可以执行以下命令通过自动化脚本完成。

`curl [https://getsubstrate.io](https://getsubstrate.io/) -sSf | bash -s -- --fast`

想了解更多信息，可以参考 Substrate 开发者中心的[安装指南](https://substrate.dev/docs/en/knowledgebase/getting-started/)。

其次，使用应用链节点模板 Barnacle，它是在 Substrate 节点模版的基础上，集成了一系列由章鱼网络团队实现的 [octopus-pallets](https://github.com/octopus-network/octopus-pallets)，其中包括

* 应用链元数据，验证人相关的，[pallet-octopus-appchain](https://github.com/octopus-network/octopus-pallets/tree/main/appchain)
* 章鱼网络 LPoS 的实现，[pallet-octopus-lpos](https://github.com/octopus-network/octopus-pallets/tree/main/lpos)
* 一些常见的 trait 和类型，[pallet-octopus-support](https://github.com/octopus-network/octopus-pallets/tree/main/support)
* 管理从应用链发送到主链的跨链消息，[pallet-octopus-upward-messages](https://github.com/octopus-network/octopus-pallets/tree/main/upward-messages)。

```yaml
git clone --depth 1 https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build
```

这样基于 Barnacle，应用链开发团队只需专注于业务功能 pallets 的开发即可方便接入到章鱼网络。

最后，安装前端模版。

```yaml
# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install node
# Install Yarn
npm install --global yarn
# Clone the frontend template from github
git clone -b v3.0.0+monthly-2021-08 --depth 1 https://github.com/substrate-developer-hub/substrate-front-end-template
# Install the dependencies
cd substrate-front-end-template
yarn install
```

> **备注**
>
> 若`substrate-front-end-template`有更新的版本，则建议用其替换掉上述命令中的`v3.0.0+monthly-2021-08`。

### 实现应用链的业务逻辑

在应用链中新增业务逻辑，一般使用的开发模式如下：

- 首先新增一个 `pallet`，在 `pallets/<pallet-name>/src/lib.rs` 中实现具体的业务逻辑；
- 然后在 `runtime/Cargo.toml` 和 `runtime/src/lib.rs` 中添加 `pallet` ，将其包含到 `runtime` 中；
- 最后在 `node/Cargo.toml` 中添加 `runtime` 名称和相对路径，将其安装在节点中。

**注意**：目前，请将 `MILLISECS_PER_BLOCK` 的值设置为 6000。

想了解更多信息，可以参考 Substrate 开发者中心的[添加 Pallet 到 Runtime 指南](https://substrate.dev/docs/en/tutorials/add-a-pallet/)。

#### 应用链的配置

应用链的配置主要是在 ChainSpec 文件中。需要配置的

* 应用链 Pallet
    - Anchor 合约；
    - 验证人集合；
    - 在 NEAR 网络预挖的 token 数量；

Barnacle 示例如下：

```Rust
"octopusAppchain": {
  "anchorContract": "barnacle.registry.test_oct.testnet",
  "validators": [
    [
      "5G6xVxyaS8PZargUL27pSEbhLQbRQJ2PBvrvXVpyjHzivQxs",
      10000000000000000000000
    ],
    [
      "5Dqg8gjTeM4it3mCaX1bdQmTT3GXgv7oSuZAfFUwJaTKuJfz",
      10000000000000000000000
    ],
    [
      "5Gj5yzSKtqkMM3j7FhRSWuybkwwms9KBPsAhyeobgmLD4r1g",
      10000000000000000000000
    ],
    [
      "5F42cCzboJhzfuVazARY6gFVpjwWMwAg1aG3pWF2aS76uu4Q",
      10000000000000000000000
    ]
  ],
  "preminedAmount": 500000000000000000000000000,
  "assetIdByName": [
    [
      "usdc.testnet",
      0
    ]
  ]
},
```

* LPoS Pallet
    - LPoS 奖励的历史周期；
    - 每个 Era 的奖励；

Barnacle 示例如下：

```Rust
"octopusLpos": {
  "historyDepth": 84,
  "eraPayout": 20000000000000000000000
},
```


### 启动应用链的本地网络

执行以下命令编译，并启动本地区块链节点：

```yaml
cargo build
# Run a temporary node in development mode
./target/debug/appchain-barnacle --dev --tmp
```

如果想要运行一个本地的前端和本地节点进行交互，可以从以下两个方法中选择一个:
* 参考 Substrate 开发者中心的[运行本地前端](https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain/interact#start-the-front-end-template)。
* 参考Polkadot-JS[连接本地节点](https://substrate.dev/docs/en/knowledgebase/integrate/polkadot-js#connecting-to-local-node)

### 发布应用链版本

一旦完成应用链的开发，以及和章鱼网络 Pallets 的集成，应用链团队需要发布一个应用链的版本。

> 备注：
>
> * Chain Spec文件可以放在源代码的一个文件夹下。例如：[resources](https://github.com/octopus-network/barnacle/tree/master/resources)
> * 和章鱼网络 Pallets 的集成，请参考[Barnacle](https://github.com/octopus-network/barnacle)