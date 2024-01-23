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
| debionetwork | c5.large<br/>4 GB Memory / 2 vCPUs | 200 GB | 100 GB | $99 |
| myriad | c5.large<br/>4 GB Memory / 2 vCPUs | 200 GB | 100 GB | $99 |
| atocha | c5.large<br/>4 GB Memory / 2 vCPUs | 120 GB | 100 GB | $93 |
| fusotao | c5.large<br/>4 GB Memory / 2 vCPUs | 260 GB | 4500 GB | $510 |
| discovol | c5.large<br/>4 GB Memory / 2 vCPUs | 120 GB | 100 GB | $93 |


**Digital Ocean**

| Appchain | Droplet  | Storage | Data Transfer | Estimated monthly cost |
|------|------|------|------|------|
| debionetwork | 8 GB Memory / 4 vCPUs | 200 GB | 5 TB | $68 |
| myriad | 8 GB Memory / 4 vCPUs | 200 GB | 5 TB | $68 |
| atocha | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |
| fusotao | 8 GB Memory / 4 vCPUs  | 260 GB | 7 TB | $94 |
| discovol | 8 GB Memory / 4 vCPUs | 120 GB | 5 TB | $60 |

**GCP**

| Appchain | VM instance  | Storage | Data Transfer | Estimated monthly cost |
|------|------|------|------|------|
| debionetwork | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 200 GB | 100 GB | $90 |
| myriad | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 200 GB | 100 GB | $90 |
| atocha | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |
| fusotao | e2-standard-2<br/>8 GB Memory / 2 vCPUs  | 260 GB | 4500 GB | $589 |
| discovol | e2-standard-2<br/>8 GB Memory / 2 vCPUs | 120 GB | 100 GB | $82 |

### Change VPS provider

For the validator who need to change the VPS provider of the deployed node, please follow these steps:

1. Keep the old validator node running;
2. Deploy a new validator node. For the node which was deployed via the automatic deployment service, please `Clear Node Info` if needed.
![validator clear node info](../images/maintain/validator_clear_nodeinfo.jpg)
3. When the new node done the synchronization, please [set the Session Key](./validator-register.md#set-session-key) for the new validator node;
4. The validator could [stop](./validator-register.md#stop-the-validator-node) the old validator node until the next reward cycle.

### Change the pruning mode

If the node is running as a validator, the default pruning mode is `archive` to keep all block states. The validator can specify the maximum number of block states to keep by setting the value of `--blocks-pruning` with a number.

> **Note**
>
> The automatic deployment service sets the pruning mode with the value `14400` after Jan 23, 2024. So the validators who use the automatic deployment before this date need to change it manually.

**Automatic deployment**

For the automatically deployed validator node, please follow these steps:

1. Login to your server (AWS/Digital Ocean/GCP) via SSH;
2. Stop the appchain node container via executing the command:

    ```bash
    docker compose -f /home/ubuntu/seashell/docker-compose.yaml stop
    ```

3. Update the file `docker-compose.yaml` under the path `/home/ubuntu/seashell` to add a new line `--blocks-pruning 14400` into `command` part;

    An example of `docker-compose.yaml` for Fusotao is as follows:

    ```yaml
    version: "3.8"
    services:
      seashell:
        image: us-central1-docker.pkg.dev/octopus-prod/octopus-appchains/fusotao@sha256:50430509b90c57bd8737aece60e9d02d47980667c125b3305e1e2e77f249dc70
        container_name: seashell
        command: >
          --base-path /data/chain_data
          --chain octopus-mainnet
          --rpc-external
          --rpc-methods Unsafe
          --name validator-alice_near
          --validator
          --prometheus-external
          --prometheus-port 9616
          --enable-offchain-indexing true
          --wasm-execution Compiled
          --telemetry-url "wss://telemetry.mainnet.octopus.network/submit 0"
          --blocks-pruning 14400
        ports:
          - 127.0.0.1:9616:9616
          - 127.0.0.1:9933:9933
          - 30333:30333
        volumes:
          - /mnt/volume_54aadaee_1a2c_1d42_abb4_0fef51801fda/chain_data:/data/chain_data
        logging:
          driver: "json-file"
          options:
            max-size: "20m"
            max-file: "5"
        restart: always
        user: root
    ```

4. Start the appchain node container via executing the command:

    ```bash
    docker compose -f /home/ubuntu/seashell/docker-compose.yaml up -d
    ```


**Manual deployment**

For the manually deployed validator node, please follow these steps:

1. Stop your appchain node;
2. Start your node to add a new option `--blocks-pruning` with the value `14400`. An example of using Fusotao `fuso` is as follows:

    ```bash
    fuso --base-path ./chain_data \
      --chain octopus-mainnet \
      --name fuso-validator-1 \
      --validator \
      --telemetry-url "wss://telemetry.mainnet.octopus.network/submit 0" \
      --enable-offchain-indexing true \
      --blocks-pruning 14400
    ```