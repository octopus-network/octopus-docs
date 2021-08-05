## 生成验证人帐户

每个验证人都必须有一个Near账户和一个Substrate账户。获取Near账户的方法，请参考[应用链集成指南](../guides/appchain-integrate.md)。
本节介绍生成Substrate账户的方法。


每个验证人都应生成自己的Substrate账户以管理自己在应用链的资产。本节提供了两种用于生成帐户的方式，只需选择其中一种。

* Polkadot{.js} 浏览器插件 **​​推荐给大多数用户**
* Subkey **适用于进阶用户更安全**

无论选择哪种方式，请务必记下本节中的所有输出，以备日后使用。

### 选项1：Polkadot{.js} 浏览器插件

Polkadot{.js} 浏览器插件是一个简单的浏览器扩展工具，用户可用来管理其的帐户，以及使用帐户进行交易签名。

使用[Polkadot{.js}浏览器插件](https://wiki.polkadot.network/docs/en/learn-account-generation#polkadotjs-browser-plugin)生成应用链的帐户。

### 选项2：Subkey

Subkey 是个 Substrate 命令行程序，用于生成或还原 Substrate 密钥。对于那些熟悉命令行和 Rust 代码编译的高级技术用户，建议使用它。对于一般用户，则不建议使用。

有关 Subkey 的详细使用说明，请参见[README文档](https://github.com/paritytech/substrate/tree/master/bin/utils/subkey)。
