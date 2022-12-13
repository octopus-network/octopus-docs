## 部署验证节点

为了简化验证节点部署，章鱼网络提供了自动部署验证节点的服务。目前自动部署支持：

* [AWS](./validator-deploy-aws.md)
* [Digital Ocean](./validator-deploy-do.md)
* [GCP](./validator-deploy-gcp.md)

验证人也可以选择[手动部署验证节点](./validator-deploy-manually.md)。手动部署验证节点，可以参考自动部署使用的硬件配置。

### 硬件配置

自动部署方式启动的各应用链验证节点的配置和大致成本。

**AWS**

| 应用链 | EC2 实例类型  | 存储 | 数据传输 | 每月预估费用 |
|------|------|------|------|------|
| debionetwork | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| myriad | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| deip | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| atocha | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| fusotao | c5.large<br/>4 GB Memory / 2 vCPUs | 250 GB | 4500 GB | $509 |
| discovol | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |

**Digital Ocean**

| 应用链 | Droplet  | 存储 | 数据传输 | 每月预估费用 |
|------|------|------|------|------|
| debionetwork | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |
| myriad | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |
| deip | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |
| atocha | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |
| fusotao | 8 GB Memory / 4 vCPUs  | 250 GB | 7 TB | $93 |
| discovol | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |

**GCP**

| 应用链 | 实例类型  | 存储 | 数据传输 | 每月预估费用 |
|------|------|------|------|------|
| debionetwork | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |
| myriad | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |
| deip | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |
| atocha | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |
| fusotao | e2-standard-2<br/>8 GB Memory / 2 vCPUs  | 250 GB | 4500 GB | $588 |
| discovol | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |

### 更换 VPS 服务商

如果已部署节点的验证人要更换 VPS 服务商，请遵循以下步骤：

1. 保持旧的验证节点继续运行；
2. 部署新的验证节点；
自动部署的验证节点，如果需要可以先 `Clear Node Info`。
![validator clear node info](../../images/maintain/validator_clear_nodeinfo.jpg)
3. 链数据同步完成后，给新的验证节点[设置 Session Key](./validator-register.md#设置-session-key)；
4. 下一个奖励周期后，[停掉](./validator-register.md#停止验证节点)旧的验证节点。
