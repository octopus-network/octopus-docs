## Appchain Register

### Prerequisites
* NEAR accounts: To log in to the [Octopus testnet](https://testnet.oct.network/), you need a NEAR testnet account. Please visit NEAR [testnet wallet](https://wallet.testnet.near.org/) to create a NEAR account. 
* OCT token: OCT tokens are needed during the registration. For testnet, please visit [OCT faucet](https://faucet.testnet.oct.network/) to retrieve your OCT tokens.

### Steps of Appchain Registration

1. Log in to the [Octopus testnet](https://testnet.oct.network/) via a NEAR account.
2. Navigate to the **Appchains** page, click the **+ Appchain** button, and fill in the following:
    * Appchain name: 3-20 characters consisting of lowercase letters, numbers and hyphen `-`, and cannot start with a number, and a hyphen `-` cannot be used at the beginning and end, a.k.a the regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` 
    * Website(Optional): The official website of the Appchain
    * Github: The Github repository of AppChain
    * Github release: The Github URL of the release of the Appchain
    * Commit id: The Git commit hash URL of the Appchain release
    * Email: The contact email of the Appchain
    * Bond token: The bonded OCT will be returned after the Appchain is successfully activated

   ![Register Screenshot](./register.png)

3. Click *Register* to send the registration request.
