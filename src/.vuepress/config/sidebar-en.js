module.exports = [
    '',
    {
      title: 'General',
      path: '/general/octopus-overview',
      collapsable: false,
      children: [
        '/general/octopus-overview',
        '/general/octopus-faq'
      ]
    },    
    {
      title: 'Guides',
      path: '/guides/appchain-develop',
      collapsable: false,
      children: [
        '/guides/appchain-develop',
        '/guides/appchain-integrate',
        '/guides/appchain-pipeline',
        '/guides/mainchain-stablecoin',
      ]
    },
    {
      title: 'Maintain',
      path: '/maintain/validator-guide',
      collapsable: false,
      children: [
        {
          title: 'Validator Guide',
          path: '/maintain/validator-guide',
          collapsable: false,
          children: [
            '/maintain/validator-generate-keys',
            '/maintain/validator-deploy',
            '/maintain/validator-set-session-key',
            '/maintain/validator-stake',
          ]
        }
      ]
    }
];