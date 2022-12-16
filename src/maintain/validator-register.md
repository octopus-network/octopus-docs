## Register Validator

This guide is for the automatically deployed validator. Also, for the manually deployed validator, please refer to this guide to [Register Validator](./validator-register-manually.md).

To register the validator of the appchain, the validator need to complete the operations of registering the validator and setting the Session Key.

### Register validator

Click `Register Validator` on the **My Node** area of ​​the appchain page and input the below fields in the pop-up page:

* `Appchain Account`, the appchain account of the validator which is the address generated in the step [Generate Validator Account](./validator-generate-keys.md).
* `Deposit Amount`, the amount of staking OCT by the validator;
* `Email`, the contact email of the validator;
* `Twitter ID`, the Twitter account of the validator;
* `Accept delegation`, select whether the validator node accepts [delegator delegation](./delegator-delegate.md);
    
Click `Register`.

![validator register](../images/maintain/validator_register.jpg)

After successful registration, please wait for about 1~2 minutes, and the validator's appchain account will receive one appchain native token which used for the next step.

### Set Session Key

**Note**: Please make sure that the validator node has completed the synchronization of the chain data, and the validator's appchain account has received th appchain native token.

Click `...` on the **My Node** area of ​​the appchain page, select `Set Session Key`, and on the pop-up page, select the appchain account filled in the registration and then click `Set`.

![validator set sessionkey](../images/maintain/validator_set_sessionkey.jpg)

![validator set sessionkey](../images/maintain/validator_set_sessionkey2.jpg)

#### Check Session key

Open the [PolkadotJS-Apps](https://polkadot.js.org/apps/),  the validator can configure the `custom endpoint` with the appchain RPC Endpoit.

![RPC Endpoit](../images/maintain/appchain_rpc.jpg)

Once ensuring that you have connected to appchain RPC endpoit, navigate to `Developer` tab and select `Chain State` then select the `session > nextKeys(AccountId32)` option, and select your validator account, and then click `+`. 

![check session keys](../images/maintain/validator_check_session_keys.jpg)

Check whether the return value is consistent with the Session keys you have set.

The validator will be added into the next round of validator sets after waiting for a reward cycle (~1 day).


---

**Congratulations!** If you have followed all of these steps, and been selected to be a part of the validator set, you are now running a appchain validator! Welcome to join the validator/delegator Discord channel via clicking the button on each Appchain page.

![discord](../images/maintain/validator_join_discord.jpg)

