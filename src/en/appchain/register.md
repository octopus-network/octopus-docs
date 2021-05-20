## Register your Appchain

In this tutorial, we will learn and practice how to register your Appchain into the Octopus network.

**What you will be doing**

Before we even get started, let's lay out what we are going to do over the course of this tutorial. We will:

* Create a NEAR account
* Request OCT tokens
* Register your Appchain

### Create a Near Account

Octopus network is a network of Appchains running on the NEAR blockchain network. Therefore, you need to have an account on the NEAR network before you can connect your Appchain to the Octopus network.

The easiest way to create an account on NEAR is to use the NEAR wallet. Go to https://wallet.testnet.near.org, and follow the instructions to create your account.

More details [Create NEAR Account](https://docs.near.org/docs/develop/basics/create-account).

### Request OCT tokens

Join our [Discord server](https://discord.gg/6GTJBkZA9Q)
In the **#testnet** channel, enter "apply for OCT tokens".
Someone from our team will be in touch with you shortly.

### Register your Appchain

From the Octopus network's architecture, we know there is a relay contract. You can send a registration transaction with your Appchain information using your NEAR account, which would interact with the relay contract and return your ```appchain_id```

Log in to Octopus [testnet](https://testnet.oct.network/) with your NEAR testnet account. Click the **Register** button, enter *Appchain Name, Bond Token*, then click “Register”. Once the transaction has been successfully executed, you will get the ID as your **appchain_id**.