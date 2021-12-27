## Appchain Development

In this tutorial, we will:

1. Setup the development environment;
2. Implement appchain runtime;
3. Start the local testnet;

### Setup the Development Environment

It's suggested to start an Appchain node based on [Barnacle](https://github.com/octopus-network/barnacle) which is a template developed by the Octopus Network team. Originating from the [Substrate node template](https://github.com/substrate-developer-hub/substrate-node-template), Barnacle is a minimal working Appchain node template for developers quickly start their Octopus Appchain project. The frontend of an Appchain can be developed based on the [Front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template).

Note: Substrate development is easiest on Unix-based operating systems like macOS or Linux, and for Windows user, it is highly recommended to use Windows Subsystem Linux (WSL) and follow the instructions for Ubuntu/Debian.

For most users, you can execute the following commands to install the environment.

`curl [https://getsubstrate.io](https://getsubstrate.io/) -sSf | bash -s - --fast`

For more information, please refer to the [Installation Guide](https://substrate.dev/docs/en/knowledgebase/getting-started/) in the Substrate Developer Center.

### Barnacle

Appchain node template Barnacle, it is based on the Substrate node template and integrates a series of [octopus-pallets](https://github.com/octopus-network/octopus-pallets) which were implemented by the Octopus network team, including:

* Appchain, [pallet-octopus-appchain](https://github.com/octopus-network/octopus-pallets/tree/main/appchain)
    - Metadata of an appchain. Including appchain identifier, RPC endpoint of mainchain, etc.
    - Validators of the appchain will observe the mainchain and submit the observed events using OCW for consensus.

* LPoS, [pallet-octopus-lpos](https://github.com/octopus-network/octopus-pallets/tree/main/lpos)
    - An implementation of Octopus Network's LPoS.
    - This pallet depends on pallet-octopus-appchain.

* Common, [pallet-octopus-support](https://github.com/octopus-network/octopus-pallets/tree/main/support)
    - Some common traits and types.

* Cross-chain messages, [pallet-octopus-upward-messages](https://github.com/octopus-network/octopus-pallets/tree/main/upward-messages)
    - This pallet manages the cross-chain messages sent from appchain to mainchain.

```yaml
git clone --depth 1 https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build
```

Based on Barnacle, the appchain team only needs to focus on the pallets development of business function, and then they would integrated easily appchain into the Octopus network.

### Front-end template

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

### Implement appchain runtime

Steps to implement an application specific pallets:

1. Add a `pallet`, and implement application specific logic in `pallets/<pallet-name>/src/lib.rs`;
2. Add the `pallet` into `runtime/Cargo.toml`, `runtime/src/lib.rs`;
3. Add the `runtime` into `node/Cargo.toml`, install it in the node.

For more information, please refer to the [Add Pallet to Runtime Guide](https://substrate.dev/docs/en/tutorials/add-a-pallet/) in the Substrate Developer Center.

#### Appchain configuration

The configuration of the appchain is mainly in the ChainSpec file. Need to configure:

* Appchain pallet
    - Anchor contract;
    - Validator collection;
    - The number of tokens pre-mined on the NEAR network;

The Barnacle example is as follows:

```Rust
"octopusAppchain": {
  "anchorContract": "barnacle.registry.test_oct.testnet",
  "validators": [
    [
      "5G6xVxyaS8PZargUL27pSEbhLQbRQJ2PBvrvXVpyjHzivQxs",
      10000000000000000000000
    ],
    [
      "5Dqg8gjTeM4it3mCaX1bdQmTT3GXgv7oSuZAfFUwJaTKuJfz",
      10000000000000000000000
    ],
    [
      "5Gj5yzSKtqkMM3j7FhRSWuybkwwms9KBPsAhyeobgmLD4r1g",
      10000000000000000000000
    ],
    [
      "5F42cCzboJhzfuVazARY6gFVpjwWMwAg1aG3pWF2aS76uu4Q",
      10000000000000000000000
    ]
  ],
  "preminedAmount": 500000000000000000000000000,
  "assetIdByName": [
    [
      "usdc.testnet",
      0
    ]
  ]
},
```

* LPoS pallet
    - The historical cycle of LPoS rewards;
    - Rewards for each Era;

The Barnacle example is as follows:

```Rust
"octopusLpos": {
  "historyDepth": 84,
  "eraPayout": 20000000000000000000000
},
```

### Start the Local Testnet

Execute the following command to compile and start the local blockchain node:

```yaml
cargo build
# Run a temporary node in development mode
./target/debug/appchain-barnacle --dev --tmp
```

If you want to run a local front-end to interact with local nodes, you can refer to [Run Local Front End](https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain/interact#start-the-front-end-template).

### Publish the Appchain Release

Once finishing the Appchain development, and the integration of the Octopus Pallets, the Appchain team needs to publish a release of the Appchain.

> **Note**
>
> * The Chain Spec file could be placed under one folder of source code. E.g:[resources](https://github.com/octopus-network/barnacle/tree/master/resources)
> * For the integration, please refer to the [Barnacle](https://github.com/octopus-network/barnacle)