module.exports = [
    '',
    {
      title: '基础知识',
      path: '/general/octopus-overview',
      collapsable: false,
      children: [
        '/general/octopus-overview',
        '/general/octopus-faq'
      ]
    },    
    {
      title: '指南',
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
      title: '维护',
      path: '/maintain/validator-guide',
      collapsable: false,
      children: [
        {
          title: '验证人指南',
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
  