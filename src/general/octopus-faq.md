## Frequently Asked Questions (FAQs)

*This FAQ focuses on technical questions for users interested in developing Octopus Appchain. If you have a more general question, you may wish to search for the answer on our [Octopus Network FAQ](https://oct.network/#faqs). If you have a question that is not answered, please feel free to ask on [Octopus Discord](https://discord.gg/6GTJBkZA9Q).*

**Does the Octopus Network have the Collator as like Polkadot?**

No. The Collator maintain parachain by collecting parachain transactions and producing state transition proofs for Relay Chain validators. But each Appchain in Octopus Network is an **independent** blockchain built for specific applications, similar to [Compound Gateway](https://compound.cash/) and [Polymesh](https:// polymath.network/polymesh), the Octopus Relay is a smart contract on the NEAR. The security of the Appchain is provided by the OCT holders participating in the Staking and running the Appchain Validators, so the Octopus Network does not require Collators.

**Can Appchain developers customize the block time?**

The block time is customizable, and it is [3s](https://github.com/octopus-network/barnacle/blob/master/runtime/src/lib.rs#L156) in the Barnacle template.