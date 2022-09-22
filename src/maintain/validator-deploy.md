## Deploy Validator Node

In order to simplify the deployment of the validator node, the Octopus Network team provides an automatic deployment service for the validator node. Currently, it supports:

* [AWS](./validator-deploy-aws.md)
* [Digital Ocean](./validator-deploy-do.md)

For the validator who need to change the VPS provider of the  deployed node, please follow these steps:

1. Keep the old validator node running;
2. Deploy a new validator node, after the synchronization, [set the Session Key](./validator-register.md#set-session-key);
3. Stop the old validator node.

Also, the validator can choose to [manually deploy the validator node](./validator-deploy-manually.md).

### Hardware configuration

The configuration and approximate cost of each Appchain validator node started by automatic deployment service.

**AWS**

| Appchain | EC2 Instance Type  | Storage | Data Transfer | Total cost per month |
|------|------|------|------|------|
| debionetwork | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| myriad | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| deip | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| atocha | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| fusotao | c5.large<br/>4 GB Memory / 2 vCPUs | 250 GB | 4500 GB | $509 |
| discovol | t3.small<br/>2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |


**Digital Ocean**

| Appchain | Droplet  | Storage | Data Transfer | Total cost per month |
|------|------|------|------|------|
| debionetwork | 2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |
| myriad | 2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |
| deip | 2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |
| atocha | 2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |
| fusotao | 8 GB Memory / 4 vCPUs  | 250 GB | 5 TB | $81 |
| discovol | 2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |
