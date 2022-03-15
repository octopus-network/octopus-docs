## 设置会话密钥

> **注意**：
>
> * 确保验证节点已完成链数据的同步。

### 生成 Session Keys

您需要通过签名和提交外部信息来告诉链您的会话密钥。有2种方式可以将验证节点与应用链的验证人帐户相关联。

**选项1：CLI**

在部署验证节点的远程服务器（比如：AWS 实例）上运行`author_rotateKeys`命令更容易，若验证节点使用默认的 HTTP RPC 端口配置，命令如下：

```bash
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

输出中有个十六进制编码的“result”字段，保存此字段的值以备后用。

**选项2：PolkadotJS-Apps**

通过 PolkadotJS Apps使用应用链 RPC 生成会话密钥。如果这样做，请确保 PolkadotJS Apps 连接的是验证节点，这可以在设置选项中配置连接验证节点的RPC。

确保已连接到你的验证节点后，设置节点会话密钥的方法是调用`author_rotateKeys`RPC 请求在验证节点的密钥库中创建新密钥。 选择`开发者`选项并选择`RPC Calls`，然后选择`author > rotateKeys()`，记住保存返回的输出，以供后续步骤使用。

此时你可以重新启动你的节点。

可以登录到部署验证节点的远程服务器，如果使用的是一键部署工具，命令如下：

```bash
docker restart seashell
```

### 提交`setKeys`交易

> **注意**：
>
> * Polkadot{.js} 浏览器插件已安装。
> * 验证人的应用链帐户有应用链的原生Token。
>   * 对于主网，如果帐户没有余额，可以先通过[Ref Finance](https://app.ref.finance/) 兑换应用链在 NEAR 网络的Token，然后通过[章鱼网络跨链桥](https://mainnet.oct.network/bridge) 转账到在应用链上的验证人帐户。
>   * 对于测试网络，可以通过在 Discord testnet 频道向团队请求应用链的 Token。

完成上述准备后，验证人访问章鱼网络([Mainnet](https://mainnet.oct.network) 和 [Testnet](https://testnet.oct.network))，在应用链列表中，选择要成为验证人的应用链，点击进入应用链页面，然后按照步骤设置会话密钥：

1. 在应用链页面 **My Node** 区域，点击 `Set Session Key`，在弹出页面中，选择你的应用链账户，在`Session Key`输入框中输入`author_rotateKeys`操作输出的`result`字段的内容；

![set session keys0](../../maintain/validator_set_session_keys0.jpg)

2. 点击`Set`。

如下图所示：
![set session keys1](../../maintain/validator_set_session_keys1.jpg)


### 通过 PolkadotJS-Apps 检查 session keys 

你可以通过 PolkadotJS-Apps 检查你的会话密钥是否设置，你可以配置 Apps 的`自定义终端`，使用应用链的 RPC Endpoit，用以连接到应用链, 可以从该应用链在章鱼网络 Apps([Mainnet](https://mainnet.oct.network)和[Testnet](https://testnet.oct.network))的页面上获得。

一旦确保已经连接到应用链的，导航到`开发者`选项，并选择`链状态`，然后选择`session > nextKeys(AccountId32)`选项，并选择你验证节点使用的验证人账户，然后点击`+`。

![check session keys](../../maintain/validator_check_session_keys.jpg)

检查返回值是否和你设置的 Session keys 一致。