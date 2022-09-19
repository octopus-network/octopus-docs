## 应用链注册

### 应用链检查事项

本小节旨在列出应用链团队在应用链注册前需要检查的一些事项，以确保顺利上线。

+ 应用链使用的是barnacle/barnacle-evm模板的最新版本
+ 应用链 Cargo.toml 中使用的Substrate版本应与模版保持一致。
+ Runtime代码保持模版construct_runtime!中已集成Pallets的定义

```rust
construct_runtime!(
	pub enum Runtime where
		Block = Block,
		NodeBlock = opaque::Block,
		UncheckedExtrinsic = UncheckedExtrinsic
	{
		System: frame_system,
		Babe: pallet_babe,
		Timestamp: pallet_timestamp,
		Authorship: pallet_authorship,
		Balances: pallet_balances,
		TransactionPayment: pallet_transaction_payment,
		OctopusAppchain: pallet_octopus_appchain, // must before session
		OctopusLpos: pallet_octopus_lpos,
		OctopusUpwardMessages: pallet_octopus_upward_messages,
		OctopusAssets: pallet_assets::<Instance1>,
		Session: pallet_session,
		Grandpa: pallet_grandpa,
		ImOnline: pallet_im_online,
		Historical: pallet_session_historical::{Pallet},
		Mmr: pallet_mmr,
		Beefy: pallet_beefy,
		MmrLeaf: pallet_beefy_mmr,
		Uniques: pallet_uniques,
		Sudo: pallet_sudo,
		// Include the custom logic from the pallet-template in the runtime.
		TemplateModule: pallet_template,
	}
);
```

+ 应用链出块时间与模版保持一致，设置为6s。

```rust
pub const MILLISECS_PER_BLOCK: Moment = 6000;
pub const EPOCH_DURATION_IN_BLOCKS: BlockNumber = 4 * HOURS;
```
+ 应用链Chain Spec JSON文件，ss58Format为42，如果不需要转移主链（NEAR网络）的稳定币资产（USDN）到应用链，请将`assetIdByTokenId`配置为空。

```
"assetIdByTokenId": []
```

+ 应用链注册时提供的应用链Token Icon链接，确保为SVG格式。

### 先决条件

* NEAR 帐户
* OCT：应用链团队需要支付 1k OCT 作为**审计费**。测试网中，应用链团队可以从 Discord 请求测试网 OCT。

### 应用链注册的操作步骤

1. 用 NEAR 帐户登录到章鱼网络[主网](https://mainnet.oct.network) 或 [测试网](https://testnet.oct.network)。
2. 导航到 **Appchains** 页面，点击 **+ Appchain** 按钮，填写以下内容：
    * **Appchain ID**: 3-20个字符，由小写字母、数字和连字符`-`组成，不能以数字开头，开头和结尾不能使用连字符`-`，也就是要符合正则表达式 `[a-z]([-a-z0-9]*[a-z0-9])?`
    * **Token Info**
        - **Token Name**: 应用链原生通证的名称
        - **Token Symbol**: 应用链原生通证的符号
        - **Icon**: 应用链原生通证的 SVG 格式图标链接
        - **Decimals**: 应用链原生通证的精度
    * **Website**: 应用链官网
    * **Function Spec**: 应用链功能规范文件的链接
    * **Github Address**: 应用链的 Github 仓库
    * **Github Release**: 应用链上线章鱼网络，发布版本的Github URL
    * **Initial Supply**: 应用链初始发行的原生通证数量
    * **Premined**: 初始发行总量中 Premined 到 NEAR 网络的 wrapped 通证数量
    * **Beneficiary**: 应用链团队接收 wrapped 通证的 NEAR 钱包账户
    * **IDO Amount**: 在主网上线前，应用链团队使用 Skyward 进行 IDO 的通证数量
    * **Daily Reward**: 应用链每天区块奖励的通证数量
    * **Email**: 应用链联系人邮箱
    * **Template Type**: 应用链使用的模板类型
    * **Project Description**: 应用链的一句话介绍

   ![注册截图](../../images/guides/register.png)

3. 点击 *Submit* 发送注册交易。
