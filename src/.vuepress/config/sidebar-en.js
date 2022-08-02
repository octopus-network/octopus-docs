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
      title: 'Developer Guides',
      path: '/guides/appchain-develop',
      collapsable: false,
      children: [
        '/guides/appchain-develop',
        '/guides/appchain-evm',
        '/guides/appchain-indexer',
        '/guides/appchain-register',
        '/guides/appchain-startup',
        '/guides/mainchain-stablecoin',
        '/guides/appchain-nativetoken',
        '/guides/appchain-upgrade',
      ]
    },
    {
      title: 'User Guides',
      path: '/guides/voting-appchain',
      collapsable: false,
      children: [
        '/guides/voting-appchain',
      ]
    },
    {
      title: 'Delegator Guides',
      path: '/maintain/delegator-delegate',
      collapsable: false,
      children: [
        '/maintain/delegator-delegate',
        '/maintain/delegator-operations',
      ]
    },        
    {
      title: 'Validator Guides',
      path: '/maintain/validator-guide',
      collapsable: false,
      children: [
        '/maintain/validator-generate-keys',
        '/maintain/validator-deploy',
        '/maintain/validator-set-session-keys',
        '/maintain/validator-stake',
        '/maintain/monitor-node',
        '/maintain/aws-new-user',
        '/maintain/aws-cost-optimization',
      ]
    }
];