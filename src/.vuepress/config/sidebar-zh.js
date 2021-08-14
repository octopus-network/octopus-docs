module.exports = [
    '/cn/',
    {
      title: '基础知识',
      path: '/cn/general/octopus-overview',
      collapsable: false,
      children: [
        '/cn/general/octopus-overview',
        '/cn/general/octopus-faq'
      ]
    },    
    {
      title: '指南',
      path: '/cn/guides/appchain-develop',
      collapsable: false,
      children: [
        '/cn/guides/appchain-develop',
        '/cn/guides/appchain-integrate',
        '/cn/guides/appchain-pipeline',
        '/cn/guides/mainchain-stablecoin',
      ]
    },
    {
      title: '维护',
      path: '/cn/maintain/validator-guide',
      collapsable: false,
      children: [
        {
          title: '验证人指南',
          path: '/cn/maintain/validator-guide',
          collapsable: false,
          children: [
            '/cn/maintain/validator-generate-keys',
            '/cn/maintain/validator-deploy',
            '/cn/maintain/validator-set-session-keys',
            '/cn/maintain/validator-stake',
          ]
        }
      ]
    }
];
  