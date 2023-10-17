## 验证人操作

### 领取质押奖励

在一个奖励周期大约 1 天后，验证人将会获得质押奖励，需要手动领取。在 **My Rewards** 区域，点击**Claim**，然后点击`Claim All`按钮领取奖励。

![my rewards](../../images/maintain/my_rewards.jpg)

![validator claim rewards](../../images/maintain/validator_claim_rewards.jpg)

**警告**：验证人需要及时领取质押奖励，超过 84 天的奖励将无法领取。

### 停止验证

停止验证需要完成解除质押和停止验证节点两步操作。

### 解除质押

在验证人列表中选择验证人，点击`Manage`打开`Validator Profile`页面。

![validator manage](../../images/maintain/validator_manage.jpg)

在`Validator Profile`页面中，点击`Unbond Validator`按钮执行解除质押操作。

![validator unbond](../../images/maintain/validator_unbond.jpg)

> **注意**：解除质押操作后，质押的 OCT 有一个解绑期，在解绑期结束之前，无法提现，并且也不会获得任何质押奖励。

### 停止验证节点

对于通过自动部署服务部署的验证节点，验证人可以在 **My Node** 区域中点击`···`，选择 `Destory` 停止验证节点并删除自动部署的实例。

![validator destory node](../../images/maintain/validator_destory_node.jpg)

> **注意** 使用 Digital Ocean 自动部署的验证节点，需要手动删除存储，具体操作可参考[如何删除存储](https://docs.digitalocean.com/products/volumes/how-to/delete/)

手动部署的验证节点，验证人请记得停掉它。

> **注意**：解除质押后，如果验证人立即停止验证节点，将没有最后一个质押周期的奖励。如果在一个奖励周期后停止它，则仍可以获得奖励。

### 提现质押的 OCT

在应用链的 **My Rewards** 区域，点击`···`，选择`Withdraw Stakes`。

![unbond withdraw](../../images/maintain/unbond_withdraw.jpg)

解绑期结束后，可以点击`Withdraw`提现质押的 OCT。

![withdraw stakes](../../images/maintain/withdraw_stakes.jpg)