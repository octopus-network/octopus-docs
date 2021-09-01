# 应用链集成指南

在本指南中，我们将实践如何将应用链接入章鱼测试网络。在本教程中将要做的事情包括：

1. 编译并导出 Chain Spec
2. 发布
3. 注册

## 编译并导出 Chain Spec

基于 Barnacle 开发的应用链已经集成了`pallet-octopus-appchain`，可以作为应用链部署并接入到章鱼网络。

**注**：在编译前，基于 Barnacle 开发的应用链，团队需要全局搜索 **barnacle** 这个关键字，并用自己的应用链节点名称全局替换它。同时请确保应用链`runtime/src/lib.rs`中的`spec_name`的值为`appchain`，`spec_version`是大于`100`的值。如下所示：

```Rust
#[sp_version::runtime_version]
pub const VERSION: RuntimeVersion = RuntimeVersion {
	spec_name: create_runtime_str!("appchain"),
	...
	spec_version: 101,
	...
};
```

编译应用链并生成 Chain Spec 文件，我们以 Barnacle 为例，命令如下：

```
git clone --depth 1 https://github.com/octopus-network/barnacle.git
cd barnacle
# this will take a while!
cargo build --release

./target/release/appchain-barnacle build-spec --disable-default-bootnode --chain dev > barnacleSpec.json
# 生成 sha256 hash
sha256sum barnacleSpec.json > SHA256SUMS
```

## 发布

在注册应用链之前，应用链团队需要在项目的 Github 仓库发布一个应用链版本，其中包括应用链人类可读的 ChainSpec 文件。 

![发布截图](../../guides/release.png)

## 注册

应用链注册需要用 NEAR 测试网帐户登录[章鱼测试网络Web端](https://testnet.oct.network/)可以完成。章鱼网络是在 NEAR 区块链网络上运行的应用链网络，因此注册应用链需要登录 NEAR 帐户，同时需要锁定一定的 OCT。

备注：可以打开 NEAR [测试网钱包链接](https://wallet.testnet.near.org/) 按照说明创建 NEAR 测试网帐户，同时通过的[OCT水龙头](https://faucet.testnet.oct.network/)获取接入测试网所需的OCT。

应用链注册的操作步骤如下：

1. 用 NEAR 帐户登录到章鱼测试网络。
2. 导航到 **Appchains** 页面，点击 **+ Appchain** 按钮，填写以下内容：
    - Appchain name，3-20个字符，由小写字母、数字和连字符`-`组成，不能以数字开头，开头和结尾不能使用连字符`-`，也就是要符合正则表达式 `[a-z]([-a-z0-9]*[a-z0-9])?` 
    - Website，应用链官网
    - Github，应用链的 Github 仓库
    - Github release，应用链发布版本的 Github URL
    - Commit id，应用链发布版本的 Git 提交哈希
    - Email，应用链联系人邮箱
    - Bond token，绑定的 OCT，应用链成功激活后将会被返还

   ![注册截图](../../guides/register.png)

3. 点击 *Register* 发送注册交易。
