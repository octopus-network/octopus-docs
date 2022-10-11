## Manually Deploy Validator Node

> **Warning**
>
> It is highly recommended that you have significant system administration experience before attempting to run your own validator manually.
>
> It involves more than just executing the appchain node binary. You must be able to handle technical issues and anomalies with your node which you must be able to tackle yourself.

To manually deploy the validator node of the appchain, the validator can choose their favorite VPS provider, and generally using the **Ubuntu** operating system.

The following steps are required:

1. Install Rust
2. Install Dependencies
3. Get the appchain Node
4. Run the appchain node

### 1. Install Rust

If you have never installed Rust, you should do this first. This command will fetch the latest version of Rust and install it.

```bash
# Install
curl https://sh.rustup.rs -sSf | sh
# Configure
source ~/.cargo/env
```

If you have already installed Rust, run the following command to make sure you are using the latest version.

```bash
rustup default stable
rustup update
rustup update nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
```

### 2. Install Dependencies

Run this command to install the necessary dependencies for compiling and running the substrate-based Appchain node software.

```bash
sudo apt update
sudo apt install build-essential
# May prompt for location information
sudo apt install --assume-yes git clang curl libssl-dev llvm libudev-dev make protobuf-compiler
```

### 3. Get the appchain node

You can generate the appchain node by compiling the source code from the appchain repository. Please refer to the following command:

```bash
git clone <Appchain GitHub Repo>
cd <Appchain>
cargo build --release
```

> `<Appchain GitHub Repo>`, the GitHub repository of appchain, navigate to it by clicking the `Github` icon on the appchain page
>
> `<Appchain>`, the name of the appchain repository

After the compilation ends, the appchain node will be generated in the directory `./target/release/`. This step will take a while (10~40 minutes), depending on the hardware configuration of the server.

> Note: If it has the compiling errors, you may have to switch to a more recent nightly version of Rust.

### 4. Run the validator node

Run the validator node, please refer to the following command:

```bash
./target/release/<Appchain node> \
--base-path ./chain_data \
--chain octopus-mainnet \
--name <Your validator name> \
--validator \
--telemetry-url "wss://telemetry.mainnet.octopus.network/submit 0" \  
--enable-offchain-indexing true
```

> `<Appchain node>`, the generated node in the previous step
>
> `<Your validator name>`，the name of the validator node

You can check whether the validator node complete the synchronization of the chain data, check the log whether there is an similar output as the following:

```bash
2021-09-21 00:12:09 ✨ Imported #54411 (0x3566…3b0e)
2021-09-21 00:12:12 ✨ Imported #54412 (0xdf36…2c87)
2021-09-21 00:12:12 [54412] 🐙 Current block: 54412 (parent hash: 0x9cc7f31a20793f50cf885835de0e3977a1e080431ebc002469aa176046ba094a)
......
2021-09-21 00:13:18 ✨ Imported #54434 (0xba36…ee68)
2021-09-21 00:13:18 [54434] 🐙 Current block: 54434 (parent hash: 0x84aa3d1b6455859f9503d6ecc70b50b183141fe08f5b0695357e00fe1d24d915)
2021-09-21 00:13:18 💤 Idle (6 peers), best: #54434 (0xba36…ee68), finalized #54431 (0xd194…b319), ⬇ 22.0kiB/s ⬆ 21.9kiB/s
```

After the node synchronization, the validator needs to [generate the Session Key](./validator-set-session-keys.md) for the next step [register validator](./validator-register.md).

### Upgrade Validator Node

When the appchain releases a new version of node, validators need to upgrade their validator node. Please follow the **validators-delegators** channel on Discord, the Octopus Network team will publish information about the new version of the appchain node. The validator need to:

1. Compile the new version of appchain source code to generate a new appchain node;
2. Stop the validator node before the upgrade;
3. Launch the validator node with the new appchain node.
