## 应用链发布

基于 Barnacle 的应用链已集成了`pallet-octopus-appchain`，应用链开发完成后即可发布，随后团队就可以准备将其注册到网络中。

1. 编译并导出 Chain Spec
2. 发布

### 编译并导出 Chain Spec

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

### 发布

在注册应用链之前，应用链团队需要在项目的 Github 仓库发布一个应用链版本，其中包括应用链人类可读的 ChainSpec 文件。 

![发布截图](../../guides/release.png)
