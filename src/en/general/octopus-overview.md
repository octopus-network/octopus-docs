## Overview of Octopus

Octopus Network is a host for Web3.0 applications in the form of independent blockchains, aka Appchains. Octopus Network provides flexible and affordable rental security, cross-chain interoperability, infrastructure and community development guidance for the Appchains.

![Octopus Network Architecture](./Octopus_Architecture.png)

### Relay

Octopus Relay is a set of [smart contracts](https://github.com/octopus-network/octopus-relay-contract) running on the NEAR blockchain.
### Appchain

An Appchain is a Substrate-based blockchain that is made for a specific decentralized web application. A Substrate-based blockchain could integrate the pallet [pallet-octopus-appchain](https://github.com/octopus-network/pallet-octopus-appchain) as an Octopus Appchain.

### Validator

In the Octopus Network, OCT holders can stake OCTs as validators or nominators. Validators secure the Appchain by staking OCT and [running the validator node](../maintain/validator-guide.md) of the Appchain. Nominators secure the Appchain by selecting good validators and staking OCT that they delegate the bonded OCTs to the selected validators.

The validator will be rewarded with validators receiving block rewards (including transaction fees) in the form of the native token of the Appchain. Slashing will happen if a validator misbehaves (e.g. goes offline, attacks the network, or runs modified software) in the network. They and their nominators will get slashed by losing a percentage of their bonded/staked OCT.