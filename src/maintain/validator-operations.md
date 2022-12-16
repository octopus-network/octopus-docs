
## Validator operations


### Claim rewards

After a reward cycle (~1 day), the validator will receive the staking reward, which needs to be claimed manually. In the **My Rewards** area, click **Claim** , and then click the `Claim All` button to claim the reward.

![my rewards](../images/maintain/my_rewards.jpg)

![validator claim rewards](../images/maintain/validator_claim_rewards.jpg)

**Warning**: The validator needs to claim the rewards in time, and the rewards that exceed 84 days will not be claimable.

### Stop validating

To stop validating, it needs to unbond staking and stop the validator node.

### Unbond staking

Click `Manage` to open the `Validator Profile` page.

![validator manage](../images/maintain/validator_manage.jpg)

Click the `Unbond Validator` button on the `Validator Profile` page to perform the unstaking operation.

![validator unbond](../images/maintain/validator_unbond.jpg)

> **Note**: After unbond, the staking OCT will have an unbonding period. Before the unbonding period ends, it cannot be withdrawable and you will not obtain any staking rewards.

### Stop the validator node

For the node which was deployed via the automatic deployment service, the validator can click `...` and select `Destory` in the **My Node** area to stop the validator node and delete the instance of automatic deployment.

![validator destory node](../images/maintain/validator_destory_node.jpg)

For the node which was deployed manually, please remember to stop it.

> **Note**: After unbond, if stop the node immediately, the validator will have no rewards for the last reward cycle. If stop it after one reward cycle, the validator will still have the rewards.

### Withdraw staking OCT

Click `...` and select `Withdraw Stakes` on the **My Rewards** area.

![unbond withdraw](../images/maintain/unbond_withdraw.jpg)

After the unbonding period ends, you can click the `Withdraw` button to withdraw the staking OCT.

![withdraw stakes](../images/maintain/withdraw_stakes.jpg)