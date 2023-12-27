module.exports = [
    '',
    {
      title: 'General',
      path: '/general/octopus-overview',
      collapsable: false,
      children: [
        '/general/octopus-overview',
        '/general/infrastructure',
        '/general/octopus-staking',
        '/general/octopus-faq',
      ]
    },
    {
      title: '2.0 - Restaking',
      path: '/general/v2/octopus-restaking',
      collapsable: false,
      children: [
        '/general/v2/octopus-restaking',
        '/general/v2/octopus-faq',
      ]
    },
    {
      title: '2.0 - Validator Guides',
      path: '/maintain/v2/validator-guide',
      collapsable: false,
      children: [
        '/maintain/v2/validator-register',
        '/maintain/v2/validator-deploy',
        '/maintain/v2/validator-operations',
      ]
    },
    {
      title: '2.0 - Delegator Guides',
      path: '/maintain/v2/delegator-delegate',
      collapsable: false,
      children: [
        '/maintain/v2/delegator-delegate',
        '/maintain/v2/delegator-operations',
      ]
    },
    {
      title: '1.0 - Validator Guides',
      path: '/maintain/validator-guide',
      collapsable: false,
      children: [
        '/maintain/validator-generate-keys',
        '/maintain/validator-deploy',
        '/maintain/validator-register',
        '/maintain/validator-operations',
        '/maintain/monitor-node',
        '/maintain/node-instance-operations',
      ]
    },
    {
      title: '1.0 - Delegator Guides',
      path: '/maintain/delegator-delegate',
      collapsable: false,
      children: [
        '/maintain/delegator-delegate',
        '/maintain/delegator-operations',
      ]
    },
    {
      title: 'Developer Guides',
      path: '/guides/appchain-guide',
      collapsable: false,
      children: [
        '/guides/appchain-develop',
        '/guides/appchain-evm',
        '/guides/appchain-register',
        '/guides/appchain-startup',
        '/guides/appchain-upgrade',
        '/guides/appchain-indexer',
        '/guides/assets-cross-chain',              
      ]
    },
    {
      title: 'Governance Guides',
      path: '/guides/voting-appchain',
      collapsable: false,
      children: [
        '/guides/voting-appchain',
      ]
    }
];