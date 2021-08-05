## Manually Deploy validator node

This guide takes [Barnacle Appchain](https://github.com/octopus-network/barnacle) as an example to introduce how to deploy a validator node manually in Octopus Network.

The most common way to run a validator is on a cloud server running Linux. You may choose whatever VPS provider that your prefer, and whatever operating system you are comfortable with. For this guide we will be using **Ubuntu 18.04**, but the instructions should be similar for other platforms.

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

For other platforms, please refer to the [document of Substrate Developer Hub](https://substrate.dev/docs/en/knowledgebase/getting-started/#1-build-dependencies)。

### Deploy validator node

#### 1. Get the Appchain node binary

You can generate the Appchain node binary by compiling the source code from the Appchain repo. Of course, you can also fetch the compiled binary directly from the release page of the Appchain repo.

To compile the source code to generate a node binary, execute the following command.

```bash
git clone https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build --release
```

This step will take a while (generally 10 - 40 minutes, depending on your hardware).

> Note if you run into compile errors, you may have to switch to a less recent nightly. 

#### 2. Download the Chain Spec file 

Go to the Octopus network, [testnet](https://testnet.oct.network/), select Appchain Tab page.

Copy the **Chain Spec Raw** file URL, execute the following command.

```bash
# cd barnacle 
curl -o chainSpec.json https://storage.googleapis.com/dl-testnet/barnacle-ng/barnacleSpecRaw.json
```

#### 3. Get the Bootnodes

The application chain page of Octopus Network has  boot node information, .

Go to the Octopus network, [testnet](https://testnet.oct.network/), select Appchain Tab page.

Copy the **Boot Nodes**, the following is the bootnodes array of the Appchain.

```bash
[   "/ip4/34.80.79.216/tcp/30333/p2p/12D3KooWAxYKgdmTczLioD1jkzMyaDuV2Q5VHBsJxPr5zEmHr8nY",   "/ip4/34.81.106.94/tcp/30333/p2p/12D3KooWSmLVShww4w9PVW17cCAS5C1JnXBU4NbY7FcGGjMyUGiq",   "/ip4/35.187.144.17/tcp/30333/p2p/12D3KooWT2umkS7F8GzUTLrfUzVBJPKn6YwCcuv6LBFQ27UPoo2Y",   "/ip4/34.80.21.68/tcp/30333/p2p/12D3KooWHNf9JxUZKHoF7rrsmorv86gonXSb2ZU44CbMsnBNFSAJ", ]
```

#### 4. Start the validator node

Set the Chain Spec file, and the values of bootnodes using the elements in the Boot Nodes array, execute the following command.

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
