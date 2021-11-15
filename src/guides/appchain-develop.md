## Appchain Development

In this tutorial, we will:

1. Setup a development environment for an Appchain;
2. Implement an Web3.0 application with an Appchain;
3. Start a local testnet for an Appchain;

### Setup the Development Environment of the Appchain

It's suggested to start an Appchain node based on [Barnacle](https://github.com/octopus-network/barnacle) which is a template developed by the Octopus Network team. Originate from the [Substrate node template](https://github.com/substrate-developer-hub/substrate-node-template), Barnacle is a minimal working Appchain node template for developers to quickly start their Octopus Appchain project. The frontend of an Appchain can be developed based on the [Front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template).

#### Setup a Rust Development Environment.

Note: Substrate development is easiest on Unix-based operating systems like macOS or Linux and it is highly recommended to use Windows Subsystem Linux (WSL) and follow the instructions for Ubuntu/Debian.

For most users, you can execute the following commands to install the environment.

`curl [https://getsubstrate.io](https://getsubstrate.io/) -sSf | bash -s - --fast`

For more information, please refer to the [Installation Guide](https://substrate.dev/docs/en/knowledgebase/getting-started/) in the Substrate Developer Center.

#### Install the Barnacle Template.

```yaml
git clone --depth 1 https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build
```

#### Install the front-end template.

```yaml
# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install node
# Install Yarn
npm install --global yarn
# Clone the frontend template from github
git clone -b v3.0.0+monthly-2021-08 --depth 1 https://github.com/substrate-developer-hub/substrate-front-end-template
# Install the dependencies
cd substrate-front-end-template
yarn install
```

> **Note**
>
> If there is a newer version of `substrate-front-end-template`, It is recommended to replace `v3.0.0+monthly-2021-08` with it in the above command.

### Implement an Web3.0 application with an Appchain

Steps to implement an application with an Appchain([Barnacle](https://github.com/octopus-network/barnacle)):

1. Add a `pallet`, and implement application specific logic in `pallets/<pallet-name>/src/lib.rs`;
2. Add the `pallet` into `runtime/Cargo.toml`, `runtime/src/lib.rs`;
3. Add the `runtime` into `node/Cargo.toml`, install it in the node.

For more information, please refer to the [Add Pallet to Runtime Guide](https://substrate.dev/docs/en/tutorials/add-a-pallet/) in the Substrate Developer Center.

### Start the Local Testnet for an Appchain

Execute the following command to compile and start the local blockchain node:

```yaml
cargo build
# Run a temporary node in development mode
./target/debug/appchain-barnacle --dev --tmp
```

If you want to run a local front-end to interact with local nodes, you can refer to [Run Local Front End](https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain/interact#start-the-front-end-template).

### Publish the Appchain Release

Once finishing the Appchain development, and the integration of the Octopus [Pallets](https://github.com/octopus-network/octopus-pallets), the Appchain team needs to publish a release of the Appchain. And then record the Github release URL which is used to register the Appchain into the Octopus Network.

![release](./release.png)

> **Note**
>
> * The Chain Spec file could be placed under one folder of source code. E.g:[resources](https://github.com/octopus-network/barnacle/tree/master/resources)
> * For the integration, please refer to the [Barnacle](https://github.com/octopus-network/barnacle)