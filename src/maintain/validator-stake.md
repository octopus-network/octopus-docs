## Stake OCT

To become a validator of Appchain, you need to stake OCT.

> **Note**: 
>
> * The validator's NEAR account should have a few NEAR tokens and enough OCT tokens for the staking.
> * For the test network, please request OCTs from the [Faucet](https://faucet.testnet.oct.network/).
> * If you plan to stop your validator, please firstly do the `Unstake` operation and keep the node running until the next round validators comes online (~20 minutes in the test network). For one-click deployment, you can click `Deploy Validator` and then do the `Destory` operation. Also, for manual deployment, you can manually stop the validator node.

Go to the [Octopus Network Testnet](https://testnet.oct.network/), click the `Appchains` tab and select the Appchain you wish to stake for, and then follow the steps:

1. Select the `Validators`;
2. Click the `Stake`; 
3. In the pop-up window, enter your `Validator Account` and `Staking Amount`, and click `Stake`.

`Validator Account` is the validator's appchain account, it is a SS58 address generated in the step [Generate Validator Account](./validator-generate-keys.md).

![stake](../maintain/validator_stake.jpg)
