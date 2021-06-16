## 应用链注册

应用链团队通过向章鱼网络提供应用链相关的信息，用其 NEAR 帐户向章鱼网络中的中继合约发送一笔注册交易完成应用链注册。由于章鱼网络是在 NEAR 区块链网络上运行的一个应用链网络。因此，应用链团队首先需要拥有一个 NEAR 网络上帐户，同时注册应用链需要锁定一定的 OCT。

在 NEAR 上创建帐户最简单的方法是使用 NEAR 钱包，更多详细信息参考[创建NEAR帐户](https://docs.near.org/docs/develop/basics/create-account)。

如果是测试网，可以打开 NEAR [测试网钱包链接](https://wallet.testnet.near.org)，按照说明创建帐户。应用链团队可以加入章鱼网络的[Discord](https://discord.gg/6GTJBkZA9Q)，在 **#testnet** 频道中，申请 OCT 用于测试，团队成员会为你提供帮助。

应用链注册的操作步骤如下：

1. 用 NEAR 帐户登录到章鱼网络，[测试网](https://testnet.oct.network/)。
2. 导航到 **Appchains** 页面，点击 **+ Appchain** 按钮，填写以下内容：
    * Appchain name，由数字和大小写字母组成的3～20个字符
    * Website，应用链官网
    * Github，应用链的 Github 仓库
    * Github release，[应用链发布](./release.md)版本的 Github URL
    * Commit id，[应用链发布](./release.md)版本的 Git 提交哈希
    * Email，联系邮箱
    * Bond token，绑定的 OCT，应用链成功激活后将会被返还
3. 点击 *Register* 发送注册交易。