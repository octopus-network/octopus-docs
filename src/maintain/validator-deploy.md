## Deploy Validator Node

Octopus Network provides a one-click deploy service of validator nodes. Optionally, validator node operators can also [deploy and run it manually](./validator-deploy-manually.md).

> **About the hardware configuration**
>
> * In the test network, our one-click deployment tool uses the AWS EC2 instance **t3.small**, the default configuration is 2 core, 2G, 80G SSD. If you manually set up your validator node, you could refer to this configuration.
### Automatically Deploy

**Note**: Currently, the auto-deployment tool only supports deploying validator nodes to AWS server.

Go to the [Octopus Network Testnet](https://testnet.oct.network/), select `Appchains` Tab ->  the corresponding appchain, follow the steps to deploy:

1. Click `Deploy Validator`, and then in the pop-up window, enter your `AWS Access Key` and click `Enter`;

![deploy validator](../maintain/validator_deploy.jpg)

2. Click `Deploy New`, and then select `Base Image` and click `Deploy`;

![deploy new](../maintain/validator_deploy_new.jpg)

3. After deployment initialization, click `Apply`, and then in the pop-up window, enter your `AWS Access Secret` and click `Apply`;

![deploy apply](../maintain/validator_deploy_apply.jpg)

**Note**: `AWS Access Secret` will only be used for this deployment and wouldn't be stored anywhere.

4. The deployment process lasts about 3-5 minutes, click `Deploy log` to get the log information;

![deploy log](../maintain/validator_deploy_log.jpg)

And then refresh the page to check the status, the successful deployment is as shown in the figure below.

![deploy success](../maintain/validator_deploy_success.jpg)

5. Record the login information of the instance and click the `RSA` to download the ssh key file.