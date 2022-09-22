## 部署验证节点

为了简化验证节点部署，章鱼网络提供了自动部署验证节点的服务。目前自动部署支持：

* [AWS](./validator-deploy-aws.md)
* [Digital Ocean](./validator-deploy-do.md)

当然，验证人也可以选择[手动部署验证节点](./validator-deploy-manually.md)。手动部署验证节点，可以参考以下的硬件配置。

### 硬件配置

自动部署方式启动的各应用链验证节点的配置和大致成本。

**AWS**

| 应用链 | EC2 实例类型  | 存储 | 数据传输 | 每月总费用 |
|------|------|------|------|------|
| debionetwork | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| myriad | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| deip | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| atocha | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| fusotao | c5.large<br/>4 GB Memory / 2 vCPUs | 250 GB | 4500 GB | $509 |
| discovol | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |

**Digital Ocean**

| 应用链 | Droplet  | 存储 | 数据传输 | 每月总费用 |
|------|------|------|------|------|
| debionetwork | 2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |
| myriad | 2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |
| deip | 2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |
| atocha | 2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |
| fusotao | 8 GB Memory / 4 vCPUs  | 250 GB | 5 TB | $81 |
| discovol | 2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |
