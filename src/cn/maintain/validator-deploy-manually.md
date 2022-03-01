## 手动搭建验证节点

本指南以 [Barnacle 应用链](https://github.com/octopus-network/barnacle)为例，介绍在章鱼网络中，如何手动搭建验证节点。

验证节点一般是在 Linux 云服务器上运行，可以选择自己喜欢的 VPS 供应商以及操作系统。本指南中我们将使用 **Ubuntu 18.04** ，在其它 Unix 操作系统上类似。

### 先决条件

#### 1.安装 Rust

如果服务器的系统没有安装 Rust，则首先要进行安装。

下面这个命令可以下载安装最新版本的 Rust。

```bash
# Install
curl https://sh.rustup.rs -sSf | sh
# Configure
source ~/.cargo/env
```

如果已经安装了 Rust，则配置 Rust 工具链默认为最新的稳定版本，添加 nightly 和 nightly wasm 编译目标。

```bash
rustup default stable
rustup update
rustup update nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
```

#### 2. 安装依赖项

首先安装一些必要的依赖项，以便编译和运行应用链的节点，运行下面的命令。

```bash
sudo apt update
# May prompt for location information
sudo apt install make clang pkg-config libssl-dev build-essential
```

对于其它操作系统，安装依赖可以参考[ Substrate 开发者中心的文档](https://substrate.dev/docs/en/knowledgebase/getting-started/#1-build-dependencies)。

### 搭建验证节点

#### 1. 获取应用链的节点二进制文件

你可以从应用链的源代码仓库中，通过编译源码，创建应用链的节点二进制文件。编译源码生成节点文件，参考命令如下：

```bash
# Barnacle 应用链
git clone https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build --release
```

这一步骤将需要一段时间，一般为10-40分钟，速度取决于你的硬件。

> 备注：如果你遇到编译错误，可能需要将 Rust 切换到一个较新的 nightly 版本。

#### 2. 启动验证节点

用 `octopus-mainnet` 设置选项`--chain`，并以验证人模式启动节点，例如 Barnacle 应用链的命令如下：

```bash
./target/release/appchain-barnacle \
--base-path ./data \
--chain octopus-mainnet \
--validator \
--wasm-execution Compiled \
--enable-offchain-indexing true
```

> 备注：[测试网](https://testnet.oct.network/) 设置选项 `--chain` 值为 `octopus-testnet`

检查节点是否已完成链数据的同步，查看节点的日志，是否有类似的输出如下：

```bash
2021-09-21 00:12:09 ✨ Imported #54411 (0x3566…3b0e)
2021-09-21 00:12:12 ✨ Imported #54412 (0xdf36…2c87)
2021-09-21 00:12:12 [54412] 🐙 Current block: 54412 (parent hash: 0x9cc7f31a20793f50cf885835de0e3977a1e080431ebc002469aa176046ba094a)
......
2021-09-21 00:13:18 ✨ Imported #54434 (0xba36…ee68)
2021-09-21 00:13:18 [54434] 🐙 Current block: 54434 (parent hash: 0x84aa3d1b6455859f9503d6ecc70b50b183141fe08f5b0695357e00fe1d24d915)
2021-09-21 00:13:18 💤 Idle (6 peers), best: #54434 (0xba36…ee68), finalized #54431 (0xd194…b319), ⬇ 22.0kiB/s ⬆ 21.9kiB/s
```

上一步：[生成验证人帐户](./maintain/validator-generate-keys.html)

下一步：[设置会话密钥](./maintain/validator-set-session-keys.html)
