## Appchain Register

### Prerequisites

* NEAR account
* OCT token: The appchain team needs pay 1k OCT tokens as an **Auditing Fee**. For the testnet, the appchain team can request OCTs from Discord.

### Steps of Appchain Registration

1. Log in to the Octopus apps via a NEAR account.
2. Click the **Join Octopus** button, and then fill in the following information:
    * **Appchain ID**: 3-20 characters consisting of lowercase letters, numbers and hyphen `-`, and cannot start with a number, and a hyphen `-` cannot be used at the beginning and end, a.k.a the regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` 
    * **Token Info**
        - **Token Name**: The name of the appchain native token
        - **Token Symbol**: The symbol of the appchain native token
        - **Icon**: The icon url of the appchain native token
        - **Decimals**: The decimals of the appchain native token
    * **Website**: The official website of the Appchain
    * **Function Spec**: The url of the appchain functional specification file
    * **Github**: The Github repository of AppChain
    * **Github Release**: The Github URL of the release of the Appchain
    * **Premined Amount**: The Appchain native token amount of the initial issues
    * **Beneficiary**: The NEAR account to receive the premined native token
    * **IDO Amount**: The Appchain token amounts through the DEX offer liquidity before the mainnet goes live 
    * **Era Reward**: The Appchain native token amount as its block reward for each day (1 era = 1 day)
    * **Email**: The contact email of the Appchain

   ![Register Screenshot](./register.png)

3. Click *Submit* to send the registration request.
