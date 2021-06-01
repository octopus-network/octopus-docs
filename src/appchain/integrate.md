## 应用链集成

应用链团队通过更新基于 Substrate 开发的区块链的代码，引入`pallet-octopus-appchain`，可以使其作为应用链部署并接入到章鱼网络。集成步骤如下：

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
	impl_name: create_runtime_str!("appchain-barnacle"),
	authoring_version: 1,
	spec_version: 101,
	impl_version: 1,
	apis: RUNTIME_API_VERSIONS,
	transaction_version: 1,
};

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
	pub const AppchainId: pallet_octopus_appchain::ChainId = 0;
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

更改**spec_version**的值，必须大于100。关于 Runtime 版本，[了解更多](https://substrate.dev/docs/en/knowledgebase/runtime/upgrades#runtime-versioning)。

更改常量**RELAY_CONTRACT_NAME**的值，从 Octopus [testnet](https://testnet.oct.network/)查看获得，例如：oct-relay.testnet

```Rust
const RELAY_CONTRACT_NAME: &'static [u8] = b"oct-relay.testnet";
```

将以下代码添加到的宏`construct_runtime!`中：

```rust
OctopusAppchain: pallet_octopus_appchain::{Module, Call, Storage, Config<T>, Event<T>, ValidateUnsigned},
```

   详细的代码更改，可以参考[Barnacle](https://github.com/octopus-network/barnacle)项目最后一次提交。

3. 最后生成 Chain Spec 文件，示例命令如下：

   ```bash
   ./target/debug/node-template build-spec --disable-default-bootnode --chain local > chain-spec.json
   ```

    更多细节可以参考 Substrate 开发文档 [Create a Custom Chain Spec](https://substrate.dev/docs/en/tutorials/start-a-private-network/customspec)