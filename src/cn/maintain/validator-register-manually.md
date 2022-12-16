## 注册验证人

本指南是针对手动部署的验证人。

注册应用链的验证人，需要完成注册验证人和设置 Session Key 的操作。

### 注册验证人

通过以下步骤用 NEAR CLI 进行验证人注册。

1. 安装 NEAR CLI

> 注意：确保你安装了当前版本的`npm`和`NodeJS`。

``bash
npm install -g near-cli
```

更多细节，请参考[安装](https://github.com/near/near-cli#installation) NEAR CLI。

2. 用验证人 NEAR 账户登录
    
> 注意：`near-cli`的默认网络是**testnet**。

```bash
# change the network to mainnet
export NEAR_ENV=mainnet
near login
```

一旦完成，你现在将把你的访问密钥储存在本地一个名为`.near-credentials`的隐藏目录中。更多细节，请参考 NEAR [login](https://github.com/near/near-cli#near-login)

3. 执行 NEAR CLI 命令注册验证人，各参数说明如下：

* `ANCHOR_ACCOUNT_ID`,`receiver_id`，应用链的 Anchor 合约，验证人可以在每个应用链页面获得应用链的 Anchor 合约
![anchor contract](../../images/maintain/anchor_contract.jpg)
* `amount`，验证人质押的 OCT 数量，其精度为18;
* `validator_id_in_appchain`，验证人应用链账号的十六进制格式，验证人的应用链账号是在[生成验证人帐户](./validator-generate-keys.md)步骤中生成的，可以使用这个[在线工具](https://www.shawntabrizi.com/substrate-js-utilities/)，并选择`AccountId to Hex`，将应用链账户转换为其十六进制格式。
![validator account2hex](../../images/maintain/validator_accountid2hex.jpg)
* `can_be_delegated_to`，选择验证人节点是否接受[委托人委托](./delegator-delegate.md);
* `socialMediaHandle`，验证人的社交媒体账户，例如 Twitter 帐号;
* `email`，验证人的联系邮箱;

以 Fusotao 为例：

```bash
export NEAR_ENV=mainnet
export OCT_TOKEN_ACCOUNT_ID=f5cfbc74057c610c8ef151a439252680ac68c6dc.factory.bridge.near
export ANCHOR_ACCOUNT_ID=fusotao.octopus-registry.near
export NEAR_ACCOUNT=<Validator NEAR account>
# 示例命令
near call $OCT_TOKEN_ACCOUNT_ID ft_transfer_call '{"receiver_id": "'$ANCHOR_ACCOUNT_ID'", "金额": "50000000000000000000000", "msg": "{\"RegisterValidator\":{\"validator_id_in_appchain\":\"0x8ae069276758896df311289f09e272ccba806e090afaed8a1f30905833e9903f\",\"can_be_delegated_to\": false,\"profile\":{"socialMediaHandle\":"@oct_network\",\"email\": "julian@oct.network\"}}'" --accountId $NEAR_ACCOUNT --amount 0.00000000000000000001 --gas 20000000000000
```

注册成功后，请等待大约1～2分钟，验证人的应用链账户中会收到 1 个应用链的代币，用于进行下一步的操作。

### 设置 Session Key

对于手动部署的验证节点，验证人需要通过 PolkadotJS APPS RPC 提交 `setKeys` 交易来设置会话密钥。

将 [PolkadotJS-Apps](https://polkadot.js.org/apps/#/explorer) 链接到应用链网关节点，配置 Apps 的`自定义终端`，应用链的 RPC Endpoit 可以从该应用链在章鱼网络[主网](https://mainnet.oct.network)页面获得。

![RPC Endpoit](../../images/maintain/appchain_rpc.jpg)

确保已连接到应用链后，导航到`开发者`选项，选择“交易”，然后选择在`注册验证人`步骤中填写的应用链帐户，并选择`session > setKeys(keys, proof)`选项，并将`result`字段内容作为`keys`的输入，将`0x0`作为`proof`的输入，最后提交交易。

从[生成会话密钥](./validator-set-session-keys)步骤中得到的`result`字段内容是组合后的Session Key，需要把它们拆分成：babe, grandpa, imOnline, beefy 和 octopus。只有 beefy key 是66个字符，其他的 key 都是64个字符。

示例：

```bash
0xfad5435bc733bee08a07bd61472248b326155b76deab2a48b359dac58a61cf2f886a61d6ebf6bcfa4b9764d65ac37c441033a217bdfdb631e3dd7ba8c490ee69562beb97916e3946f3ff866e6abde0f6e3a7fe836e4b8e92e02462e5d2d34d3a0329a845da6531bc089b0e92baa52fa976dcd496337f25b03924898ffb6bcbe604ae358fd95cbca65348c8e471cb36a2dd04e7d366a815d496e522f03536715727
```

拆分：

```bash
babe: 0xfad5435bc733bee08a07bd61472248b326155b76deab2a48b359dac58a61cf2f
grandpa: 0x886a61d6ebf6bcfa4b9764d65ac37c441033a217bdfdb631e3dd7ba8c490ee69
imOnline: 0x562beb97916e3946f3ff866e6abde0f6e3a7fe836e4b8e92e02462e5d2d34d3a
beefy: 0x0329a845da6531bc089b0e92baa52fa976dcd496337f25b03924898ffb6bcbe604
octopus: 0xae358fd95cbca65348c8e471cb36a2dd04e7d366a815d496e522f03536715727
```

![validator set sessionkey](../../images/maintain/validator_session_setfivekeys.jpg)


#### 检查 Session key

可以通过 PolkadotJS-Apps 检查会话密钥是否设置正确，配置 Apps 的`自定义终端`，应用链的 RPC Endpoit 可以从该应用链在章鱼网络[主网](https://mainnet.oct.network)页面获得。

![RPC Endpoit](../../images/maintain/appchain_rpc.jpg)

连接到应用链后导航到`开发者`选项，选择`链状态`，选择`session > nextKeys(AccountId32)`选项，选择验证节点使用的验证人账户，点击`+`。

![check session keys](../../images/maintain/validator_check_session_keys.jpg)

检查返回值是否和设置的 Session Key 一致。

设置 Session Key 成功后，并且验证节点正常运行，等待一个奖励周期大约 1 天，它将会进入新一轮的验证人集合中。


---


**恭喜！** 如果你已经遵循所有这些步骤，并被选入验证人集合，那么你现在已经在运行一个应用链验证人节点。欢迎加入验证人/委托人专属的 Discord 频道，通过点击每个应用链页面上的按钮。

![discord](../../images/maintain/validator_join_discord.jpg)