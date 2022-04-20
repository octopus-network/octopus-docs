## Deploy Validator Node

Octopus Network provides a auto-deploy service of validator nodes. Optionally, validator node operators can also [deploy and run it manually](./validator-deploy-manually.md).

> **About the hardware configuration**
>
> * In the test network, our auto-deploy service uses the AWS EC2 instance **t3.small**, the default configuration is 2 core, 2G, 80G SSD. If you manually set up your validator node, you could refer to this configuration.

### Automatically Deploy

> **Note**: Currently, the auto-deploy service only supports deploying validator nodes to AWS server.
>
> If no AWS account, please firstly [create and setup AWS account](https://aws.amazon.com/getting-started/guides/setup-environment/?nc1=h_ls)
>
> To create [AWS Access Key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)

Go to the Octopus Apps ([Mainnet](https://mainnet.oct.network) and [Testnet](https://testnet.oct.network)), select `Appchains` Tab ->  the corresponding appchain, follow the steps to deploy:

1. Go to **My Node** panel, click `Auto Deploy Node`, in the pop-up window, enter your `AWS Access Key` and click `Enter`;

![deploy login](../images/maintain/validator_deploy_login.jpg)

![deploy node](../images/maintain/validator_deploy_node.jpg)

2. After deployment initialization, click `Deploy`, enter your `AWS Access Secret` and finish.


**Note**: `AWS Access Secret` will only be used for this deployment and wouldn't be stored anywhere.

3. The deployment process lasts about 3-5 minutes, and then refresh the page to check the status, the successful deployment is as shown in the figure below. Record the login information of the instance and click the `RSA` to download the ssh key file.

![deploy success](../images/maintain/validator_deploy_success.jpg)

### Check the synchronization of the validator node

For the validator node, it would last about 1~6 hours (it depends on how long the appchain had been running) to complete the synchronization of the appchain data.

1. Firstly, please change the permissions of the downloaded ssh key file 'id_rsa' via executing the following command:

```bash
chmod 400 <Path of the id_rsa file>
# e.g. chmod 400 /home/ubuntu/.ssh/id_rsa
```

2. Open a Terminal, and log in to the AWS instance via SSH;

```bash
ssh -i <Path of the id_rsa file> ubuntu@<IP address of AWS instance>
# e.g. ssh -i /home/ubuntu/.ssh/id_rsa ubuntu@1.2.3.4
```

3. Check the docker logs of validator;

```bash
docker logs seashell
```

To check whether the best block number is the same with the current block number, like the following output:

```bash
2021-09-21 00:12:09 ✨ Imported #54411 (0x3566…3b0e)
2021-09-21 00:12:12 ✨ Imported #54412 (0xdf36…2c87)
2021-09-21 00:12:12 [54412] 🐙 Current block: 54412 (parent hash: 0x9cc7f31a20793f50cf885835de0e3977a1e080431ebc002469aa176046ba094a)
......
2021-09-21 00:13:18 ✨ Imported #54434 (0xba36…ee68)
2021-09-21 00:13:18 [54434] 🐙 Current block: 54434 (parent hash: 0x84aa3d1b6455859f9503d6ecc70b50b183141fe08f5b0695357e00fe1d24d915)
2021-09-21 00:13:18 💤 Idle (6 peers), best: #54434 (0xba36…ee68), finalized #54431 (0xd194…b319), ⬇ 22.0kiB/s ⬆ 21.9kiB/s
```