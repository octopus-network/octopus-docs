## 生成应用链的帐户

每个想要加入应用链验证人集合的验证人都应生成自己的应用链帐户。本节提供了用于几种生成帐户的方式，每个参与者只需选择其中一种。无论选择哪种方式，请务必记下本节中的所有输出，以备日后使用。

应用链是基于 Substrate 开发的，因此生成应用链帐户的方式与任何基于 Sustrate 的链（例如Polkadot）相同。

* Polkadot{.js} 浏览器插件 **​​推荐给大多数用户**
* Subkey **适用于进阶用户更安全**

### 选项1：Polkadot{.js} 浏览器插件

Polkadot{.js} 浏览器插件是一个简单的浏览器扩展工具，用户可用来管理其的帐户，并允许用户使用这些帐户进行交易签名。

使用[Polkadot{.js}浏览器插件](https://wiki.polkadot.network/docs/en/learn-account-generation#polkadotjs-browser-plugin)生成应用链的帐户。

### 选项2：Subkey

Subkey 是一个 Substrate 命令行实用程序，用于生成或还原 Substrate 密钥。对于那些熟悉命令行和 Rust 代码编译的高级技术用户，建议使用它。对于一般用户，则不建议使用。

有关 Subkey 的详细构建和使用说明，请参见[here](https://github.com/paritytech/substrate/tree/master/bin/utils/subkey)。