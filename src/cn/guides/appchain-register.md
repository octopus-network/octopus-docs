## 应用链注册

应用链注册需要用 NEAR 测试网帐户登录[章鱼测试网络Web端](https://testnet.oct.network/)可以完成。章鱼网络是在 NEAR 区块链网络上运行的应用链网络，因此注册应用链需要登录 NEAR 帐户，同时需要锁定一定的 OCT。

备注：可以打开 NEAR [测试网钱包链接](https://wallet.testnet.near.org/) 按照说明创建 NEAR 测试网帐户，同时通过的[OCT水龙头](https://faucet.testnet.oct.network/)获取接入测试网所需的OCT。

应用链注册的操作步骤如下：

1. 用 NEAR 帐户登录到章鱼测试网络。
2. 导航到 **Appchains** 页面，点击 **+ Appchain** 按钮，填写以下内容：
    - Appchain name，3-20个字符，由小写字母、数字和连字符`-`组成，不能以数字开头，开头和结尾不能使用连字符`-`，也就是要符合正则表达式 `[a-z]([-a-z0-9]*[a-z0-9])?` 
    - Website，应用链官网
    - Github，应用链的 Github 仓库
    - Github release，应用链发布版本的 Github URL
    - Commit id，应用链发布版本的 Git 提交哈希
    - Email，应用链联系人邮箱
    - Bond token，绑定的 OCT，应用链成功激活后将会被返还

   ![注册截图](../../guides/register.png)

3. 点击 *Register* 发送注册交易。