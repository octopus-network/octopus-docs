## Frequently Asked Questions (FAQs)

*This FAQ focuses on technical questions for users interested in developing Octopus Appchain. If you have more general questions, please search for the answers in our [Octopus Network FAQ](https://oct.network/#faqs). Furthermore, feel free to ask questions on [Octopus Discord](https://discord.gg/6GTJBkZA9Q).*

**Does the Octopus Network have Collators like Polkadot?**

No. The collators in Polkadot maintain parachain by collecting parachain transactions and producing state transition proofs for Relay Chain validators. In Octopus Network, each Appchain is an **independent** blockchain, similar to [Compound Gateway](https://compound.cash/) and [Polymesh](https://polymath.network/polymesh), and an Appchain node can be bootstrapped as a validator by staking OCT on the Octopus Relay or being delegated by delegators, which are leased as security by the Appchain. Therefore, no Collators needed to collect Appchains' data. For more information, please refer to the section "Security" in Octopus Network White Paper.

**Can Appchain developers customize the block creation time?**

The block creation time is customizable, and it has a [default value](https://github.com/octopus-network/barnacle/blob/master/runtime/src/lib.rs#L156) in the Barnacle template.
