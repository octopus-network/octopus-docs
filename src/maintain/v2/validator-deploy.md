## Deploy Validator Node 

In order to simplify the deployment of the validator node, the Octopus Network team provides an automatic deployment service for the validator node. Currently, it supports:

* [Digital Ocean](./validator-deploy-do.md)
* AWS (coming soon)

Also, the validator can choose to [manually deploy the validator node](./validator-deploy-manually.md).

### Hardware configuration

To run the validator nodes, you will need a machine with the following minimum hardware requirements:

* 4 or more physical CPU cores
* At least 100GB of NVME SSD disk storage. Hard drive I/O speed is crucial!
* At least 8GB of memory (RAM)

We anticipate that network requirements will be low initially. Bandwidth, CPU and memory requirements will rise as the network grows. As the usage of the blockchain grows, the server requirements may increase as well, so you should have a plan for updating your server as well.

The configuration and approximate cost of each Appchain validator node which is deployed via the automatic deployment service.

**AWS**

| Appchain | EC2 Instance Type  | Storage | Data Transfer | Estimated monthly cost |
|------|------|------|------|------|
| ottochain | t3.xlarge<br/>16 GB Memory / 4 vCPUs | 100 GB | 5 T | $84 |


**Digital Ocean**

| Appchain | Droplet  | Storage | Data Transfer | Estimated monthly cost |
|------|------|------|------|------|
| ottochain | s-4vcpu-8gb<br/>8 GB Memory / 4 vCPUs | 160 GB | 5 T | $48 |
