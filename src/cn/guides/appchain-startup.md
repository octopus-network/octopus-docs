## 应用链启动流程

应用链网络启动流程如下图所示：

![启动流程](../../guides/appchain_pipeline.png)

### 先决条件

应用链上线，应用链团队首先需要做的是：

* [开发](./appchain-develop.md)并完成应用链功能规范文件的实现，包括发布一个主网的应用链版本；
* 首先在[测试网](https://testnet.oct.network)完成应用链[注册](./appchain-register.md)，并通过审计和其它流程；然后再在[主网](https://mainnet.oct.network)注册应用链。


### 应用链状态

应用链状态有以下5个阶段：

1. **已注册（Registered）**：应用链团队填写注册信息并提交后将进入 Registered 阶段。
2. **审计（Auditing）**：通常章鱼网络团队会在1-2周内开始审核，审核通过后会进入 Auditing 阶段，章鱼网络团队主要从两个方面进行审计：
    * 应用链协议提供的功能从业务上是可用的/有价值；
    * 应用链协议应用程序和应用链节点的实现与其提供的协议功能规范文件描述相同；
3. **投票（Voting）**：应用链通过审计后会进入 Voting 阶段，这是应用链团队向 OCT 持有者争取支持的**关键阶段**。OCT 持有者可以[投票](./voting-appchain.md)决定应用链是否进入下个阶段。
4. **启动（Booting）**：投票得分最高的应用链将进入 Booting 阶段，章鱼网络团队将会为应用链上线进行一系列的操作。
5. **运行（Running）**：章鱼网络团队完成 Booting 阶段的所有操作，然后应用链团队使用 Sudo 账户激活链，章鱼网络团队将执行上线步骤，应用链则进入 Running 阶段。

### 应用链 Booting 流程

当应用链准备好启动时，章鱼网络团队会将其移至启动阶段。在本节中，我们将列出在启动阶段需要做的事情。

1. 章鱼网络团队将为应用链部署 anchor 合约和 wrapped token 合约。

    **注意**：通过提前在 NEAR 网络中创建 wrapped token，应用链团队可以选择在应用链启动之前进行 IDO。这样应用链的代币存在于两个地方：NEAR 网络中的 wrapped 代币和应用链网络中的原生代币。当应用链启动时，用户可以使用章鱼网络跨链桥在这两个地方之间转移代币。

    此外，章鱼网络团队将提供包含章鱼网络基金会验证者节点的会话密钥和质押信息的 chainspec 文件的片段。对于基金会验证者节点默认质押 `10000 * 10**18` OCT。同时，这些节点会被默认预分配余额为`10 * 10**18` 的应用链原生代币，实际金额可由应用链团队修改确定。

2. 应用链团队生成一个人类可读的 chainspec 文件。示例命令：

   ```bash
   ./target/debug/debio build-spec --disable-default-bootnode --chain dev > debionetwork.json
   ```

   然后请仔细将章鱼网络团队提供的代码片段信息复制到 chainspec 文件中。示例：

   ```bash
   
   // check this section, the Octopus foundation validator nodes are allocated a small balance to cover transaction fees (for example, 10 $DBIO)
      “balance”：{
       “余额”：[
        [
         "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
         10000000000000000000
        ],
      ...
      },
      
      "balances": {
       "balances": [
        [
         "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
         10000000000000000000
        ],
      ...
      },
      
   // this can be found on mainnet/testnet website   
   "anchorContract": "debionetwork.octopus-registry.near", 
   "eraPayout": 13699000000000000000000,
   
   // check this section, these are session keys of the Octopus foundation validator nodes
      "session": {
       "keys": [
        [
         "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
         "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
         {
          "babe": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
          "grandpa": "5FA9nQDVg267DEd8m1ZypXLBnvN7SFxYwV7ndqSYGiN9TTpu", 
          "im_online": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
          "beefy": "KW39r9CJjAVzmkf9zQ4YDb2hqfAVGdRqn53eRqyruqpxAP5YL", 
          "octopus": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY" 
         }
        ],
    ...
       ]
      },
   
   // add a sudo account for future upgrades and privileged operations.(Don’t forget to add some balance to this account as well.)
      "sudo": {
       "key": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
      }
   ```

    应用链团队基于它生成 raw chainspec，并将其命名为`octopus-mainnet.json`用于主网或`octopus-testnet.json`用于测试网，将其提交到应用链 Github 仓库（例如 <APPCHAIN_REPO>/resources/）。示例命令：

    ```bash
    $ ./target/debug/debio build-spec --chain=debionetwork.json --raw > octopus-testnet.json
    ```

    同时请将人类可读的 chainspec 文件发送到 Discord，章鱼网络团队需要做再次检查。

3. 章鱼网络团队使用应用链团队发布的代码构建 Docker 镜像，然后会启动4个验证节点，4个引导节点的链，部署 API 网关、中继等服务，并会将 API 网关的 wss 端点发送给应用链团队。

4. 应用链团队用 wss 端点连接 polkadotjs apps，然后使用`sudo`帐户激活应用链，在`sudo`模块下调用`octopusAppchain -> forceSetIsActivated`，设置`yes`.

5. 章鱼网络团队将应用链移至运行阶段。