## Appchain Connection Guide

The Appchain based on Barnacle has integrated the `pallet-octopus-appchain`, and can be connected to the Octopus Network.

Steps to connect the Appchain to the Octopus testnet:

1. Compile the Appchain and generate the Chain Spec
2. Publish the Appchain release
3. Register the Appchain

## Compile the Appchain and Generate the Chain Spec

**Note**: Prior to compiling, the Appchain team should globally search for the keyword **barnacle** and replace it with your Appchain's name. Additionally, in the file `runtime/src/lib.rs`, please make sure that the value of `spec_name` is `appchain` and `spec_version` is greater than `100`:

```Rust
#[sp_version::runtime_version]
pub const VERSION: RuntimeVersion = RuntimeVersion {
	spec_name: create_runtime_str!("appchain"),
	...
	spec_version: 101,
	...
};
```

Generate the Chain Spec file and hash by the following commands(use Barnacle as an example):

```bash
git clone --depth 1 https://github.com/octopus-network/barnacle.git
cd barnacle
# this will take a while!
cargo build --release

# Generate the chainspec file, feel free to use any filename you wish
./target/release/appchain-barnacle build-spec --disable-default-bootnode --chain dev> barnacleSpec.json 
# Generate sha256 hash
sha256sum barnacleSpec.json> SHA256SUMS
```

## Publish the Appchain Release

Before registering the Appchain, the Appchain team needs to publish a release of the Appchain, which includes the human-readable ChainSpec file generated above.

![Release screenshot](./release.png)

## Register the Appchain

### Prerequisites
* NEAR accounts: To log in to the [Octopus testnet](https://testnet.oct.network/), you need a NEAR testnet account. Please visit NEAR [testnet wallet](https://wallet.testnet.near.org/) to create a NEAR account. 
* OCT token: OCT tokens are needed during the registration. For testnet, please visit [OCT faucet](https://faucet.testnet.oct.network/) to retrieve your OCT tokens.

### Steps of Appchain Registration

1. Log in to the [Octopus testnet](https://testnet.oct.network/) via a NEAR account.
2. Navigate to the **Appchains** page, click the **+ Appchain** button, and fill in the following:
    * Appchain name: 3-20 characters consisting of numbers and letters of both uppercase and lowercase 
    * Website(Optional): The official website of the Appchain
    * Github: The Github repository of AppChain
    * Github release: The Github URL of the release of the Appchain
    * Commit id: The Git commit hash URL of the Appchain release
    * Email: The contact email of the Appchain
    * Bond token: The bonded OCT will be returned after the Appchain is successfully activated

   ![Register Screenshot](./register.png)

3. Click *Register* to send the registration request.
