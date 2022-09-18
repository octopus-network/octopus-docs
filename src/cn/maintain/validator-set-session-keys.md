## 生成 Session Key

在部署验证节点的服务器上运行`author_rotateKeys`命令，若验证节点使用默认的 HTTP RPC 端口配置，命令如下：

```bash
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

输出中有个十六进制编码的“result”字段，保存此字段的值以备后用。