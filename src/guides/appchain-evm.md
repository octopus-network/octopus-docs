## Appchain EVM Compatible

The [Barnacle EVM](https://github.com/octopus-network/barnacle/tree/release-v0.9.18-evm) is an EVM compatible appchain development template provided by Octopus Network. It uses the [Frontier](https://github.com/paritytech/frontier) developed by Parity.

The developer team can use this template to develop an EVM-compatible Appchain. It supports the team directly deploying their DApp written by Solidity as an Appchain running in the Octopus Network. The Appchain benefits from being an autonomous blockchain. Also, it obtains what [Octopus Network](https://oct.network/) provides flexible leased security, out-of-the-box interoperability, rich infrastructure services, and an active community.

The Barnacle EVM Appchain is **Running** in the [Octopus Testnet](https://testnet.oct.network/appchains).

## How to Use Octopus Barnacle EVM
 
### A walkthrough on how you can use Octopus Network's Barnacle EVM

Ethereum has become the Fat-Hub of the blockchain ecosystem. Follow the money - as they say. All interoperable blockchain projects that seek growth must connect to the Ethereum network because most Web 3.0 assets are there. Most independent blockchain projects have some EVM compatibility system in place. Some prefer bridges, and others create an EVM-compatible environment on their native chain. The goal of having an EVM-compatible Appchain is to streamline the environment for the validators and app users. App users use EVM toolsets like MetaMask, but validators still can use the Polkadot.js plugin wallet.

For example, Parity, the company behind Substrate, created the Frontier pallet to allow Substrate-based blockchains to have EVM compatible smart contracts within their Substrate blockchains. A Polkadot Parachain bases itself on the promise of 100% EVM compatibility, Moonbeam.

Octopus Network also supports a basic level of EVM compatibility. Because Appchains are Substrate chains on NEAR, you can use Parity's Frontier pallets directly in your Appchain. The base template of Octopus' EVM compatible blockchain is the [Barnacle EVM](https://github.com/octopus-network/barnacle/tree/release-v0.9.13-evm) using Parity's Frontier pallet.

To give you a better feeling of how it works, you can follow along in this tutorial.

### Folder Structure

Here is the folder structure that you will be working with. For further clarity, you can clone the branch repository: [https://github.com/octopus-network/barnacle/tree/release-v0.9.18-evm](https://github.com/octopus-network/barnacle/tree/release-v0.9.18-evm)

```
-docs/
  |--example/
     |--.maintain
        |--deployment.js
        |--print-address.js
        |--store-deployment.js
     |--contracts
        |--Escrow.sol
        |--MockErc20Token.sol
        |--StringStore.sol
  |--hardhat.config.js
-node/
  |--src/
     |--chain_spec.rs
     |--cli.rs
     |--command.rs
     |--main.rs
     |--rpc.rs
     |--service.rs
  |--build.rs
  |--Cargo.toml
-runtime/
  |--src/
     |--lib.rs
     |--precompiles.rs
  |--build.rs
  |--Cargo.toml
-Cargo.toml
```

### Setting Up A Local Barnacle EVM

Barnacle EVM is a great alternative to test your Solidity smart contracts on a local blockchain environment without having to deploy the contracts on a Testnet. 


First, you need to clone the original Barnacle repository:

```
git clone https://github.com/octopus-network/barnacle
```


Then, go into the cloned directory and enter the EVM branch.
```
cd barnacle
git switch release-v0.9.18-evm
```

The current version of the Barnacle EVM is v0.9.18, but it will increment future updates. You can check the active branches within the Barnacle repository for the most recent updates.

Barnacle EVM is a predisposed environment, and you don't need any fancy configurations. You can directly run the blockchain, and it will be ready to go!

```
cargo run -- --dev --tmp
```

When running the blockchain, don't forget to add the `--dev` and `--tmp` flags to run locally.

Congratulations, you ran your first Barnacle EVM! You can connect directly to the EVM through `http://127.0.0.1:9933`.

> Note: use the port `9933`. It will be different from the default Substrate Websocket port `9944`.

### Deploying Contracts to the Barnacle EVM Using Hardhat

Deploying smart contracts to Barnacle EVM is easy. You can use the smart contract templates provided within `docs/example` to simplify the process. Hardhat is an Ethereum development environment built using NodeJS, so to use it, you would need to have NodeJS and NPM pre-installed.

Enter the `docs/example` repository, and install the dependencies using NPM:

```
cd docs/example
npm i
```

Within the directory, you will see a `contracts` and `.maintain` folder. You can see the ready-to-use smart contracts within the `contracts` folder. `.maintain` will house all the necessary scripts, including deployment and testing.

The Hardhat project template needs a `.env` file to function:

```
BARNACLE_RPC_URL=http://127.0.0.1:9933
BARNACLE_DEPLOYER_PRIVATE_KEY=*private key here*
BARNACLE_ACCOUNT_PRIVATE_KEY=*private key here*
```

There are three environment variables that you are required to supply. The environment variables are used in the `hardhat.config.js` file.

If you open the file, you will notice a `chainId` parameter. The `chainId` is for signing transactions within the network. Barnacle EVM `chainId` is `1008`. You can [view it here](https://github.com/octopus-network/barnacle/blob/33075c20577d9a796ead10c1a10977fce9e97371/runtime/src/lib.rs#L672).

After supplying the private keys, you need to print out your account addresses since the address will be different from other chains. You need to connect to Barnacle EVM and retrieve the addresses manually using a script.

```
npx hardhat run .maintain/print-addresses.js --network barnacle
```

Your command will print out the public addresses for your public keys:

```
Deployer private key account address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Executor private key account address: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
```

Omit the `0x` at the start of the address and save them. Next, go to the `node/src/chain_spec.rs` file and change the [two addresses](https://github.com/octopus-network/barnacle/blob/33075c20577d9a796ead10c1a10977fce9e97371/node/src/chain_spec.rs#L235) to the ones printed out. By doing this, your accounts will receive ETH for you to use within the network.

Then, go to your project's root directory, restart the Barnacle EVM and deploy the smart contracts:

```
cd ~/*work directory*/barnacle
cargo run -- --dev --tmp
cd docs/example
npx hardhat run .maintain/deployment.js --network barnacle
```

The deployment script also has tests in them, and it should return something like this:

```
Deploying to network hardhat barnacle
Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Executor contracts with the account: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
Contracts deployed!
Deployed ERC20 contract address 0x5FbDB2315678afecb367f032d93F642f64180aa3
Deployed Escrow Contract address 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
Approved smart contract!
Executor Account Balance:  9999999925130589727342
Executor ERC20 Account Balance:  80000000000000000000
Executor ERC20 Account Balance:  50000000000000000000
Executor ERC20 Account Balance:  80000000000000000000
```

There you go! You deployed your first (two) smart contracts on Barnacle EVM, an ERC20 token, and a simple escrow smart contract.

You can interact with your smart contract like in any other network using `ethers.js`; you can look to the `.maintain/deployment.js` script for examples.

### Conclusion

The Barnacle EVM is the basis for your EVM compatible Appchain. You can deploy your smart contracts in Barnacle EVM just like any other Testnet or Mainnet environment. While it is easy to mistake Barnacle EVM with Moonbeam because of its similarities, the Barnacle EVM is not just a Substrate-based EVM. The road that the Octopus developers chose is to give a streamline approach for the dApp users to use EVM toolsets like MetaMask, but validators still can use the Polkadot.js plugin wallet. Considering the good experience of EVM-compatible Appchain's validators and app users.

You can use any Ethereum development tools to interact with Barnacle EVM. In this walkthrough, you used Hardhat. But there are other environments that you can use, including Truffle, Remix, Brownie, and many more. You can read other examples in the Moonbeam docs.

Need more tutorials? Please refer to the [tutorials](https://docs.moonbeam.network/builders/build/eth-api/) from the Moonbeam Docs. 
