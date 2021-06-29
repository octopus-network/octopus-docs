## Integrate your Appchain

For substrate-based blockchain, we should update the code to introduce the pallet `pallet-octopus-appchain`, so that it can be deployed and connected to the Octopus network as an Appchain. The integration steps are as follows:

1. Add the following dependencies to the runtime's `Cargo.toml` file:

```TOML
[dependencies]
pallet-session = { default-features = false, version = '3.0.0' }
pallet-octopus-appchain = { default-features = false, git = 'https://github.com/octopus-network/pallet-octopus-appchain.git' }
```

Update the runtime's `std` feature to include this pallet:

```TOML
std = [
    # --snip--
    'pallet-session/std',
    'pallet-octopus-appchain/std',
]
```

2. Edit the runtime `lib.rs`, you should implement its trait like this:

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

Change the value of **spec_version**, it must be greater than 100. Regarding the Runtime version, [learn more](https://substrate.dev/docs/en/knowledgebase/runtime/upgrades#runtime-versioning).

You can get the value of **RELAY_CONTRACT_NAME** from the Octopus [testnet](https://testnet.oct.network/), e.g. Relay contract: oct-relay.testnet

```Rust
const RELAY_CONTRACT_NAME: &'static [u8] = b"oct-relay.testnet";
```

Add below code into your `construct_runtime!` macro:

```rust
OctopusAppchain: pallet_octopus_appchain::{Module, Call, Storage, Config<T>, Event<T>, ValidateUnsigned},
```

You can see the last commit of [Barnacle](https://github.com/octopus-network/barnacle) for the entire changes.

3. Finally generate your chainspec file, e.g.:

   ```bash
   ./target/debug/node-template build-spec --disable-default-bootnode --chain local > chain-spec.json
   ```

    More details [Create a Custom Chain Spec](https://substrate.dev/docs/en/tutorials/start-a-private-network/customspec)