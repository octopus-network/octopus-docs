## Stake OCT

To become a validator of Appchain, you need to stake OCT.

> **Note**: 
>
> * The validator's NEAR account should have a few NEAR tokens and enough OCT tokens for the staking.
> * For the test network, please request OCTs from the [Faucet](https://faucet.testnet.oct.network/).

Go to the Octopus Apps ([Mainnet](https://mainnet.oct.network) and [Testnet](https://testnet.oct.network)), click the `Appchains` tab and select the Appchain you wish to stake for, and then follow the steps:

1. Go to **My Staking** panel, click `Register Validator`;

2. In the pop-up window, enter the below value:
    * `Validator Account`, the validator's appchain account, it is a SS58 address generated in the step [Generate Validator Account](./validator-generate-keys.md);
    * `Staking Amount`, the validator's staking amount, the minimum is 10,000 OCT for mainnet;
    * `Email`, the validator's email;
    * `Twitter ID`, the validator's twitter;
    * Select whether to allow other OCT holders to delegate OCT to the validator node through the delegation;
 
And then click `Register`. 

![stake](../maintain/validator_stake.jpg)

> **Note**: 
>
> After staking OCT,  your validator ID would be with the status **STAKER**, it means you are pending as a appchain validator. 
>
> If your validator node had synced, and the validator set have been updated,  you would become a appchain validator, and your validator ID will be with the status **VALIDATING**.

### Claim rewards

Go to the Octopus Apps ([Mainnet](https://mainnet.oct.network) and [Testnet](https://testnet.oct.network)), click the `Appchains` tab and select the Appchain you had staked for. And then in the "My Staking" area, if you have become a validator for more than 1 reward cycle, you would see the reward button "Claim ...", just click the button.

**Note**: The following picture is the appchain DeBio as an example.

![claim](../maintain/validator_claim_rewards.jpg)

### Stop validating and withdraw stake

You can stop validating and retrieve your stake, and there is a delayed exit period, called the unbonding period and it is 28 days. You will not be able to transfer your tokens before this period has elapsed, and you will not receive any staking rewards during this period.

After the unbonding period, you can withdraw your stakes via clicking the `Withdraw Stakes` button from `My Staking` panel.

![withdraw stakes](../maintain/withdraw_stakes.jpg)

If you plan to stop the validator node, firstly you **MUST** do the `Unbond` operation and keep the validator node running until the next round validators comes online.

For one-click deployment, you can do the `Destory` operation in **My Node** panel. For manual deployment, you can manually stop the validator node.