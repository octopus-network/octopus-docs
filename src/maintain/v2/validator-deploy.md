## Deploy Validator Node 

In order to simplify the deployment of the validator node, the Octopus Network team provides an automatic deployment service for the validator node. Currently, it supports:

* [Digital Ocean](./validator-deploy-do.md)
* AWS (coming soon)

Also, the validator can choose to [manually deploy the validator node](./validator-deploy-manually.md).

### Hardware configuration

To run the validator nodes, you will need a machine with the following minimum hardware requirements:

* 1 or more physical CPU cores
* At least 50GB of NVME SSD disk storage. Hard drive I/O speed is crucial!
* At least 2GB of memory (RAM)

We anticipate that network requirements will be low initially. Bandwidth, CPU and memory requirements will rise as the network grows. As the usage of the blockchain grows, the server requirements may increase as well, so you should have a plan for updating your server as well.

The configuration and approximate cost of each Appchain validator node which is deployed via the automatic deployment service.

**AWS**

| Appchain | EC2 Instance Type  | Storage | Data Transfer | Estimated monthly cost |
|------|------|------|------|------|
| ottochain | t3.small<br/>2 GB Memory / 2 vCPUs | 50 GB | 100 GB | $12 |


**Digital Ocean**

| Appchain | Droplet  | Storage | Data Transfer | Estimated monthly cost |
|------|------|------|------|------|
| ottochain | 2 GB Memory / 1 vCPUs | 50 GB | 2 T | $12 |
