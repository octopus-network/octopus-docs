## 应用链指南

在本指南中，我们将学习和实践如何将应用链接入章鱼网络。

* 注册应用链
* 集成应用链

### 注册应用链

**需要做什么**

* 创建 NEAR 帐户
* 申请 OCT
* 注册应用链

#### 创建 Near 账户

章鱼网络是在 NEAR 区块链网络上运行的一个应用链网络。因此，应用链团队首先需要拥有一个 NEAR 网络上帐户，这样才能完成应用链接入章鱼网络的操作。

在 NEAR 上创建帐户最简单的方法是使用 NEAR 钱包。打开 NEAR [测试网钱包链接](https://wallet.testnet.near.org)，按照说明创建帐户。

更多详细信息参考[创建NEAR帐户](https://docs.near.org/docs/develop/basics/create-account)。

#### 申请 OCT

加入章鱼网络的[Discord](https://discord.gg/6GTJBkZA9Q)，在 **#testnet** 频道中，可以申请 OCT 用于测试，团队成员会为你提供帮助。

#### 注册应用链

章鱼网络的架构中，有一个部署在 NEAR 区块链网络中的中继合约。应用链团队可以用 NEAR 帐户向中继合约发送一笔注册交易，该交易包含了应用链的信息，交易成功后会返回应用链的**appchain_id**。操作步骤如下：

* 首先用 NEAR 帐户登录到章鱼网络的[测试网](https://testnet.oct.network/)。
* 其次点击 **Register** 按钮，输入 *Appchain Name, Bond Token*；
* 然后点击 *Register* 发送注册交易，交易成功完成后，页面中的交易*ID* 则作为应用链的**appchain_id**。

### 集成应用链

**需要做什么**

* 更新应用链代码
* 生成并更新**Chain Spec**文件
* 提供**Chain Spec**文件的链接和哈希

#### 更新应用链代码

集成应用链的第一步是引入*pallet-octopus-appchain*，并更新基于Substrate的应用链代码。

1. 在 Runtime 的`Cargo.toml`文件中，添加以下依赖项：

```TOML
[dependencies]
pallet-session = { default-features = false, version = '3.0.0' }
pallet-octopus-appchain = { default-features = false, git = 'https://github.com/octopus-network/pallet-octopus-appchain.git' }
```

更新 Runtime 的 “std” 功能，包括以下 pallet：

```TOML
std = [
    # --snip--
    'pallet-session/std',
    'pallet-octopus-appchain/std',
]
```

2. 更新 Runtime 的`lib.rs`文件，参考如下代码实现其 trait：


```rust
parameter_types! {
	pub const AppchainId: pallet_octopus_appchain::ChainId = 3;
	pub const Motherchain: pallet_octopus_appchain::MotherchainType = pallet_octopus_appchain::MotherchainType::NEAR;
	pub const GracePeriod: u32 = 5;
	pub const UnsignedPriority: u64 = 1 << 20;
}

impl pallet_octopus_appchain::Config for Runtime {
	type Event = Event;
	type AuthorityId = pallet_octopus_appchain::crypto::OctopusAuthId;
	type Call = Call;
	type AppchainId = AppchainId;
	type Motherchain = Motherchain;
	const RELAY_CONTRACT_NAME: &'static [u8] = b"dev-1618284355026-5339538";
	type GracePeriod = GracePeriod;
	type UnsignedPriority = UnsignedPriority;
}
```

同时，更改常量**AppchainId**的值，Appchain ID 是在 Octopus [testnet](https://testnet.oct.network/) 中注册 Appchain 时生成的。

```Rust
pub const AppchainId: pallet_octopus_appchain::ChainId = 3;
```

更改常量**RELAY_CONTRACT_NAME**的值，从 Octopus [testnet](https://testnet.oct.network/)查看获得，例如：oct-relay.testnet

```Rust
const RELAY_CONTRACT_NAME: &'static [u8] = b"oct-relay.testnet";
```

3. 将以下代码添加到的宏`construct_runtime!`中：

```rust
OctopusAppchain: pallet_octopus_appchain::{Module, Call, Storage, Config<T>, Event<T>, ValidateUnsigned},
```

可以查看[Barnacle](https://github.com/octopus-network/barnacle)的最后一次提交以进行所有更改。

#### 生成并更新Chain Spec文件

1. 首先需要生成 chainspec 文件，示例命令如下：

   ```bash
   ./target/debug/node-template build-spec --disable-default-bootnode --chain local > chain-spec.json
   ```

    更多细节可以参考 Substrate 开发文档 [Create a Custom Chain Spec](https://substrate.dev/docs/en/tutorials/start-a-private-network/customspec)

2. 其次，可以从Octopus [testnet](https://testnet.oct.network/) 下载 chainspec 代码段。

3. 然后基于下载的 chainspec 代码片段，更新如下字段生成应用链的 chainspec 文件。

   * `palletBalance`
   * `palletSession`
   * `palletOctopusAppchain`

   生成 raw chainspec，示例命令如下：

   ```bash
   ./target/debug/node-template build-spec --chain=chain-spec.json --raw --disable-default-bootnode > chain-spec-raw.json
   ```

4. 最后生成 chainspec 文件的哈希，示例命令如下：

   ```bash
   # unix
   sha256sum chain-spec-raw.json
   ```

#### 提供Chain Spec文件的链接和哈希

启动网络需要应用链团队提供应用链的 chainspec 文件。可以将其上传到网上，比如：项目的 Github，然后登录到 Octopus [testnet](https://testnet.oct.network/) 填写文件 URL 和哈希。

最后启动网络，通过章鱼网络的[Discord](https://discord.gg/6GTJBkZA9Q) 的 #testnet 频道与章鱼团队联系。

🎉🎉🎉恭喜！我们很高兴看到应用链团队可以使用这项令人兴奋的技术共同构建 Web3.0！如果还有其它疑问，请随时在 Discord 上与我们聊天！我们将回复您的所有信息🤟