## Appchain Upgrade

The upgrade of the Appchain includes two cases:
* Runtime upgrade
* Node upgrade

### Runtime upgrade

If only the runtime code is modified, the Appchain team needs to complete the runtime upgrade according to the following process:

1. The Appchain team releases a new version and a new runtime wasm file;
2. The Appchain team decides the date of the runtime upgrade and informs the Octopus Network team on its Discord channel;
3. The Octopus Network team will complete the runtime upgrade before enabling on-chain governance;

### Node upgrade

If you modify the code outside the runtime, or upgrade the Substrate version of Octopus Network (e.g: v0.9.13 to v0.9.18), the Appchain team needs to complete the node upgrade according to the following process:

1. The Appchain team releases a new version, as well as the binary files of the new node;
2. The Appchain team decides the date of the node upgrade and informs the Octopus Network team on its Discord channel;
3. The Octopus Network team upgrades the Appchain nodes operated by the Octopus Foundation;
4. The Octopus Network team notifies the Appchain validators of the Octopus community to upgrade their Appchain nodes;