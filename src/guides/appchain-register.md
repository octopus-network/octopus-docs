## Appchain Register

### Prerequisites

* NEAR account
* OCT token: The Appchain team needs pay 1k OCT tokens as an **Auditing Fee**. For the testnet, the Appchain team can request OCTs from Discord.

### Steps of Appchain Registration

1. Log in to the Octopus apps via a NEAR account.
2. Click the **Join Octopus** button, and then fill in the following information:
    * **Appchain ID**: 3-20 characters consisting of lowercase letters, numbers and hyphen `-`, and cannot start with a number, and a hyphen `-` cannot be used at the beginning and end, a.k.a the regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` 
    * **Token Info**
        - **Token Name**: The name of the Appchain native token
        - **Token Symbol**: The symbol of the Appchain native token
        - **Icon**: The **SVG** format icon link of the Appchain native token
        - **Decimals**: The decimals of the Appchain native token
    * **Website**: The official website of the Appchain
    * **Function Spec**: The url of the Appchain functional specification file
    * **Github**: The Github repository of Appchain
    * **Github Release**: The Github URL of the release of the Appchain
    * **Initial Supply**: The Appchain native token amount of the initial issues
    * **Premined**: The number of wrapped tokens that be Premined to the NEAR network in the total initial issuance
    * **Beneficiary**: The NEAR account to receive the Premined wrapped token
    * **IDO Amount**: The number of tokens used by the Appchain team to use Skyward for IDO before the Mainnet launch
    * **Era Reward**: The Appchain native token amount as its block reward for each day (1 era = 1 day)
    * **Email**: The contact email of the Appchain

   ![Register Screenshot](../images/guides/register.png)

3. Click *Submit* to send the registration request.
