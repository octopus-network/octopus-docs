## Automatic deployment with Digital Ocean 

> If no Digital Ocean account, please firstly [create and setup Digital Ocean account](https://docs.digitalocean.com/products/getting-started/)
>
> To create [Digital Ocean Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/)
>
> **Note**: 
> 
> Please remember the **Token Name**, and then timely copy and save the personal **Access Token**. If the Token expires, please create a new Access Token with the same Token Name. If using a new Digital Ocean account, please create the Access Token with a new Token Name.

Log in to the Octopus Network [mainnet](https://mainnet.oct.network) with the NEAR account created in [Generate Validator Account](./validator-generate-keys.md).

![validator login](../images/maintain/validator_login.jpg)

Click the `Appchains` and select the appchain which would like to be a validator, click it to open the appchain page, then perform the following operations:

1. In the **My Node** area of ​​the appchain page, select `DO` and input your `Token Name` in the `Digital Ocean Token Name` input box, then click `Next`;

![do token name](../images/maintain/validator_do_tokenname.jpg)

2. The deployed Digital Ocean Droplet configuration information and approximate cost will be displayed in the **My Node** region. After confirmation, please input your `Access Token` in `Token` input box and select the deployment area in the `Deploy region` drop-down box, then click `Confirm`;

![do token](../images/maintain/validator_do_token.jpg)

**Note**: The Token will only be used for this deployment and will not be stored anywhere.

3. In the **My Node** area, the node status is `Applying` which means the automatic deployment service is deploying the node.

![validator applying](../images/maintain/validator_do_applying.jpg)

Please wait for about 3~5 minutes, the node status will change to `Syncing` which means the validator node is synchronizing the block data of the appchain. The earlier the appchain is online, the longer the node synchronization time will be. please wait patiently.

![validator syncing](../images/maintain/validator_do_syncing.jpg)

To check the synchronization of nodes, please refer to [Monitor Node](./monitor-node.md).

After the node synchronization, the status in the **My Node** area will change to `Running`.

![validator running](../images/maintain/validator_do_running.jpg)

For the automatically deployed validator node, in the **My Node** area, the validator can click the icon on the right of the `Instance Status` field to check the instance status information (such as CPU, hard disk, memory) of the running validator node instance.

![validator instance status](../images/maintain/validator_instance_status.jpg)

At the `Running` status, the validator can proceed to the next step [register validator](./validator-register.md).