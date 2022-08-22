## 搭建验证节点

章鱼网络提供了自动部署验证节点的服务。这是为了简化部署过程，验证节点运营商也可以[手动搭建验证节点](./validator-deploy-manually.md)。

### 硬件配置

自动部署工具支持AWS，未来将支持 GCP 等其他的云服务。如果你手动搭建验证节点，可以参考以下配置：
>
> 如果使用AWS，默认配置为EC2实例**t3.small**，CPU 2核，内存 2G，SSD存储 80G。
>
> 如果使用GCP，默认配置为实例**e2-small**，CPU 2核，内存 2G，SSD存储 128G。

### 使用AWS自动搭建验证节点

> 如果没有 AWS 账户，请先[创建和设置 AWS 账户](https://aws.amazon.com/cn/getting-started/guides/setup-environment/?nc1=h_ls)
>
> [创建 AWS Access Key](https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/id_credentials_access-keys.html)


验证人访问章鱼网络[主网](https://mainnet.oct.network) 或 [测试网](https://testnet.oct.network)，在应用链列表中，选择要成为验证人的应用链，点击进入应用链页面，进行以下操作：

1. 在应用链页面 **My Node** 区域，输入你的`AWS Access Key`，点击`Deploy A Node`；选择实例部署的区域，点击`Deploy`。

![deploy login](../../images/maintain/validator_deploy_login.jpg)

![deploy node](../../images/maintain/validator_deploy_node.jpg)

2. 完成初始化后，点击`Apply`，输入你的`AWS Access Secret`，并确认；

![deploy apply](../../images/maintain/gcp-step4.png)

**注**：AWS Secret Key 仅会被用于此次部署，并且不会在任何地方被存储，帐户的风险非常低。

3. 部署过程大约持续5分钟左右，然后刷新页面查看状态，部署成功如下图所示。记录 AWS 实例的登录信息，并点击`RSA`下载用于 SSH 登录 AWS 实例的密钥文件。

![deploy success](../../images/maintain/validator_deploy_success.jpg)

### 更改 AWS 实例类型

随着应用链需求的变化，您可以通过更改实例类型来调整 AWS 实例的大小。您需要在 AWS 控制台中找到自动部署的 EC2 实例。

首先停止实例。

![aws stop instance](../../images/maintain/aws_stop_instance.jpg)

然后更改实例。

![aws change instance](../../images/maintain/aws_change_instance.jpg)

有关详细信息，您可以参考 AWS EC2 [更改实例类型](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ec2-instance-resize.html)。

### 使用GCP自动搭建验证节点

> 请先确保能登陆[GCP](https://console.cloud.google.com/)，如未注册请先注册。

1. 在“我的节点”面板中登录您的 Google 帐户。
![gcp-step1](../../images/maintain/gcp-step1.png)

2. 登陆后，点击`Deploy A Node`
![gcp-step2](../../images/maintain/gcp-step2.png)

3. 选择[`Projects`](https://cloud.google.com/storage/docs/projects)和[`Deploy Region`](https://cloud.google.com/docs/geography-and-regions)，然后点击`Deploy`。
![gcp-step3](../../images/maintain/gcp-step3.png)

4. 此时可以看到节点状态为`Init`，同时生成了`Node ID`，点击`Apply`。
![gcp-step4](../../images/maintain/gcp-step4.png)

5. 此时状态变为Applying，代表节点在GCP上正在启动。点击Refresh可以查询状态。
![gcp-step5](../../images/maintain/gcp-step5.png)

6. 当看到以下页面时，状态变为Running，说明GCP的实例已经启动运行。
![gcp-step6](../../images/maintain/gcp-step6.png)

最后，如果您想删除节点，点击`Destroy`，然后点击`···`选择`Clear Access Key`。


### 检查节点是否完成同步

1. 首先修改下载的密钥文件 'id_rsa' 的权限，通过执行以下命令：

```bash
chmod 400 <id_rsa文件路径>
# 示例：chmod 400 ~/.ssh/id_rsa
```

2. 打开终端，用 SSH 登录实例

```bash
ssh -i <id_rsa文件路径> ubuntu@<实例的IP地址>
# 示例：ssh -i /home/ubuntu/.ssh/id_rsa ubuntu@1.2.3.4
```

3. 输入以下命令检查验证节点的 Docker 日志

```bash
docker logs seashell
```

是否有类似的输出如下：

```bash
2021-09-21 00:12:09 ✨ Imported #54411 (0x3566…3b0e)
2021-09-21 00:12:12 ✨ Imported #54412 (0xdf36…2c87)
2021-09-21 00:12:12 [54412] 🐙 Current block: 54412 (parent hash: 0x9cc7f31a20793f50cf885835de0e3977a1e080431ebc002469aa176046ba094a)
......
2021-09-21 00:13:18 ✨ Imported #54434 (0xba36…ee68)
2021-09-21 00:13:18 [54434] 🐙 Current block: 54434 (parent hash: 0x84aa3d1b6455859f9503d6ecc70b50b183141fe08f5b0695357e00fe1d24d915)
2021-09-21 00:13:18 💤 Idle (6 peers), best: #54434 (0xba36…ee68), finalized #54431 (0xd194…b319), ⬇ 22.0kiB/s ⬆ 21.9kiB/s
```