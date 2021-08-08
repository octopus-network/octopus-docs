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

You can generate the Appchain node binary by compiling the source code from the Appchain repo. Of course, you can also fetch the compiled binary directly from the release page of the Appchain repo.

To compile the source code to generate a node binary, execute the following command:

```bash
git clone https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build --release
```

This step will take a while (generally 10 - 40 minutes, depending on your hardware).

> Note if you run into compiling errors, you may have to switch to a more recent nightly version of Rust. 

#### 2. Download the Chain Spec file 

Go to the [Octopus Network testnet](https://testnet.oct.network/), select the `Appchains` Tab -> the corresponding appchain.

Copy the **Chain Spec Raw** file URL, execute the following command:

```bash
# cd barnacle 
curl -o chainSpec.json https://storage.googleapis.com/dl-testnet/barnacle-ng/barnacleSpecRaw.json
```

#### 3. Get the Bootnodes Information

The appchain page of Octopus Network has the bootnode information.

Go to the [Octopus Network testnet](https://testnet.oct.network/), select `Appchains` Tab -> the corresponding appchain.

Copy the **Boot Nodes**' information, similar to the following:

```bash
[   "/ip4/34.80.79.216/tcp/30333/p2p/12D3KooWAxYKgdmTczLioD1jkzMyaDuV2Q5VHBsJxPr5zEmHr8nY",   "/ip4/34.81.106.94/tcp/30333/p2p/12D3KooWSmLVShww4w9PVW17cCAS5C1JnXBU4NbY7FcGGjMyUGiq",   "/ip4/35.187.144.17/tcp/30333/p2p/12D3KooWT2umkS7F8GzUTLrfUzVBJPKn6YwCcuv6LBFQ27UPoo2Y",   "/ip4/34.80.21.68/tcp/30333/p2p/12D3KooWHNf9JxUZKHoF7rrsmorv86gonXSb2ZU44CbMsnBNFSAJ", ]
```

#### 4. Start the validator node

Set option `--chain` with the Chain Spec file name downloaded from the step 2 above, and the option `--bootnodes` with the bootnodes' information from the step 3 above, execute the following command:

```bash

./target/release/appchain-barnacle \
--base-path ./data \
--chain ./chainSpec.json \
--port 30333 \
--rpc-port 9933 \
--rpc-cors all \
--rpc-external \
--ws-port 9944 \
--ws-external \
--rpc-methods Unsafe \
--validator \
--no-telemetry \
--prometheus-port 9615 \
--prometheus-external \
--wasm-execution Compiled \
--enable-offchain-indexing true \
--bootnodes /ip4/34.80.79.216/tcp/30333/p2p/12D3KooWAxYKgdmTczLioD1jkzMyaDuV2Q5VHBsJxPr5zEmHr8nY \
--bootnodes /ip4/34.81.106.94/tcp/30333/p2p/12D3KooWSmLVShww4w9PVW17cCAS5C1JnXBU4NbY7FcGGjMyUGiq \
--bootnodes /ip4/35.187.144.17/tcp/30333/p2p/12D3KooWT2umkS7F8GzUTLrfUzVBJPKn6YwCcuv6LBFQ27UPoo2Y \
--bootnodes /ip4/34.80.21.68/tcp/30333/p2p/12D3KooWHNf9JxUZKHoF7rrsmorv86gonXSb2ZU44CbMsnBNFSAJ
```
