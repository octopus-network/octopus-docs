## Stake OCT

To become a validator of Appchain, you need to stake OCT.

> **Note**: 
>
> * The validator's NEAR account should have a few NEAR tokens and enough OCT tokens for the staking.
> * For the test network, please request OCTs from the [Faucet](https://faucet.testnet.oct.network/).
> * If you plan to stop your validator, please firstly do the `Unbond` operation and keep the node running until the next round validators comes online (~20 minutes in the test network). For one-click deployment, you can click `Validator Panel` and then do the `Destory` operation. Also, for manual deployment, you can manually stop the validator node.

Go to the Octopus Apps ([Mainnet](https://mainnet.oct.network) and [Testnet](https://testnet.oct.network)), click the `Appchains` tab and select the Appchain you wish to stake for, and then follow the steps:

1. Click the `Validator Panel`;
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
> 
>
> After staking OCT,  your validator ID would be with the status **STAKER**, it means you are pending as a appchain validator. 
>
> If your validator node had synced, and the validator set have been updated,  you would become a appchain validator, and your validator ID will be with the status **VALIDATING**.
