## 资产跨链

章鱼网络为应用链提供了开箱即用的跨链功能，包括主链（NEAR）稳定币转移和应用链原生资产转移。

## 转移主链稳定币

该指南描述如何通过章鱼内置的跨链功能，在主链和应用链之间完成资产的跨链转移。下面以章鱼测试网稳定币 USDC 为例，具体步骤包括：

- 应用链上创建映射资产
- 主链资产转入应用链
- 应用链转回主链资产

### 创建映射资产

在应用链上线后，如果要使用主链上的稳定币，比如 USDC，我们需要先在应用链上创建相对应的映射资产。通常，这一步通过应用链的治理来完成。但是，我们在本指南中使用`sudo`来执行此操作。

我们使用 Polkadot JS 连接应用链。
然后，选择 Develper -> Sudo -> octopusAssets -> forceCreate，发行一个资产 ID 为 0 的资产。如下图所示：

![创建资产](../../images/guides/create_asset.png)

最后，我们可以检查链状态以查看资产是否正确发行。其中 Asset 0 对应主链上的稳定币 USDC（我们在 ChainSpec 中预设了这个映射，usdc.testnet）。

### 主链转入应用链

打开章鱼测试网的[跨链桥](https://testnet.oct.network/bridge)页面，我们以 `debionetwork` 为例，将稳定币 USDC 从主链转移到该应用链。同时选择NEAR账户作为发送人，收款人是个应用链账户的 SS58 地址，我们转账 2 USDC。如下图所示：

![转移USDC资产](../../images/guides/transfer_usdc.jpg)

几分钟后，应用链验证人验证转账交易后，则会为接收方铸造映射资产。我们可以检查链状态以查看资产是否正确转移，选择 Chain State -> Storage -> octopusAssets -> account，可以看到余额为 2,000,000，注：精度是 6。

### 应用链转回主链

和上一步操作类似，我们仅需切换发送方和接收方账户，即可赎回主链 USDC，完成稳定币转账。如下图所示：

![赎回USDC资产](../../images/guides/redeem_usdc.jpg)

资产赎回事件由主链的 Octopus Relay 验证后，资产余额将会更新。

> 应用链原生资产转移不需要手动创建映射资产，可以直接跨链转移，和主链（NEAR）稳定币转移方法一致。
