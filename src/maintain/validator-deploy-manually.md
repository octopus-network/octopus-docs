## Manually Deploy Validator Node

This guide takes [Barnacle Appchain](https://github.com/octopus-network/barnacle) as an example to introduce how to deploy a validator node manually in the Octopus Network.

The most common way to run a validator is on a Linux cloud server. You may choose whatever VPS provider that you prefer, and whatever operating system you are comfortable with. In this guide, we will be using **Ubuntu 18.04**, and the instructions should be applicable to other Unix-based OS.

### Prerequisites

#### 1. Install Rust

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

#### 2. Install Dependencies

Run this command to install the necessary dependencies for compiling and running the substrate-based Appchain node software.

```bash
sudo apt update
# May prompt for location information
sudo apt install make clang pkg-config libssl-dev build-essential
```

For other OSs, please refer to the [document of Substrate Developer Hub](https://substrate.dev/docs/en/knowledgebase/getting-started/#1-build-dependencies)。

### Deploy Validator Node

#### 1. Get the Appchain Node Binary

You can generate the Appchain node binary by compiling the source code from the Appchain repo. Please refer to the following command:

```bash
# Only for barnacle appchain
git clone https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build --release
```

This step will take a while (generally 10 - 40 minutes, depending on your hardware).

> Note: if you run into compiling errors, you may have to switch to a more recent nightly version of Rust.

#### 2. Start the validator node

Set option `--chain` with the value `octopus-mainnet` for the [Mainnet](https://mainnet.oct.network/) and start the node in validator mode. E.g. for Barnacle by executing the following command:

```bash
./target/release/appchain-barnacle \
--base-path ./data \
--chain octopus-mainnet \
--validator \
--wasm-execution Compiled \
--enable-offchain-indexing true
```

> Note: Set option `--chain` with the value `octopus-testnet` for the [testnet](https://testnet.oct.network/)

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

Previous step：[Generate Validator Account](./maintain/validator-generate-keys.html)

Next step：[Set Session Keys](./validator-set-session-keys.html)
