## Set Session Key

You need to tell the chain your Session keys by signing and submitting an extrinsic. This is how to associate your validator node with your validator account on the Appchain.

Complete the `author_rotateKeys` operation in your server (e.g. AWS) where the validator node is deployed by the following command:

```bash
curl -H "Content-Type: application/json" -d'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http:// localhost:9933
```

The output will have a hex-encoded "result" field. The result is the concatenation of the four public keys, save it for a later step.

You can restart your node now.

Go to the [Octopus Network Testnet](https://testnet.oct.network/), select the `Appchains` tab -> the corresponding appchain, and follow 2 steps to set the session keys:

1. In the operation page, click `RPC Call`;
2. In the pop-up window, configure for your validator account: for RPC select `session`, for Callables select `setKeys`, enter the result `author_rotateKeys` in the field `keys`, enter `0x00` in the field `proof`, Click `Submit`.

![set session key](../maintain/validator_set_session_key.jpg)
