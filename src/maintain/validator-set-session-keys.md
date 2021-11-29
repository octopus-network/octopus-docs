## Set Session Keys

> **Note**:
>
> To execute this step, it is better that your validator node have completed the synchronization of the appchain data.

### Generating the Session Keys

You need to tell the chain your Session keys by signing and submitting an extrinsic. There are 2 options to associate your validator node with your validator account on the Appchain.

**Option 1: CLI**

It is easier to run the `author_rotateKeys` command on your remote server (e.g. AWS) where the validator node is deployed, and the node is running with the default HTTP RPC port configured:

```bash
curl -H "Content-Type: application/json" -d'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

The output will have a hex-encoded "result" field which is the concatenation of the several public keys, save it as the session key which would be used in the next step.

```bash
{"jsonrpc":"2.0","result":"0xb143b87b83d16a43f444e94fed9cd87491802b9fae635c0de37b52609900fd398bbb0acd67d345a75ca0ef523acfc94fa63b462109f20684701a6150810231f7f92800d8f740e15187a4723f7671d0db7bb2ee46b87602b9f86bfa478a889c768da183a5d25673cf30424d649c95351a1c41f11c92c5bc8e84251406069999055a8cf21e44d9fd5fb41fa77ecb6cf0ea2ac62c4001083fd638fe70153a5f37c661","id":1}
```

**Option 2: PolkadotJS-Apps**

You can generate your Session keys in the client via the apps RPC. If you are doing this, make sure that you have the PolkadotJS-Apps explorer attached to your validator node. You can configure the apps dashboard to connect to the endpoint of your validator in the Settings tab.

Once ensuring that you have connected to your node, the easiest way to set session keys for your node is by calling the `author_rotateKeys` RPC request to create new keys in your validator's keystore. Navigate to Toolbox tab and select RPC Calls then select the `author > rotateKeys()` option and remember to save the output that you get back for a later step.

### Submitting the `setKeys` Transaction

> **Note**: 
>
> * Polkadot{.js} Browser Plugin was installed;
> * The validator's appchain account have a few the Appchain tokens.
> * For the test network, please request Barnacle tokens(BAR) via PolkadotJS Apps with its RPC endpoint.

Go to the Octopus Apps ([Mainnet](https://mainnet.oct.network) and [Testnet](https://testnet.oct.network)), select the `Appchains` tab -> the corresponding appchain, and follow the steps to set the session keys:

1. Click `Deploy Tool`, and then in the pop-up window, select `Set Session Key`;

![set session keys](../maintain/validator_set_session_keys.jpg)

2. In the pop-up window, select your validator account;

3. Enter your `Session Key` which is the hex-encoded "result" field from the output content of `author_rotateKeys`;

4. Click `Set`.

![set session keys](../maintain/validator_set_session_keys2.jpg)