## Set Session Key

You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator node with your validator account on Appchain.

To complete the `author_rotateKeys` operation in your remote server (e.g. AWS) where the validator node is deployed, by executing the following command:

```bash
curl -H "Content-Type: application/json" -d'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http:// localhost:9933
```

The output will have a hex-encoded "result" field. The result is the concatenation of the four public keys. Save this result for a later step.

You can restart your node at this point.

Go to the Octopus network, [testnet](https://testnet.oct.network/), click the `Appchains` Tab page, perform the following 2 steps:

1. In the operation page, click `RPC Call`;
2. In the pop-up page, select your validator account, for RPC select `session`, for Callables select `setKeys`, enter the result `author_rotateKeys` in the field `keys`, enter `0x00` in the field `proof`, Click `Submit`.

As shown below:

![set session key](../../validator/set_session_key.jpg)
