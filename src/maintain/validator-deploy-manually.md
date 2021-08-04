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

你可以从应用链的源代码仓库中，通过编译源码，创建应用链的节点二进制文件。当然你也可以直接从应用链源代码仓库的 release 中获取编译好的二进制文件。

编译源码生成节点文件，执行以下命令：

```bash
git clone https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build --release
```

这一步骤将需要一段时间，一般为10-40分钟，速度取决于你的硬件。

> 注意：如果你遇到编译错误，可能需要将 Rust 切换到一个较新的 nightly 版本。

#### 2. 下载应用链的 Chain Spec 文件

章鱼网络的应用链页面有 Chain Spec Raw文件的URL。

通过执行以下命令：

```bash
# cd barnacle 
curl -o chainSpec.json https://storage.googleapis.com/dl-testnet/barnacle-ng/barnacleSpecRaw.json
```

#### 3. 获取应用链的启动节点信息

章鱼网络的应用链页面有Boot Nodes启动节点信息，如下所示是应用链的 Boot Nodes 数组：

```bash
[   "/ip4/34.80.79.216/tcp/30333/p2p/12D3KooWAxYKgdmTczLioD1jkzMyaDuV2Q5VHBsJxPr5zEmHr8nY",   "/ip4/34.81.106.94/tcp/30333/p2p/12D3KooWSmLVShww4w9PVW17cCAS5C1JnXBU4NbY7FcGGjMyUGiq",   "/ip4/35.187.144.17/tcp/30333/p2p/12D3KooWT2umkS7F8GzUTLrfUzVBJPKn6YwCcuv6LBFQ27UPoo2Y",   "/ip4/34.80.21.68/tcp/30333/p2p/12D3KooWHNf9JxUZKHoF7rrsmorv86gonXSb2ZU44CbMsnBNFSAJ", ]
```

#### 4. 启动验证节点

启动验证节点。指定 Chain Spec文件，以及使用 Boot Nodes 数组中的元素指定 bootnodes 对应的值，执行以下命令：

```bash

./target/release/appchain-barnacle \
--base-path ./data \
--chain ./chainSpec.json \
--port 30333 \
--rpc-port 9933 \
--rpc-cors all \
--rpc-external \
--ws-port 9944 \
--ws-external \
--rpc-methods Unsafe \
--validator \
--no-telemetry \
--prometheus-port 9615 \
--prometheus-external \
--wasm-execution Compiled \
--enable-offchain-indexing true \
--bootnodes /ip4/34.80.79.216/tcp/30333/p2p/12D3KooWAxYKgdmTczLioD1jkzMyaDuV2Q5VHBsJxPr5zEmHr8nY \
--bootnodes /ip4/34.81.106.94/tcp/30333/p2p/12D3KooWSmLVShww4w9PVW17cCAS5C1JnXBU4NbY7FcGGjMyUGiq \
--bootnodes /ip4/35.187.144.17/tcp/30333/p2p/12D3KooWT2umkS7F8GzUTLrfUzVBJPKn6YwCcuv6LBFQ27UPoo2Y \
--bootnodes /ip4/34.80.21.68/tcp/30333/p2p/12D3KooWHNf9JxUZKHoF7rrsmorv86gonXSb2ZU44CbMsnBNFSAJ
```
