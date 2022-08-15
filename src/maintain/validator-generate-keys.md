## Generate Validator Account

Each validator must have a NEAR account and an appchain account. The NEAR account is used to do the OCT staking, and the appchain account is used to set session keys and manage appchain assets.

> To create a NEAR account, please refer to [Creating a NEAR Account](https://docs.near.org/concepts/basics/accounts/creating-accounts)

Appchain is developed based on the Substrate, so the ways to generate an appchain account is the same as other Sustrate-based chains (e.g. Polkadot). This section introduces 3 options to generate the appchain account. Regardless of which option you choose, be sure to record all of the outputs as you will need them later.

### Option 1: Polkadot{.js} Browser Plugin

This option is **RECOMMENDED FOR MOST USERS**.

The Polkadot{.js} Browser Plugin is a simple tool for managing accounts in a browser extension which can sign extrinsics.

Generate your Appchain account with the [Polkadot{.js} Browser Plugin](https://wiki.polkadot.network/docs/en/learn-account-generation#polkadotjs-browser-plugin).

### Option 2: Subkey

This option is **ADVANCED and MOST SECURE**.

Subkey is a command-line utility included with Substrate that generates or restores Substrate keys. It is recommended for technically advanced users who are comfortable with the command line and compiling Rust code, and it is not recommended for general users.

For detailed build and usage instructions of subkey, please refer to the [subkey readme](https://github.com/paritytech/substrate/tree/master/bin/utils/subkey).

### Option 3: PolkadotJS-Apps

To create an Appchain account by following a few steps:

#### 1. Get the RPC Endpoint of the Appchain. 

Go to the Octopus Apps ([Mainnet](https://mainnet.oct.network) and [Testnet](https://testnet.oct.network)), select `Appchains` Tab ->  the corresponding appchain. You can get the RPC Endpoint of the appchain from the appchain page. 

![appchain_rpc](../images/maintain/appchain_rpc.jpg)

#### 2. Set the Polkadot Apps

Go to the [Polkadot Apps](https://polkadot.js.org/apps/#/explorer), you should set the custom rpc with the RPC Endpoint, click the Switch, and then you could connect to the Appchain network.

![set_network](../images/maintain/set_network.jpg)

#### 3. Create the Appchain account

After connecting to the network, you can create the new account.

![create_account](../images/maintain/create_account.jpg)

> **Disclaimer: Webapp and Extension are Separate**
>
> * If you followed option 1 or 3 to create the account, you must also load it into your browser plugin. This can be done with your mnemonic or private key json file, detailed here https://support.polkadot.network/support/solutions/articles/65000169952-how-to-restore-your-account-in-polkadot-js-and-the-polkadot-js-browser-plugin*
