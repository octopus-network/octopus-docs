## 应用链启动流程

应用链网络启动流程如下图所示：

![启动流程](../../images/guides/appchain_pipeline.png)

### 应用链状态

应用链状态有以下5个阶段：

1. **已注册（Registered）**：应用链团队填写注册信息并提交后将进入 Registered 阶段，章鱼网络团队通常会在1-2周内开始审核。
2. **已审计（Audited）**：审核通过后会进入 Audited 阶段，章鱼网络团队会从两个方面进行审计：
    * 应用链提供的功能从业务上是可用的或有价值；
    * 应用链的配置正确；
3. **投票（Voting）**：应用链通过审计后会进入 Voting 阶段，这是应用链的**关键阶段**，需要向章鱼网络 DAO 理事会争取支持。DAO 理事会成员可以[投票](./voting-appchain.md)决定应用链是否进入下个阶段。
4. **启动（Booting）**：获得赞成投票数最高的应用链将进入 Booting 阶段，章鱼网络团队将会为应用链上线进行一系列的操作。
5. **运行（Running）**：章鱼网络团队完成 Booting 阶段的所有操作并执行上线步骤，应用链则进入 Running 阶段。

### 应用链 Booting 流程

在本节中，我们将列出在启动阶段需要做的事情。

1. 章鱼网络团队将为应用链部署 anchor 合约和 wrapped token 合约。

    **注意**：通过提前在 NEAR 网络中创建 wrapped token，应用链团队可以选择在应用链启动之前进行 IDO。这样应用链的代币存在于两个地方：NEAR 网络中的 wrapped 代币和应用链网络中的原生代币。当应用链启动时，用户可以使用章鱼网络跨链桥在这两个地方之间转移代币。

    此外，章鱼网络团队将提供包含章鱼网络基金会验证者节点的会话密钥和质押信息的 chainspec 文件的片段。对于基金会验证者节点默认质押 `50000 * 10**18` OCT。同时，这些节点会被默认预分配余额为`10 * 10**18` 的应用链原生代币，实际金额可由应用链团队修改确定。

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

    应用链团队基于它，生成 raw chainspec，将其提交到应用链 Github 仓库（例如 <APPCHAIN_REPO>/resources/）。示例命令：

    ```bash
    $ ./target/debug/debio build-spec --chain=debionetwork.json --raw > octopus-testnet.json
    ```

    同时请将人类可读的 chainspec 文件发送到 Discord，章鱼网络团队需要做再次检查。

   > **备注**：检查应用链 node 的实现，文件`<APPCHAIN_REPO>/node/src/command.rs`中的`load_spec`函数，是否添加了以下的内容设置选项`--chain`值：
   > * 主网，用`octopus-mainnet`
   > * 测试网，用`octopus-testnet`

   Barnacle模版的参考代码如下：
   
   ```Rust
   "octopus-testnet" => Box::new(chain_spec::octopus_testnet_config()?),
   ```

3. 章鱼网络团队使用应用链团队发布的主网版本代码构建 Docker 镜像，然后会启动4个验证节点，4个引导节点的链，部署 API 网关、中继等服务，然后使用`sudo`帐户激活应用链。

4. 章鱼网络团队将应用链移至运行阶段。