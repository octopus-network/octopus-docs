## 应用链开发指南

在本指南中，我们将要做的事情包括：

1. 搭建应用链的开发环境；
2. 实现应用链的业务逻辑；
3. 启动应用链的本地网络；

## 搭建应用链的开发环境

我们基于 Substrate 框架来进行应用链开发。应用链的节点可以使用章鱼网络提供的[模板 Barnacle](https://github.com/octopus-network/barnacle)，它和 [Substrate 节点模版](https://github.com/substrate-developer-hub/substrate-node-template)类似，是一个最小可运行的应用链节点，使用它可以快速开始构建自己的应用链。应用链的前端可以使用 Substrate 开发者中心提供的[前端模版](https://github.com/substrate-developer-hub/substrate-front-end-template)，它是使用 ReactJS 构建。

首先，搭建 Rust 开发环境。

备注：在基于 Unix 的操作系统（如 macOS 或 Linux）上进行 Substrate 开发是最简单的，Windows 系统的开发者建议使用 Windows Subsystem Linux (WSL)。

对于大多数用户，可以执行以下命令通过自动化脚本完成。

`curl [https://getsubstrate.io](https://getsubstrate.io/) -sSf | bash -s -- --fast`

想了解更多信息，可以参考 Substrate 开发者中心的[安装指南](https://substrate.dev/docs/en/knowledgebase/getting-started/)。

其次，使用应用链节点模板 Barnacle。

```yaml
git clone --depth 1 https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build
```

最后，安装前端模版。

```yaml
# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install node
# Install Yarn
npm install --global yarn
# Clone the frontend template from github
git clone -b v3.0.0+monthly-2021-05 --depth 1 https://github.com/substrate-developer-hub/substrate-front-end-template
# Install the dependencies
cd substrate-front-end-template
yarn install
```

## 实现应用链的业务逻辑

通过分析 [Barnacle](https://github.com/octopus-network/barnacle)，我们知道在应用链中新增业务逻辑，一般使用的开发模式如下：

- 首先新增一个 `pallet`，在 `pallets/<pallet-name>/src/lib.rs` 中实现具体的业务逻辑；
- 然后在 `runtime/Cargo.toml` 和 `runtime/src/lib.rs` 中添加 `pallet` ，将其包含到 `runtime` 中；
- 最后在 `node/Cargo.toml` 中添加 `runtime` 名称和相对路径，将其安装在节点中。

想了解更多信息，可以参考 Substrate 开发者中心的[添加 Pallet 到 Runtime 指南](https://substrate.dev/docs/en/tutorials/add-a-pallet/)。

## 启动应用链的本地网络

执行以下命令编译，并启动本地区块链节点：

```yaml
cargo build
# Run a temporary node in development mode
./target/debug/appchain-barnacle --dev --tmp
```

如果想要运行一个本地的前端和本地节点进行交互，可以从以下两个方法中选择一个:
* 参考 Substrate 开发者中心的[运行本地前端](https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain/interact#start-the-front-end-template)。
* 参考Polkadot-JS[连接本地节点](https://substrate.dev/docs/en/knowledgebase/integrate/polkadot-js#connecting-to-local-node) 

### 自定义类型

目前当调用 Substrate RPC 获取数据返回至前端时，并不会返回元数据。如果应用链的 Runtime 开发中有自定义类型时，我们相应地需要在前端把这些类型的定义作为参数输入，这样 Polkadot JS API 在收到这些数据时，就可重构回这些对象。

#### 如何添加自定义类型
以下是一个添加自定义的范例。
##### 1, Pallet中添加自定义类型
在pallet-octopus-appchain下的src/lib.rs, 添加如下自定义类型：
```rust
#[derive(Deserialize, Encode, Decode, Clone, PartialEq, Eq, RuntimeDebug)]
pub enum Observation<AccountId> {
	#[serde(bound(deserialize = "AccountId: Decode"))]
	UpdateValidatorSet(ValidatorSet<AccountId>),
	#[serde(bound(deserialize = "AccountId: Decode"))]
	LockToken(LockEvent<AccountId>),
}
```

##### 2, 在Polkadot JS中添加相应类型
使用 Polkadot JS 连接应用链，设置自定义类型。选择 Settings -> Developer，添加以下 JSON 内容并保存。
```json
{
  "Observation": {
    "_enum": {
      "UpdateValidatorSet": "(ValidatorSet)",
      "LockToken": "(LockEvent)"
    }
  }
}
```

##### 3, 查询自定义类型
Polkadot JS中， 选择 Developer -> Chain State -> Storage -> octopusAppchain -> observations 即可查询当前链上的数值。

![查询自定义类型](../en/guides/query_customized_type.png)
