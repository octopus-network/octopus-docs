## Deploy Validator Node

Octopus Network provides a one-click deploy service of validator nodes. Optionally, validator node operators can also [deploy and run it manually](./validator-deploy-manually.md).

> **About the hardware configuration**
>
> * In the test network, our one-click deployment tool uses the AWS EC2 instance **t3.small**, the default configuration is 2 core, 2G, 80G SSD. If you manually set up your validator node, you could refer to this configuration.

### Automatically Deploy

**Note**: Currently, the auto-deployment tool only supports deploying validator nodes to AWS server.

Go to the Octopus Apps ([Mainnet](https://mainnet.oct.network) and [Testnet](https://testnet.oct.network)), select `Appchains` Tab ->  the corresponding appchain, follow the steps to deploy:

1. Click `Deploy Tool`, and then in the pop-up window, enter your `AWS Access Key` and click `Enter`;

![deploy validator](../maintain/validator_deploy.jpg)

2. Click `Deploy New`, and then select `Base Image` and click `Deploy`;

![deploy new](../maintain/validator_deploy_new.jpg)

3. After deployment initialization, click `Apply`, and then in the pop-up window, enter your `AWS Access Secret` and click `Apply`;

![deploy apply](../maintain/validator_deploy_apply.jpg)

**Note**: `AWS Access Secret` will only be used for this deployment and wouldn't be stored anywhere.

4. The deployment process lasts about 3-5 minutes, and then refresh the page to check the status, the successful deployment is as shown in the figure below.

![deploy success](../maintain/validator_deploy_success.jpg)

5. Record the login information of the instance and click the `RSA` to download the ssh key file.

The validator node must complete the synchronization of the chain data. Log in to the AWS instance and to check the docker logs of validator whether there is an similar output as the following:

```bash
2021-09-21 00:12:09 ✨ Imported #54411 (0x3566…3b0e)
2021-09-21 00:12:12 ✨ Imported #54412 (0xdf36…2c87)
2021-09-21 00:12:12 [54412] 🐙 Current block: 54412 (parent hash: 0x9cc7f31a20793f50cf885835de0e3977a1e080431ebc002469aa176046ba094a)
......
2021-09-21 00:13:18 ✨ Imported #54434 (0xba36…ee68)
2021-09-21 00:13:18 [54434] 🐙 Current block: 54434 (parent hash: 0x84aa3d1b6455859f9503d6ecc70b50b183141fe08f5b0695357e00fe1d24d915)
2021-09-21 00:13:18 💤 Idle (6 peers), best: #54434 (0xba36…ee68), finalized #54431 (0xd194…b319), ⬇ 22.0kiB/s ⬆ 21.9kiB/s
```

**Note**: Login to the AWS server with the downloaded ssh key file, if you encounter an error `Permissions 0644 for 'id_rsa' are too open`, please execute the following command:

```bash
chmod 400 ~/.ssh/id_rsa
```