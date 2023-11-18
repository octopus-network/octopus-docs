## Generate Validator Account

Every validator must have:
* A NEAR account, used to log in to the Octopus network, register the validator, etc.;
* An appchain account, used to set the validator key of the validator node, etc.

To create a NEAR account, please refer to [Creating a NEAR Account](https://docs.near.org/concepts/basics/accounts/creating-accounts)

To create an appchain account, please use appropriate appchain binary(e.g. for linux) and execute the following command:

```bash
<appchain_binary> keys add <your_key_name>
```

An example of using OttoChain `ottod` is as follows:

```bash
ottod keys add example --keyring-backend test

- address: otto1j2ezxc2zmjm9t70sjd8zzrtttg6zc6t0rfz3cg
  name: example
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AwiNzqam4uMU4TrOutZej/EHzuSRtThyu1GJI0UdqAqT"}'
  type: local


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

more grab gossip shine evoke wedding stereo pig ship normal relax any gym brand assume dilemma light brand black verb segment once misery chase
```

Learn more about appchain **Accounts**:

* [CosmosSDK-based Accounts](https://docs.cosmos.network/main/learn/beginner/accounts)
* [Evmos-based Accounts](https://docs.evmos.org/protocol/concepts/accounts) which are implemented to be compatible with Ethereum type addresses