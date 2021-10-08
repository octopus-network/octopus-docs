## 应用链注册

### 先决条件

* NEAR 帐户
* OCT：应用链团队需要支付 1k OCT 作为**审计费**。测试网中，应用链团队可以从 Discord 请求测试网 OCT。

### 应用链注册的操作步骤

1. 用 NEAR 帐户登录到章鱼测试网络。
2. 导航到 **Appchains** 页面，点击 **+ Appchain** 按钮，填写以下内容：
    - Appchain name，3-20个字符，由小写字母、数字和连字符`-`组成，不能以数字开头，开头和结尾不能使用连字符`-`，也就是要符合正则表达式 `[a-z]([-a-z0-9]*[a-z0-9])?` 
    - Website，应用链官网
    - Github，应用链的 Github 仓库
    - Github release，应用链发布版本的 Github URL
    - Commit id，应用链发布版本的 Git 提交哈希
    - Preminted Amount，应用链初始发行的原生通证数量
    - IDO Amount，在主网上线前，应用链通过去中心化交易所提供流动性的通证数量
    - Era Reward，应用链每天区块奖励的通证数量（1 era = 1天）
    - Email，应用链联系人邮箱


   ![注册截图](../../guides/register.png)

3. 点击 *Register* 发送注册交易。