## Deploy Validator Node

In order to simplify the deployment of the validator node, the Octopus Network team provides an automatic deployment service for the validator node. Currently, it supports:

* [AWS](./validator-deploy-aws.md)
* [Digital Ocean](./validator-deploy-do.md)
* [GCP](./validator-deploy-gcp.md)

Also, the validator can choose to [manually deploy the validator node](./validator-deploy-manually.md).

### Hardware configuration

The configuration and approximate cost of each Appchain validator node which is deployed via the automatic deployment service.

**AWS**

| Appchain | EC2 Instance Type  | Storage | Data Transfer | Estimated monthly cost |
|------|------|------|------|------|
| debionetwork | c5.large<br/>4 GB Memory / 2 vCPUs | 120 GB | 100 GB | $93 |
| myriad | c5.large<br/>4 GB Memory / 2 vCPUs | 120 GB | 100 GB | $93 |
| deip | c5.large<br/>4 GB Memory / 2 vCPUs | 120 GB | 100 GB | $93 |
| atocha | c5.large<br/>4 GB Memory / 2 vCPUs | 120 GB | 100 GB | $93 |
| fusotao | c5.large<br/>4 GB Memory / 2 vCPUs | 250 GB | 4500 GB | $509 |
| discovol | c5.large<br/>4 GB Memory / 2 vCPUs | 120 GB | 100 GB | $93 |


**Digital Ocean**

| Appchain | Droplet  | Storage | Data Transfer | Estimated monthly cost |
|------|------|------|------|------|
| debionetwork | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |
| myriad | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |
| deip | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |
| atocha | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |
| fusotao | 8 GB Memory / 4 vCPUs  | 250 GB | 7 TB | $93 |
| discovol | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |

**GCP**

| Appchain | VM instance  | Storage | Data Transfer | Estimated monthly cost |
|------|------|------|------|------|
| debionetwork | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |
| myriad | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |
| deip | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |
| atocha | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |
| fusotao | e2-standard-2<br/>8 GB Memory / 2 vCPUs  | 250 GB | 4500 GB | $588 |
| discovol | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |

### Change VPS provider

For the validator who need to change the VPS provider of the deployed node, please follow these steps:

1. Keep the old validator node running;
2. Deploy a new validator node. For the node which was deployed via the automatic deployment service, please `Clear Node Info` if needed.
![validator clear node info](../images/maintain/validator_clear_nodeinfo.jpg)
3. When the new node done the synchronization, please [set the Session Key](./validator-register.md#set-session-key) for the new validator node;
4. The validator could [stop](./validator-register.md#stop-the-validator-node) the old validator node until the next reward cycle.