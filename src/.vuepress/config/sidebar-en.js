module.exports = [
  '',
  {
    title: 'Octopus Network 2.0',
    path: '',
    collapsable: false,
    children: [
      {
        title: 'Restaking',
        path: '/general/v2/octopus-restaking',
        collapsable: false,
        children: []
      },
      {
        title: 'Validator Guide',
        path: '/maintain/v2/validator-guide',
        collapsable: false,
        children: [
          '/maintain/v2/validator-register',
          '/maintain/v2/validator-deploy',
          '/maintain/v2/validator-operations',
        ]
      },
      {
        title: 'Delegator Guide',
        path: '/maintain/v2/delegator-delegate',
        collapsable: false,
        children: [
          '/maintain/v2/delegator-operations',
        ]
      },
      {
        title: 'FAQ',
        path: '/general/v2/octopus-faq',
        collapsable: false,
      }
    ]
  },
  {
    title: 'Octopus Network 1.0',
    path: '',
    collapsable: true,
    children: [
      {
        title: 'General',
        path: '/general/octopus-overview',
        collapsable: false,
        children: [
          '/general/infrastructure',
          '/general/octopus-staking',
        ]
      },
      {
        title: 'Validator Guide',
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
        title: 'Delegator Guide',
        path: '/maintain/delegator-delegate',
        collapsable: false,
        children: [
          '/maintain/delegator-operations',
        ]
      },
      {
        title: 'Developer Guide',
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
        title: 'Governance Guide',
        path: '/guides/voting-appchain',
        collapsable: false,
        children: [
          '/guides/voting-appchain',
        ]
      }
    ]
  }
];