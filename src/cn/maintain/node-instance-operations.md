## 节点实例操作

对于通过自动部署服务部署的验证节点实例，如果需要更多的存储空间等，验证人可以参考以下文档进行操作。

| 操作 | AWS | Digital Ocean | GCP |
|------|------|------|------|
| 升级存储 | [Amazon EBS 弹性卷](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ebs-modify-volume.html)  | [How to Increase the Size of DigitalOcean Block Storage Volumes](https://docs.digitalocean.com/products/volumes/how-to/increase-size/) | [增加永久性磁盘的大小](https://cloud.google.com/compute/docs/disks/resize-persistent-disk?hl=zh-cn) |
| 更改实例 | [更改实例类型](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ec2-instance-resize.html)  | [How to Resize Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/) | [修改虚拟机实例的机器类型](https://cloud.google.com/compute/docs/instances/changing-machine-type-of-stopped-instance?hl=zh-cn) |
| 重启实例  | [重启实例](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ec2-instance-reboot.html)  | [Connect to Droplets with the Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/), 执行命令: sudo reboot | [停止和启动虚拟机](https://cloud.google.com/compute/docs/instances/stop-start-instance?hl=zh-cn#starting_a_stopped_instance) |

> **备注**
> 对于 Digital Ocean，验证人可以从 DigitalOcean Support 发送的电子邮件中获取 Droplet 的默认密码。