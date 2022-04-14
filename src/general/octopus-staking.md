## Octopus Network Staking

The LPoS (Leased Proof-of-Stake) of Octopus Network is to select a group of network maintainers from the OCT holders participating in the staking. The validator with the normal operation will get the rewards, but if it was unable to perform its duties normally, the staked assets will get slashed.

In staking, there are two roles: validator and delegator. OCT holders can participate in the staking to become:

* Validator
    - Choose appchain and stake 10,000 OCT as least;
    - Run the validator node, ensure its availability is as high as possible
    - The unbond period is 21 days;
* Delegator
    - Delegate the OCT to the validator, no other operations are required;
    - The unbond period is 21 days;

### Rewards

#### Reward Distribution

In LPoS, rewards are calculated based on the bias of block generation and recorded per era (approximately 24 hours). If the bias of block generation of a validator reaches the expected 70% in an era, there will be the full reward of this era.

Assuming a block is generated every 6 seconds, there will be 14,400 blocks in a day. If there are 100 validators, then one validator is expected to generate 144 blocks. As long as the number of blocks it generates in this era is higher than 144 * 70%, it will get the full reward, otherwise, there will be no reward.

Also, rewards are distributed based on the staking amount of the validator node, which means that the higher the stake amount, the higher the reward the validator node will receive when they’re 100% available when forming the consensus. For the staking reward of the validator node, the validator gets 20% as a commission fee, and then the remaining staking rewards are distributed between the validator and the delegator in proportion to the staking amount.

We assume that: a validator node, the validator stake 10,000 OCT, the delegator A, B, and C respectively stake 3,000 OCT, 5,000 OCT, and 2,000 OCT, and the staking reward of the validator node is 100 XYZ, then the reward distribution is shown in the following table:

|             | Staked (OCT) | Rewards (XYZ) |
| ----------- | ------------ | ------------- |
| Validator 0 | 10000        | 60            |
| Delegator A | 3000         | 12            |
| Delegator B | 5000         | 20            |
| Delegator C | 2000         | 8             |

#### Claim rewards

The validator or delegator needs to manually claim the rewards via Octopus App. The staking reward keeps up to 84 Era, which is approximately 84 days.

**Warning**: If the validator or delegator does not claim his staking reward within the period, currently, the reward is locked in the contract, and can’t be claimed.

### Slashing

In LPoS, if the validator node misbehaves in the network, both the validator and their delegators will be slashed, thus losing a certain percentage of the stake OCT.

To understand which case would be slashed , see the condition in the below.

* Condition 1: A group of validators signs more than one block at the same height;
* Condition 2: A group of validators signs a block which includes at least one invalid tx;
* Condition 3: A group of validators can’t react to a data availability challenge with a valid block which can justify a block header they have signed;

In condition 1, below formula will be used for calculating the slashing rate:
Let x = offenders’ total staking, n = all validators’ total staking
Slashing Rate = Min((3 * x/n)^2, 1)

In conditions 2 and 3, the offenders will be slashed by 100%.

These slashed OCTs will be sent to a public treasury, from where could be returned to the validators on the decision of governance, e.g. slashing is caused by appchain runtime errors.
