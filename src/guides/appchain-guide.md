# Appchain developer guide

Before getting into development, it is assumed that you have an understanding of the [Octopus Network](https://oct.network/)  and the [overall architecture](https://docs.oct.network/general/octopus-overview.html#octopus-network-overview) of the Octopus Network.


## Develop & Test

Set up a development and test environment

+ [Install Rust and Substrate](https://docs.substrate.io/main-docs/install/)
+ [Setup a multi-node Appchain network](https://docs.substrate.io/tutorials/get-started/simulate-network/) in the local environment
+ [Substrate Command Line Tools](https://docs.substrate.io/reference/command-line-tools/)

Develop Appchain based on the template provided by the Octopus Network

+ [Appchain template](https://github.com/octopus-network/barnacle/tree/release-v0.9.18)
+ [Appchain EVM compatible template](https://github.com/octopus-network/barnacle/tree/release-v0.9.18-evm)


Develop Appchain based on the Barnacle template

+ [Develop runtime](https://docs.oct.network/guides/appchain-develop.html#implement-appchain-runtime)
+ [Substrate Build](https://docs.substrate.io/main-docs/build/)
+ [Substrate Pallet](https://docs.substrate.io/tutorials/work-with-pallets/)

Develop Appchain based on the Barnacle EVM template

+ [Appchain EVM](https://docs.oct.network/guides/appchain-evm.html#appchain-evm-compatible)
+ [Develop DApp](https://docs.moonbeam.network/builders/build/eth-api/)


## Launch Testnet & Mainnet

After completing the Appchain development, please familiar with the [Appchain launch process](https://docs.oct.network/guides/appchain-startup.html), and then contact the Octopus team to launch the Testnet.

+ [Register](https://docs.oct.network/guides/appchain-register.html#appchain-register)
+ [Audit]()
+ [Voting](https://docs.oct.network/guides/voting-appchain.html#voting-for-appchain)
+ [Booting](https://docs.oct.network/guides/appchain-startup.html#appchain-booting-process)

> The Mainnet launch process is the same as the Testnet.


## Upgrade & Maintain
[Appchain upgrade](https://docs.oct.network/guides/appchain-upgrade.html#appchain-upgrade)

## Security

In the Octopus Network, the OCT holders can stake OCTs to become validators or delegators who provide the security for the Appchain.

+ [Octopus Network LPoS](https://docs.oct.network/general/octopus-staking.html#octopus-network-staking)
+ [Validator Guide](https://docs.oct.network/maintain/validator-guide.html)
+ [Delegator Guide](https://docs.oct.network/maintain/delegator-delegate.html)

Validator nodes

+ [Check the status of the Appchain](https://mainnet.oct.network/appchains)
+ Monitor the validator node  status through the [telemetry node](https://telemetry.mainnet.octopus.network/)
