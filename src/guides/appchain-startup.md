## Appchain Startup

![Appchain_Pipeline](../images/guides/appchain_pipeline.png)

### Appchain Status

There are the below five phases:

1. **Registered**: The appchain will go through the Registered phase after the appchain team submits the registration with the appchain information.
2. **Audited**: The Octopus core team will start the audit within 1-2 weeks and mainly audits for two aspects:
    * The appchain functions are usable/valuable for business purposes;
    * The configurations of appchain are right;
3. **Voting**: If the appchain passes the audit, it will go through the Voting phase. This is the **critical stage** for the appchain team to request support from the Octopus DAO Council. The DAO council members can [vote](./voting-appchain.md) to decide whether the appchain would go through the Booting phase.
4. **Booting**: The appchain with the highest upvotes will go through the Booting phase, the Octopus core team will do some preparations for the appchain to go live.
5. **Running**: After the Octopus core team boots the appchain and executes the go-live step, the appchain will go through the Running phase.

### Appchain booting process

In this section, we will list what needs to do during **Booting** phase.

1. The Octopus core team will deploy an anchor contract and a wrapped token contract for the appchain.

    **Note**: By creating the wrapped token in NEAR network early, the appchain team can choose to do an IDO before the appchain launches. The appchain's tokens exist in two places, wrapped token in NEAR network and appchain native token in Appchain network. When an appchain is launched, users can use the Octopus Bridge to transfer tokens between these two places.

    Also, the Octopus team will provide a snippet of the chainspec file that contains the session keys and staking information of the Octopus foundation validator nodes. For the foundation validator nodes, the default staking amount is `50000 * 10**18` OCT, and for these nodes, the default pre-allocated balance of natvie token is `10 * 10**18`, and the actual amount is determined by the appchain team.

2. The Appchain team generate a human-readable chainspec file. Example command:

   ```bash
   ./target/debug/debio build-spec --disable-default-bootnode --chain dev > debionetwork.json
   ```

   And then, the Octopus team will provide one chainspec snippet file (chainspec-snippet.json) to the Appchain team. The Appchain team need to copy the snippet information provided into the chainspec file. Example:

   ```bash
   
   // check this section, the Octopus foundation validator nodes are allocated a small balance to cover transaction fees (for example, 10 $DBIO)
      "balances": {
       "balances": [
        [
         "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
         10000000000000000000
        ],
      ...
      },
      
   // this can be found on mainnet/testnet website   
   "anchorContract": "debionetwork.octopus-registry.near", 
   "eraPayout": 13699000000000000000000,
   
   // check this section, these are session keys of the Octopus foundation validator nodes
      "session": {
       "keys": [
        [
         "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
         "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
         {
          "babe": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
          "grandpa": "5FA9nQDVg267DEd8m1ZypXLBnvN7SFxYwV7ndqSYGiN9TTpu", 
          "im_online": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
          "beefy": "KW39r9CJjAVzmkf9zQ4YDb2hqfAVGdRqn53eRqyruqpxAP5YL", 
          "octopus": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY" 
         }
        ],
    ...
       ]
      },
   
   // add a sudo account for future upgrades and privileged operations.(Don’t forget to add some balance to this account as well.)
      "sudo": {
       "key": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
      }
   ```

    Also, the Appchain team should generate a raw chain spec and named it as `octopus-mainnet.json` for mainnet or `octopus-testnet.json` for testnet, and then commit it to the appchain Github repo (e.g. <APPCHAIN_REPO>/resources/). Example command:

    ```bash
    $ ./target/debug/debio build-spec --chain=debionetwork.json --raw  > octopus-testnet.json
    ```

    At the same time, please send the human-readable chainspec file to the Octopus team for review. 
    
   > **Note**: Check the appchain node, the `load_spec` function in the file `<APPCHAIN_REPO>/node/src/command.rs`, whether the following content is added to set the option `--chain` value:
    > * for mainnet, use `octopus-mainnet`
    > * for testnet, use `octopus-testnet`

   The example code in the Barnacle template is as follows:
   
    ```Rust
    "octopus-testnet" => Box::new(chain_spec::octopus_testnet_config()?),
    ```    

3. The Octopus team will build a docker image with the Appchain Mainnet release which the Appchain team released, and then will launch a appchain network with the four foundation validators, the four bootnodes, the API gateway, the relayer and other services. Also, the Octopus team will use `sudo` account to activate the appchain.

4. The Octopus team move the appchain to the Running stage.