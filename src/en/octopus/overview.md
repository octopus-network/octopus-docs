## Overview of Octopus

Octopus Network is a host for Web3.0 applications in the form of independent blockchains, aka Appchains. Octopus Network provides leased security, interoperability, infrastructure and many other useful and affordable services to Appchains.

![Octopus Network Architecture](./Octopus_Architecture.png)

### Relay

Octopus Relay is a set of [smart contracts](https://github.com/octopus-network/octopus-relay-contract) running on the NEAR blockchain. It provides leased security to Appchains, and make Appchains interoperable with NEAR and other Appchains.

### Appchain

An Appchain is a Substrate-based blockchain that is made for a specific decentralized web application. A Substrate-based blockchain could integrate the pallet [pallet-octopus-appchain](https://github.com/octopus-network/pallet-octopus-appchain) as an Octopus Appchain, and [join the Octopus Network](https://github.com/octopus-network/pallet-octopus-appchain/blob/master/docs/Appchain_Guide.md) get flexible and affordable leased security, powerful out-of-the-box interoperability, and many useful infrastructures. 

### Validator

Octopus Validators provide security to a Appchain by staking OCT tokens on Octopus Relay and [running validator](../validator/guide.md) nodes for this Appchain.

All validator nodes for one Appchain will form a quorum to reach consensus on block production. They will be rewarded by Appchain native token issuing, and malicious actors will be slashed 