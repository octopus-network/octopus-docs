## Assets Cross-chain

The Octopus Network provides out-of-the-box cross-chain functions for Appchain, including Mainchain (NEAR) stablecoin Cross-chain transfer and Appchain native assets Cross-chain transfer.

## Transfer Mainchain stablecoin

This guide demontrates how to complete the cross-chain transfer of assets on the Mainchain between the Mainchain and Appchain through the built-in cross-chain features of Octopus Network. Taking the Octopus testnet stablecoin `USDC` as an example, the steps include:

- Create Wrapper Assets
- Transfer Mainchain to Appchain
- Transfer Back to the Mainchain from Appchain

### Create Wrapper Assets

After the Appchain goes live, if Appchain users want to use a stable coin on the Mainchain, such as USDC, we need to create the corresponding wrapper assets on the Appchain first. Usually, this step is done through the governance of the Appchain. However, we use `sudo` instead to demo.

- Connect to the Appchain on Polkadot JS.
- Select `Develper -> Sudo -> octopusAssets -> forceCreate` to issue an asset with asset ID 0:

![Create Asset](../images/guides/create_asset.png)

- Check the chain status if the assets was issued correctly, where Asset 0 corresponds to the stable coin USDC on the mainchain (we have this mapping preset in ChainSpec, `usdc.testnet`).

### Transfer Mainchain to Appchain

On the [cross-chain bridge](https://testnet.oct.network/bridge) of Octopus Testnet, we select the Appchain `debionetwork` as example which will receive the stablecoin USDC transferred from the Mainchain and choose a NEAR account as the sender; The recipient is an SS58 address of an Appchain account, which will receive the 2 USDC after transferred.

![Transfer USDC assets](../images/guides/transfer_usdc.jpg)

A few minutes later, the transfer transaction is verified by the Appchain validators, then the corresponding wrapped assets are minted for the recipient. We can check the chain state to verify if the assets are transferred correctly by selecting `Chain State -> Storage -> octopusAssets -> account` and the balance should be 2,000,000 units(note: the decimal place is 6).

### Transfer Back to the Mainchain from Appchain

Following to the previous operation, we switch the sender and receiver accounts to transfer the stablecoin asset back.

![Redeem USDC assets](../images/guides/redeem_usdc.jpg)

The asset balance will be updated after the transfer back event is verified by Octopus Relay on the mainchain.

> The transfer of native assets of the Appchain does not require creation of mapped assets, and can be directly transferred across chains, which is the same way of the Mainchain (NEAR) stablecoin transfer.
