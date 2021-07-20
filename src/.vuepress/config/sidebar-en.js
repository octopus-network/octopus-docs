module.exports = [
    '/en/',
    {
      title: 'General',
      path: '/en/general/octopus-overview',
      collapsable: false,
      children: [
        '/en/general/octopus-overview',
        '/en/general/octopus-faq'
      ]
    },    
    {
      title: 'Guides',
      path: '/en/guides/appchain-develop',
      collapsable: false,
      children: [
        '/en/guides/appchain-develop',
        '/en/guides/appchain-integrate',
        '/en/guides/appchain-pipeline',
        '/en/guides/mainchain-stablecoin',
      ]
    },
    {
      title: 'Maintain',
      path: '/en/maintain/validator-guide',
      collapsable: false,
      children: [
        {
          title: 'Validator Guide',
          path: '/en/maintain/validator-guide',
          collapsable: false,
          children: [
            '/en/maintain/validator-generate-keys',
            '/en/maintain/validator-deploy',
            '/en/maintain/validator-set-session-key',
            '/en/maintain/validator-stake',
          ]
        }
      ]
    }
];