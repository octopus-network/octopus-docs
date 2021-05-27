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
pub const VERSION: RuntimeVersion = RuntimeVersion {
	spec_name: create_runtime_str!("appchain"),
	...
}

impl pallet_session::Config for Runtime {
	type Event = Event;
	type ValidatorId = <Self as frame_system::Config>::AccountId;
	type ValidatorIdOf = ConvertInto;
	type ShouldEndSession = Babe;
	type NextSessionRotation = Babe;
	type SessionManager = OctopusAppchain;
	type SessionHandler = <opaque::SessionKeys as OpaqueKeys>::KeyTypeIdProviders;
	type Keys = opaque::SessionKeys;
	type DisabledValidatorsThreshold = DisabledValidatorsThreshold;
	type WeightInfo = pallet_session::weights::SubstrateWeight<Runtime>;
}

pub struct OctopusAppCrypto;

impl frame_system::offchain::AppCrypto<<Signature as Verify>::Signer, Signature> for OctopusAppCrypto {
	type RuntimeAppPublic = pallet_octopus_appchain::crypto::AuthorityId;
	type GenericSignature = sp_core::sr25519::Signature;
	type GenericPublic = sp_core::sr25519::Public;
}

parameter_types! {
	pub const AppchainId: pallet_octopus_appchain::ChainId = 300;
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
pub const AppchainId: pallet_octopus_appchain::ChainId = 300;
```

更改常量**RELAY_CONTRACT_NAME**的值，从 Octopus [testnet](https://testnet.oct.network/)查看获得，例如：oct-relay.testnet

```Rust
const RELAY_CONTRACT_NAME: &'static [u8] = b"oct-relay.testnet";
```

3. 将以下代码添加到的宏`construct_runtime!`中：

```rust
OctopusAppchain: pallet_octopus_appchain::{Module, Call, Storage, Config<T>, Event<T>, ValidateUnsigned},
```

   详细的代码更改，可以参考[Barnacle](https://github.com/octopus-network/barnacle)项目最后一次提交。

### 生成并更新Chain Spec文件

1. 首先，更新 Node 的`chain_spec.rs`文件，参考如下代码：

   ```rust
   pub fn authority_keys_from_seed(s: &str) -> (AccountId, BabeId, GrandpaId, ImOnlineId, BeefyId, OctopusId, u64) {
   	(
   		get_account_id_from_seed::<sr25519::Public>(s),
   		get_from_seed::<BabeId>(s),
   		get_from_seed::<GrandpaId>(s),
   		get_from_seed::<ImOnlineId>(s),
   		get_from_seed::<BeefyId>(s),
   		get_from_seed::<OctopusId>(s),
   		100,
   	)
   }
   ```

   函数 `testnet_genesis`的更改，可参考代码：

   ```rust
   fn testnet_genesis(
   	wasm_binary: &[u8],
   	initial_authorities: Vec<(AccountId, BabeId, GrandpaId, ImOnlineId, BeefyId, OctopusId, u64)>,
   	initial_nominators: Vec<AccountId>,
   	root_key: AccountId,
   	endowed_accounts: Option<Vec<AccountId>>,
   	_enable_println: bool,
   ) -> GenesisConfig {
     ......
   		pallet_octopus_appchain: OctopusAppchainConfig {
   			validators: initial_authorities.iter().map(|x| (x.0.clone(), x.6)).collect(),
   		},
   	......
   }
   ```

   详细的代码更改，可以参考[Barnacle](https://github.com/octopus-network/barnacle)项目最后一次提交。

2. 其次，生成 chainspec 文件，示例命令如下：

   ```bash
   ./target/debug/node-template build-spec --disable-default-bootnode --chain local > chain-spec.json
   ```

    更多细节可以参考 Substrate 开发文档 [Create a Custom Chain Spec](https://substrate.dev/docs/en/tutorials/start-a-private-network/customspec)

3. 最后，使用应用链的初始验证人密钥信息更新以下字段，这些信息可以通过章鱼[测试网络](https://testnet.oct.network/)下载`chainspec-snippet.json`获得。

   * `palletBalance`
   * `palletSession`
   * `palletOctopusAppchain`

### 提供Chain Spec文件的链接和哈希

启动网络需要应用链团队提供应用链的 chainspec 文件。可以将其上传到网上，比如：项目的 Github，然后登录到 Octopus [testnet](https://testnet.oct.network/) 填写文件 URL 和哈希。