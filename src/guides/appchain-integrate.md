## Appchain integration guide

In this guide, we will practice how to integrate the Appchain into the Octopus test network. We will:

1. Compile the Appchain and generate the Chain Spec
2. Publish the Appchain release
3. Register the Appchain

## Compile the Appchain and generate the Chain Spec

The Appchain based on Barnacle had integrated `pallet-octopus-appchain`, which can be deployed as an Appchain and connected to the Octopus network.

**Note**: Prior to compiling, the Appchain team should globally search for the keyword **barnacle** and replace it with your Appchain node name. Also in the file `runtime/src/lib.rs`, please make sure that the value of `spec_name` is `appchain` and `spec_version` is a value greater than `100`. Like:

```Rust
#[sp_version::runtime_version]
pub const VERSION: RuntimeVersion = RuntimeVersion {
	spec_name: create_runtime_str!("appchain"),
	...
	spec_version: 101,
	...
};
```

To compile and generate the Chain Spec file, let's take Barnacle as an example. By executing the following command:

```bash
git clone --depth 1 https://github.com/octopus-network/barnacle.git
cd barnacle
# this will take a while!
cargo build --release

./target/release/appchain-barnacle build-spec --disable-default-bootnode --chain dev> barnacleSpec.json
# Generate sha256 hash
sha256sum barnacleSpec.json> SHA256SUMS
```

## Publish the Appchain release

Before registering the Appchain, the team needs to publish a release of the Appchain, which includes the human-readable ChainSpec file of the Appchain.

![Release screenshot](./release.png)

## Register the Appchain

To login to the [Octopus Test Network](https://testnet.oct.network/) with a NEAR testnet account, fill in the Appchain info and bond OCT.

Note: You can open NEAR [testnet wallet link](https://wallet.testnet.near.org/) and follow the instructions to create a NEAR testnet account. And you can apply for the OCT from the [Discord](https://discord.gg/6GTJBkZA9Q) **#testnet** channel of Octopus Network.

The steps of Appchain registration are as follows:

1. Log in to the Octopus test network with a NEAR account.
2. Navigate to the **Appchains** page, click the **+ Appchain** button, and fill in the following:
    * Appchain name, 3-20 characters consisting of numbers and uppercase and lowercase letters
    * Website, the official website of the Appchain
    * Github, the Github repository of AppChain
    * Github release, the Github URL of the release of the Appchain
    * Commit id, the Git commit hash of the Appchain release
    * Email, the contact email of the Appchain
    * Bond token, the bonded OCT will be returned after the Appchain is successfully activated

   ![Register Screenshot](./register.png)

3. Click *Register* to send the registration transaction.