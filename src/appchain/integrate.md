## 应用链集成

在本指南中，我们将学习和实践如何完成应用链的集成。

**需要做什么**

在开始之前，让我们列出在本教程中我们将要做的事情。我们将完成：

* 更新应用链代码
* 生成并更新**Chain Spec**文件
* 提供**Chain Spec**文件的链接和哈希

### 更新应用链代码

集成应用链的第一步是引入*pallet-octopus-appchain*，并更新基于Substrate的应用链代码。

1. 在 Runtime 的`Cargo.toml`文件中，添加以下依赖项：

```TOML
[dependencies]
pallet-session = { default-features = false, version = '3.0.0' }
pallet-octopus-appchain = { default-features = false, git = 'https://github.com/octopus-network/pallet-octopus-appchain.git' }
```

更新 Runtime 的 “std” 功能，包括以下 pallet：

```TOML
std = [
    # --snip--
    'pallet-session/std',
    'pallet-octopus-appchain/std',
]
```

2. 更新 Runtime 的`lib.rs`文件，参考如下代码实现其 trait：


```rust
parameter_types! {
	pub const AppchainId: pallet_octopus_appchain::ChainId = 3;
	pub const Motherchain: pallet_octopus_appchain::MotherchainType = pallet_octopus_appchain::MotherchainType::NEAR;
	pub const GracePeriod: u32 = 5;
	pub const UnsignedPriority: u64 = 1 << 20;
}

impl pallet_octopus_appchain::Config for Runtime {
	type Event = Event;
	type AuthorityId = pallet_octopus_appchain::crypto::OctopusAuthId;
	type Call = Call;
	type AppchainId = AppchainId;
	type Motherchain = Motherchain;
	const RELAY_CONTRACT_NAME: &'static [u8] = b"dev-1618284355026-5339538";
	type GracePeriod = GracePeriod;
	type UnsignedPriority = UnsignedPriority;
}
```

同时，更改常量**AppchainId**的值，Appchain ID 是在 Octopus [testnet](https://testnet.oct.network/) 中注册 Appchain 时生成的。

```Rust
pub const AppchainId: pallet_octopus_appchain::ChainId = 3;
```

更改常量**RELAY_CONTRACT_NAME**的值，从 Octopus [testnet](https://testnet.oct.network/)查看获得，例如：oct-relay.testnet

```Rust
const RELAY_CONTRACT_NAME: &'static [u8] = b"oct-relay.testnet";
```

3. 将以下代码添加到的宏`construct_runtime!`中：

```rust
OctopusAppchain: pallet_octopus_appchain::{Module, Call, Storage, Config<T>, Event<T>, ValidateUnsigned},
```

可以查看[Barnacle](https://github.com/octopus-network/barnacle)的最后一次提交以进行所有更改。

### 生成并更新Chain Spec文件

1. 首先需要生成 chainspec 文件，示例命令如下：

   ```bash
   ./target/debug/node-template build-spec --disable-default-bootnode --chain local > chain-spec.json
   ```

    更多细节可以参考 Substrate 开发文档 [Create a Custom Chain Spec](https://substrate.dev/docs/en/tutorials/start-a-private-network/customspec)

2. 其次，可以从Octopus [testnet](https://testnet.oct.network/) 下载 chainspec 代码段，这些信息主要用于应用链的初始验证节点。

3. 然后基于下载的 chainspec 代码片段，更新如下字段生成应用链的 chainspec 文件。

   * `palletBalance`
   * `palletSession`
   * `palletOctopusAppchain`

### 提供Chain Spec文件的链接和哈希

启动网络需要应用链团队提供应用链的 chainspec 文件。可以将其上传到网上，比如：项目的 Github，然后登录到 Octopus [testnet](https://testnet.oct.network/) 填写文件 URL 和哈希。