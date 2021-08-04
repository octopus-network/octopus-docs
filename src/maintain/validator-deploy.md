## 搭建验证节点

章鱼网络提供了一键搭建验证节点的服务。这是为了简化部署过程，但它不是唯一的方法，验证节点运营商也可以[手动搭建验证节点](./validator-deploy-manually.md)。
### 自动搭建验证节点

**注**：目前仅支持部署验证节点到 AWS 服务器。

验证人访问章鱼网络[测试网](https://testnet.oct.network/)，在应用链列表中，选择要成为验证人的应用链，点击进入操作页面，只需进行以下2步操作：

1. 在操作页面中，点击`Deploy Validator`；
2. 在弹出页面中，输入你的`AWS Access Key`，点击`Enter`；

如下图所示：
![deploy validator](./validator_deploy.jpg)

**注**：AWS Access Key 仅会被用于此次部署，并且AWS Secret Key不会在任何地方被存储，帐户的风险非常低。


