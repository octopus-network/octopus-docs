## 应用链注册

在本指南中，我们将学习和实践如何完成应用链的注册。

**需要做什么**

在开始之前，让我们列出在本教程中我们将要做的事情。我们将完成：

* 创建 NEAR 帐户
* 申请 OCT
* 注册应用链

### 创建 Near 账户

章鱼网络是在 NEAR 区块链网络上运行的一个应用链网络。因此，应用链团队首先需要拥有一个 NEAR 网络上帐户，这样才能完成应用链接入章鱼网络的操作。

在 NEAR 上创建帐户最简单的方法是使用 NEAR 钱包。打开 NEAR [测试网钱包链接](https://wallet.testnet.near.org)，按照说明创建帐户。

更多详细信息参考[创建NEAR帐户](https://docs.near.org/docs/develop/basics/create-account)。

### 申请 OCT

加入章鱼网络的[Discord](https://discord.gg/6GTJBkZA9Q)，在 **#testnet** 频道中，可以申请 OCT 用于测试，团队成员会为你提供帮助。

### 注册应用链

章鱼网络的架构中，有一个部署在 NEAR 区块链网络中的中继合约。应用链团队可以用 NEAR 帐户向中继合约发送一笔注册交易，该交易包含了应用链的信息，交易成功后会返回应用链的**appchain_id**。操作步骤如下：

* 首先用 NEAR 帐户登录到章鱼网络的[测试网](https://testnet.oct.network/)。
* 其次点击 **Register** 按钮，输入 *Appchain Name, Bond Token*；
* 然后点击 *Register* 发送注册交易，交易成功完成后，页面中的交易*ID* 则作为应用链的**appchain_id**。