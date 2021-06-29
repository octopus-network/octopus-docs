## 设置会话密钥

验证节点需要通过签名和提交交易来告知验证人的会话密钥，这将验证节点与验证人在应用链上的帐户相关联。远程登录进入部署验证节点的服务器，完成author_rotateKeys操作，通过执行以下命令：

```bash
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

输出中有个十六进制编码的“result”字段，保存此字段的值以备后用。此时可以重新启动验证节点。

完成上述准备后，验证人访问章鱼网络[测试网](https://testnet.oct.network/)，在应用链列表中，选择要成为验证人的应用链，点击进入操作页面，只需进行以下2步操作：

1. 在操作页面中，点击`RPC Call`；
2. 在弹出页面中，选择你的应用链账户，RPC 选择`session`，Callables 选择`setKeys`，字段`keys`中输入`author_rotateKeys`操作的输出，字段`proof`中输入`0x00`，然后点击`Submit`。

如下图所示：
![set session key](./validator_set_session_key.jpg)
