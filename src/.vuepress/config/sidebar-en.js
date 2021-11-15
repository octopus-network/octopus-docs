module.exports = [
    '',
    {
      title: 'General',
      path: '/general/octopus-overview',
      collapsable: false,
      children: [
        '/general/octopus-overview',
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
        '/guides/appchain-register',
        '/guides/appchain-startup',
        '/guides/mainchain-stablecoin',
        '/guides/appchain-nativetoken',
      ]
    },
    {
      title: 'User Guides',
      path: '/guides/voting-appchain',
      collapsable: false,
      children: [
        '/guides/voting-appchain',
        '/guides/staking-delegate',
      ]
    },    
    {
      title: 'Validator Guide',
      path: '/maintain/validator-guide',
      collapsable: false,
      children: [
        '/maintain/validator-generate-keys',
        '/maintain/validator-deploy',
        '/maintain/validator-set-session-keys',
        '/maintain/validator-stake',
      ]
    }
];