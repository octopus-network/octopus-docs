## 2.0 Restaking

For Octopus Network 2.0 Restaking, there are two roles: validator and delegator. NEAR holders can participate in the restaking to become:

* Validator
    - Choose appchain and restake 10,000 NEAR at least;
    - Run the Appchain node, ensure its availability is as high as possible;
    - The update cycle of the validator set is 1 day;
    - The distribution cycle of the restaking rewards is 1 day;
    - The unbond period is 21 days;
* Delegator
    - Choose validator and delegate 100 NEAR at least;
    - The distribution cycle of the delegation rewards is 1 day;
    - The unbond period is 21 days;

> **Note**
>
> Now for the validator set, the program would update it at 13:30 UTC+0 every day. So for example: if a validator complete the restaking at 12:30 UTC+0 on Dec 18th, it will be added into the validator set after 13:30 UTC+0 on Dec 18th, but if the validator complete the restaking at 13:35 UTC+0 on Dec 18th, it will be added into the validator set after 13:30 UTC+0 on Dec 19th.

## Validator Commission Fee

In the validator set, the validator with the largest staking amount has a commission fee of **20%**, for every **1%** lower staking amount of other validators, the commission fee will be reduced by **0.2%**, and the lowest commission fee is close to 0%.

We assume that the staking amount of a validator is M, and the largest staking amount is N, the calculation formula is: 

`commission fee = M / N * 20`

For example: The validator A has the largest staking amount with 355,000 NEAR, and the staking amount of validator B is 79,000 NEAR, so the commission fee of validator A: 20%, and the commission fee of validator B: 4.45%.

## Rewards

Rewards contain two parts:
* NEAR, it is automatically staked;
* Appchain rewards, it needs to be manually claimed.

### Reward Distribution

Appchain rewards are distributed based on the restaked NEAR amount of the Appchain node, which means that the higher amount, the higher reward the validator node will receive when they’re 100% available when forming the consensus. Also, **70%** of Appchain rewards will be used as restaking rewards, and **30%** will be used to repurchase OCT. For the restaking rewards of the validator node, the validator gets **20%～0%** as a [commission fee](#validator-commission-fee), and then the remaining restaking rewards are distributed between the validator and the delegators in proportion to the restaking amount.

We assume that: a validator node, the validator A restaked amount is 10,000 NEAR, the delegator B, and C respectively delegate 3,000 NEAR, and 5,000 NEAR. For example, the Otto Appchain rewards is 5,479 OCT every day, the total restaked amount of Otto Appchain is 150,000 NEAR, then the reward distribution is shown in the following table:

* The restaking rewards every day = 5479 * 70% = 3835.3 OCT
* The validator node rewards every day = 10,000 / 150,000 * 3835.3 = 255.68 OCT
* The validator A rewards every day = 10,000 / 18,000 * 255.68 + 8,000 / 18,000 * 255.68 * 20% = 164.77 OCT
* The delegator B rewards every day = 3,000 / 18,000 * 255.68 * 80% = 34.09 OCT
* The delegator C rewards every day = 5,000 / 18,000 * 255.68 * 80% = 56.81 OCT

|             | Restaked (NEAR) | Rewards (OCT) |
| ----------- | ------------ | ------------- |
| Validator Node | 18,000        | 255.68          |
| Validator A | 10,000        | 164.77          |
| Delegator B | 3,000         | 34.09            |
| Delegator C | 5,000         | 56.81            |

### Claim rewards

After a reward cycle (~1 day), the validator and the delegator will receive the Appchain rewards, which need to be claimed manually via Octopus Network DApp.

1. Log in to Octopus Network [V2 Mainnet](https://v2.oct.network) with your NEAR account.

![Connect wallet](../../images/maintain/v2/v2_connect_wallet.jpg)

2. Navigate to click the tab **Portfolio** and open the **My Portfolio** page, and then click the `Claim` button to claim the rewards.

![claim rewards](../../images/maintain/v2/v2_claim_rewards.jpg)