## Manually Deploy Appchain Node

> **Note**
>
> Before manually running an Appchain node, make sure you can handle node issues and exceptions. If there is a problem with the node, both the validator and its delegators will not be able to receive restaking rewards.

Learn how to run an Appchain node. To manually deploy the Appchain node, the validator can choose their favorite VPS provider, and generally using the **Ubuntu** operating system.

> **Note**
>
> Make sure you have the right version of the Appchain binary installed.

The following steps are required:

1. Initialize Node
2. Get the Genesis & Peers
3. Run the Appchain Node

### Initialize Node

Run the following command to initialize the node to create all the necessary validator and node configuration files:

```bash
<appchain_binary> init <your_custom_moniker> --chain-id <appchain_chain_id>
```

By default, the `init` command creates your `~/.<appchain_binary>` directory with subfolders `config/` and `data/`. In the config directory, the most important files for configuration are `app.toml` and `config.toml`.

```bash
~/.<appchain_binary>
├── config
│   ├── app.toml                    # Application-related configuration file.
│   ├── client.toml
│   ├── config.toml                 # Tendermint-related configuration file.
│   ├── genesis.json                # The genesis file.
│   ├── node_key.json               # Private key to use for node authentication in the p2p protocol.
│   └── priv_validator_key.json     # Private key to use as a validator in the consensus protocol.
└── data                            # Contains the databases used by the node.
    └── priv_validator_state.json
```

You can easily change the default directory by using the `--home` flag.

An example of using OttoChain `ottod` is as follows:

```bash
ottod init my-validator --chain-id otto_9100-1
```

#### Get the validator pubkey

Validator need to get the validator pubkey (**only for the validator who manually deploy Appchain node**), which used to set it to the Appchain node. You can get your validator pubkey on your validator node by running `show-validator` command.

An example of using OttoChain `ottod` is as follows:

```bash
ottod tendermint show-validator

{"@type":"/cosmos.crypto.ed25519.PubKey","key":"2CKdA3Sbl1hh6+Exdqy7LfspfGcgUtNhV1VwUAZcy7c="}
```

### Get the Genesis & Peers

#### Copy the Genesis File

Download the `genesis.json` file from the appchain repo and copy it over to the config directory (e.g. `~/.<appchain_binary>/config`).

An example of using OttoChain `ottod` is as follows:

```bash
wget -O ~/.ottod/config/genesis.json https://raw.githubusercontent.com/octopus-appchains/otto/main/tests/genesis.json
```

#### Add Persistent Peers

Your validator node needs to connect [peers](https://docs.tendermint.com/v0.34/tendermint-core/using-tendermint.html#peers) and maintain persistent connections with them. You'll need to set the `persistent_peers` field in `config.toml` under the config directory (e.g. `~/.<appchain_binary>/config`) with the list of available peers on the appchain repo.

Edit the file `config.toml` and add the persistent peers to the following:

```bash
#######################################################
###           P2P Configuration Options             ###
#######################################################
[p2p]

# ...

# Comma separated list of nodes to keep persistent connections to
persistent_peers = ""
```

You can also use `sed` to include them into the configuration. An example of using OttoChain `ottod` is as follows:

```bash
PEERS="58ca8716508f50d51d2918c9b70758c1c25bb498@34.81.140.131:26656, 834bbc8f2738313679c414df63136eb3197048a7@35.201.135.223:26656"
sed -i.bak "s/persistent_peers = \"\"/persistent_peers = \"${PEERS}\"/" ~/.ottod/config/config.toml
```

### Run the Appchain Node

Run the following command to start the appchain node:

```bash
<appchain_binary> start
```

An example of using OttoChain `ottod` is as follows:

```bash
ottod start
```

```bash
6:23AM INF Unlocking keyring module=server
6:23AM INF starting ABCI with Tendermint module=server
6:23AM INF starting node with ABCI Tendermint in-process module=server
6:23AM INF InitChain chainID=otto_9100-1 initialHeight=1 module=server
...
6:23AM INF This node is a validator addr=76CBD1E7565B06A74811C2F592689A6F487B7D38 module=consensus pubKey=2CKdA3Sbl1hh6+Exdqy7LfspfGcgUtNhV1VwUAZcy7c= server=node
6:23AM INF P2P Node ID ID=e25881e99f8a79028b7949bad1de4536802d74e0 file=/root/.ottod/config/node_key.json module=p2p server=node
6:23AM INF Add our address to book addr={"id":"e25881e99f8a79028b7949bad1de4536802d74e0","ip":"0.0.0.0","port":26656} book=/root/.ottod/config/addrbook.json module=p2p server=node
...
6:23AM INF service start impl=baseWAL module=consensus msg={} server=node wal=/root/.ottod/data/cs.wal/wal
6:23AM INF service start impl=Group module=consensus msg={} server=node wal=/root/.ottod/data/cs.wal/wal
...
6:23AM INF commit synced commit=436F6D6D697449447B5B323220353420313535203134322032343920313220313839203331203533203234382031333320383420313234203233382031373920323520302032313220323231203139352032313220373120313933203420323136203232352032302031393820353320313335203130322036325D3A327D module=server
6:23AM INF committed state app_hash=16369B8EF90CBD1F35F885547CEEB31900D4DDC3D447C104D8E114C63587663E height=2 module=state num_txs=0 server=node
6:23AM INF indexed block exents height=2 module=txindex server=node
```

After the node synchronization, the validator needs to [bond validator](./validator-operations.md).
