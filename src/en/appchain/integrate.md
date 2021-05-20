## Integrate your Appchain

In this tutorial, we will learn and practice how to complete your Appchain integration.

**What you will be doing**

Before we even get started, let's lay out what we are going to do over the course of this tutorial. We will:

* Update your Appchain runtime code
* Generate and update the **Chain Spec** file
* Provide the link and hash of the **Chain Spec** file

### Update your Appchain runtime code

The first step to integrate your Appchain is to introduce the pallet `pallet-octopus-appchain` and update the code of the substrate-based blockchain.

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

2.Edit the runtime `lib.rs`, you should implement its trait like this:

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

Change the value of constant **AppchainId** with your Appchain ID, and you can find it from the Octopus [testnet](https://testnet.oct.network/).

```Rust
pub const AppchainId: pallet_octopus_appchain::ChainId = 3;
```

You can get the value of **RELAY_CONTRACT_NAME** from the Octopus [testnet](https://testnet.oct.network/), e.g. Relay contract: oct-relay.testnet

```Rust
const RELAY_CONTRACT_NAME: &'static [u8] = b"oct-relay.testnet";
```

3. Include it in your `construct_runtime!` macro:

```rust
OctopusAppchain: pallet_octopus_appchain::{Module, Call, Storage, Config<T>, Event<T>, ValidateUnsigned},
```

You can see the last commit of [Barnacle](https://github.com/octopus-network/barnacle) for the entire changes.

### Generate and update the Chain Spec file

1. First, you need to generate your chainspec file, e.g.:

   ```bash
   ./target/debug/node-template build-spec --disable-default-bootnode --chain local > chain-spec.json
   ```

    More details [Create a Custom Chain Spec](https://substrate.dev/docs/en/tutorials/start-a-private-network/customspec)

2. You can download the chainspec snippet from the Octopus [testnet](https://testnet.oct.network/), this information is mainly used for the initial validator nodes of the Appchain.

3. For your chainspec file, update these fields with the related content from the chainspec snippet.

   * `palletBalance`
   * `palletSession`
   * `palletOctopusAppchain`

### Provide the link and hash of Chain Spec file

To start the network, we need the chainspec file. You can upload it to your network space, e.g. the github of the project, and logon to Octopus [testnet](https://testnet.oct.network/) to fill in the file URL and hash.