## Set Session Keys

> **Note**:
>
> * The validator node must complete the synchronization of the chain data.

### Generating the Session Keys

You need to tell the chain your Session keys by signing and submitting an extrinsic. There are 2 options to associate your validator node with your validator account on the Appchain.

**Option 1: CLI**

It is easier to run the `author_rotateKeys` command on your remote server (e.g. AWS) where the validator node is deployed, and the node is running with the default HTTP RPC port configured:

```bash
curl -H "Content-Type: application/json" -d'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

The output will have a hex-encoded "result" field. The result is the concatenation of the four public keys, save it for a later step.

**Option 2: PolkadotJS-Apps**

You can generate your Session keys in the client via the apps RPC. If you are doing this, make sure that you have the PolkadotJS-Apps explorer attached to your validator node. You can configure the apps dashboard to connect to the endpoint of your validator in the Settings tab.

Once ensuring that you have connected to your node, the easiest way to set session keys for your node is by calling the `author_rotateKeys` RPC request to create new keys in your validator's keystore. Navigate to Toolbox tab and select RPC Calls then select the `author > rotateKeys()` option and remember to save the output that you get back for a later step.

### Submitting the `setKeys` Transaction

> **Note**: 
>
> * Polkadot{.js} Browser Plugin was installed;
> * The validator's appchain account have a few the Appchain tokens.
> * For the test network, please request Barnacle tokens(BAR) via PolkadotJS Apps with its RPC endpoint.

Go to the [Octopus Network Testnet](https://testnet.oct.network/), select the `Appchains` tab -> the corresponding appchain, and follow the steps to set the session keys:

1. In the operation page, click `RPC Call`;
2. In the pop-up window, configure for your validator account: for RPC select `session`, for Callables select `setKeys`;
3. Enter the result `author_rotateKeys` in the field `keys`, enter `0x00` in the field `proof`;
4. Click `Submit`.

![set session keys](../maintain/validator_set_session_keys.jpg)
