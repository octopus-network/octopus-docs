## Appchain Development Guide

Let's lay out what we are going to do over the course of this tutorial. We will:

1. Setup the development environment for the Appchain;
2. Implement the application logic of the Appchain;
3. Start the local network of the Appchain;

### Setup the development environment of the Appchain

It is encouraged that to implement the Appchain node based on the [Barnacle](https://github.com/octopus-network/barnacle) that the template is developed by the Octopus Network. Barnacle is the same as the [Substrate node template](https://github.com/substrate-developer-hub/substrate-node-template), and it is a minimal working Substrate node, with which you can quickly start building your own custom blockchain. The front-end of the Appchain can be developed based on the [Front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template) which is built using ReactJS.

First, setup a Rust development environment.

Note: Substrate development is easiest on Unix-based operating systems like macOS or Linux and it is highly recommend to use Windows Subsystem Linux (WSL) and follow the instructions for Ubuntu/Debian.

For most users, you can execute the following commands through automated scripts.

`curl [https://getsubstrate.io](https://getsubstrate.io/) -sSf | bash -s - --fast`

For more information, you can refer to the [Installation Guide](https://substrate.dev/docs/en/knowledgebase/getting-started/) in the Substrate Developer Center.

Second, install the Barnacle as the Appchain node template.

```yaml
git clone --depth 1 https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build
```

Finally, install the front-end template.

```yaml
# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install node
# Install Yarn
npm install --global yarn
# Clone the frontend template from github
git clone -b v3.0.0+monthly-2021-05 --depth 1 https://github.com/substrate-developer-hub/substrate-front-end-template
# Install the dependencies
cd substrate-front-end-template
yarn install
```

### Implement the application logic of the Appchain

Dive into the [Barnacle](https://github.com/octopus-network/barnacle), to implement the application logic of the Appchain, the general process is as follows:

1. Add a `pallet`, and implement application specific logic in `pallets/<pallet-name>/src/lib.rs`;
2. Add the `pallet` into `runtime/Cargo.toml`, `runtime/src/lib.rs`;
3. Add the `runtime` into `node/Cargo.toml`, install it in the node.

For more information, you can refer to the [Add Pallet to Runtime Guide](https://substrate.dev/docs/en/tutorials/add-a-pallet/) in the Substrate Developer Center.

### Start the local network of the Appchain

Execute the following command to compile and start the local blockchain node:

```yaml
cargo build
# Run a temporary node in development mode
./target/debug/appchain-barnacle --dev --tmp
```

If you want to run a local front-end application to interact with local nodes, you can refer to [Run Local Front End](https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain/interact#start-the-front-end-template).

#### Custom Type

Currently, when calling Substrate RPC to get data back to the front end, metadata is not returned. If there are custom types in the runtime of the Appchain, we correspondingly need to add the definitions of these types with JSON format into the front end, so that the Polkadot JS API can reconstruct these objects when they receive the data.