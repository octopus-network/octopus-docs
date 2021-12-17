## Appchain Startup

![Appchain_Pipeline](./appchain_pipeline.png)

### Prerequisite

An appchain goes live, the appchain team firstly needs to do:

* [Develop](./appchain-develop.md) and complete the implementation for the appchain functional specification file, include: publish the appchain release;
* Firstly need to [register](./appchain-register.md) the appchain and pass the audit and the other process in [testnet](https://testnet.oct.network). And then register the appchain in [mainnet](https://mainnet.oct.network).

### Appchain Status

There are the below five phases:

1. **Registered**: The Appchain will go through the Registered phase after the appchain team submits the registration with the appchain information.
2. **Auditing**: The Octopus team will start the audit within 1-2 weeks. During the Auditing phase, the Octopus team mainly audits for two aspects:
    * The protocol functions are usable/valuable for business purposes;
    * Both the protocol apps and appchain node are implemented as the same with the protocol function specification file provided;
3. **Voting**: If the Appchain passes the audit, it will go through the Voting phase. This is the **critical stage** for the Appchain team to request support from OCT holders. OCT holders can [vote](./voting-appchain.md) to decide whether the Appchain would go through the next phase.
4. **Booting**: The Appchain with the highest vote scores will go through the Booting phase, the Octopus team will do some preparations for the appchain to go live.
5. **Running**: After the Octopus team boots the appchain and the Appchain team activates the chain with the Sudo account,  the Octopus team will execute the go-live step, the Appchain will go through the Running phase.

🎉🎉🎉 Congratulations! If you've made it this far, you are now part of the Octopus Network! As an appchain partner, your leased security is valid as long as the community continues to support the project with staking OCT tokens. If you have any questions, please reach out to us on [Discord](https://discord.gg/6GTJBkZA9Q). If you don't have your own appchain channel there, please contact `sheldon@oct.network` to affirm your registration and keep a channel open for your appchain in our Octopus Network community.

### Tasks in the Booting Phase

The Octopus team will do the below for each appchain network:

* Run the booting nodes and provide the list;
* Run the full node and provide the RPC gateway;
* Run the relayer of the Octopus bridge;
* Deploy NEP141 token of the appchain native token;

The appchain team needs to provide premined appchain native token amount and block reward amount(for each day) to Octopus team. The Octopus team will make sure premined appchain native token amount and block reward amount are properly set in wrapper token contract on Mainchain and ChainSpec of appchain.