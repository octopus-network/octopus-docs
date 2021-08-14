## Deploy Validator Node

Octopus Network provides a one-click deploy service of validator nodes. Optionally, validator node operators can also [deploy and run it manually](./validator-deploy-manually.md).

### Automatically Deploy

**Note**: Currently, the auto-deployment tool only supports deploying validator nodes to AWS server.

Go to the [Octopus Network Testnet](https://testnet.oct.network/), select `Appchains` Tab ->  the corresponding appchain, follow the 2 steps to deploy:

1. Click `Deploy Validator`, and then in the pop-up window, enter your `AWS Access Key` and click `Enter`;

![deploy validator](../maintain/validator_deploy.jpg)

3. Click `Deploy New`, and then select `Base Image` and click `Deploy`;

![deploy new](../maintain/validator_deploy_new.jpg)

4. After deployment initialization, click `Apply`, and then in the pop-up window, enter your `AWS Access Secret` and click `Apply`;

![deploy apply](../maintain/validator_deploy_apply.jpg)

**Note**: `AWS Access Secret` will only be used for this deployment and wouldn't be stored anywhere.

5. The deployment process lasts about 5-10 minutes, refresh the page, and then click `Deploy log` to check the status.

![deploy log](../maintain/validator_deploy_log.jpg)

![deploy success](../maintain/validator_deploy_success.jpg)

The successful deployment is shown in the figure above.