## Appchain Startup

![Appchain_Pipeline](./appchain_pipeline.png)

### Prerequisite

An appchain goes to live, the appchain team firstly needs to do:

* [Develop](./appchain-develop.md) and complete the implementation for the appchain functional specification file, include: publish the appchain release;
* Firstly need to [register](./appchain-register.md) the appchain and pass the audit and the other process in [testnet](https://testnet.oct.network). And then register the appchain in [mainnet](https://mainnet.oct.network).

### Appchain Status

After the registration is completed, there are the below fours phases:

1. **Auditing**: The Octopus team will start the audit within 1-2 weeks. During the Auditing phase, the Octopus team mainly audits for two aspects:
    * Whether there are known security vulnerabilities in the Substrate codes;
    * Whether the implementation of Appchain is consistent with its functional specification file.
2. **Voting**: If the Appchain passes the audit, it will go through the Voting phase. This is the **critical stage** for the Appchain team to request support from OCT holders. OCT holders can [vote](./voting-appchain.md) to decide whether the Appchain would go through the next phase.
3. **Staking**: The Appchain with the highest vote scores will go through the Staking phase, which is the pre-launch stage of the Appchain network. At this phase, OCT holders can stake OCT as appchain [validator](../maintain/validator-guide.md) or [delegator](./staking-delegate.md), and the validator doesn't need to run a validator node.
4. **Booting**: When the Appchain obtains enough validator nodes, and the total value staked OCTs be at $2 million which is the lowest safety limit, the Octopus team will run several validator nodes as the booting nodes of the Appchain network, the Appchain will go through the Booting phase.

> Notes:
> * An appchain network only needs 6 validator nodes to startup, Octopus Foundation will run 4 boot-nodes for each appchain, and those boot-nodes will not accept delegation.
> * To be a validator, the minimum amount of stake OCT is 10,000;

### Booting the Appchain

The Octopus team will do the below for each appchain network:

* Run the booting nodes and provide the list;
* Run the full node and provide the RPC gateway;
* Run the relayer of the Octopus bridge;
* Deploy NEP141 token of the appchain native token;

The appchain team needs to provide premined appchain native token amount and block reward amount(for each day) to Octopus team. The Octopus team will make sure premined appchain native token amount and block reward amount are properly set in wrapper token contract on Mainchain and ChainSpec of appchain.

### Step by Step: Appchain Onboarding

Taking the testnet as an example, the steps to start the appchain are as follows:
1. Login to funded NEAR web wallet account, containing OCT and NEAR tokens.
2. Navigate to [Octopus Test Network](https://testnet.oct.network) and click "Join Octopus".
3. Fill in the forms with the desired project name and GitHub details for [appchain registration](./appchain-register.md), and click "Submit".
4. After the registration is passed, when the audit process starts, the UI will mark the appchain as **Auditing** phase. This means the audit is active with the Octopus Network team and no feedback will be presented until complete. Octopus Network reserves the right to protect the network through this process, so please be patient: projects that are acceptable but need corrections will not be rejected if the submitter is willing to adjust their Github repositories.
5. Once the audit is completed, the UI will mark the appchain as **Voting** phase. This means the OCT holder could [vote](./voting-appchain.md) for the appchain.
6. The voting will take about 1-2 weeks, and then the UI will mark the appchain with the highest vote scores as **Staking** phase. This means the OCT holder could be stake OCT to be the [validator](../maintain/validator-guide.md) of the appchain.
7. The appchain goes through the **Booting** phase, its network will produce new blocks and allow new validator nodes to join. The appchain team can configure its front end to connect to the gateway through an RPC endpoint, and users can use its application.

🎉🎉🎉 Congratulations! If you've made it this far, you are now part of the Octopus Network! As an appchain partner, your leased security is valid as long as the community continues to support the project with staking OCT tokens. If you have any questions, please reach out to us on [Discord](https://discord.gg/6GTJBkZA9Q). If you don't have your own appchain channel there, please contact `sheldon@oct.network` to affirm your registration and keep a channel open for your appchain in our Octopus Network community.
