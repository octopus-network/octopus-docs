## Monitor Node

Validator can check the validator node status through the [Telemetry](https://telemetry.mainnet.octopus.network/).

If it is automatically deployed, the node name of the validator will default to `validator-[NEAR account]`, where `[NEAR account]` is the NEAR account used to log in to Octopus Network when the validator is registered.

If it is manually deployed, the validator can use the `--telemetry-url` option when running the validator node, and set its value to `'wss://telemetry.mainnet.octopus.network/submit 9'`. Also, the validator can use the `--name` option to set the name of the validator node, so that the validator can check the node status by the node name.

### Validator status

In the **Validators** list, validators mainly have the following status:

* **Registered, missing session keys**, the validator need to set Session Key;
* **New, coming next day(era)**, the validator need to wait to enter the next validator set;
* **Validating**, the validator works normally;
* **Validating, not producing blocks**, the validator need to check whether the validator node is running normally;
* **Unstaking**, the validator unbond the staking;
