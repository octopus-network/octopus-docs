module.exports = [
    '/cn/',
    {
      title: '基础知识',
      path: '/cn/general/octopus-overview',
      collapsable: false,
      children: [
        '/cn/general/octopus-overview',
        '/cn/general/infrastructure',
        '/cn/general/octopus-staking',
        '/cn/general/octopus-faq',
      ]
    },    
    {
      title: '开发者指南',
      path: '/cn/guides/appchain-develop',
      collapsable: false,
      children: [
        '/cn/guides/appchain-develop',
        '/cn/guides/appchain-evm',
        '/cn/guides/appchain-indexer',
        '/cn/guides/appchain-register',
        '/cn/guides/appchain-startup',
        '/cn/guides/mainchain-stablecoin',
        '/cn/guides/appchain-upgrade',
      ]
    },
    {
      title: '用户指南',
      path: '/cn/guides/voting-appchain',
      collapsable: false,
      children: [
        '/cn/guides/voting-appchain',
      ]
    },
    {
      title: '委托人指南',
      path: '/cn/maintain/delegator-delegate',
      collapsable: false,
      children: [
        '/cn/maintain/delegator-delegate',
        '/cn/maintain/delegator-operations',
      ]
    },    
    {
      title: '验证人指南',
      path: '/cn/maintain/validator-guide',
      collapsable: false,
      children: [
        '/cn/maintain/validator-generate-keys',
        '/cn/maintain/validator-deploy',
        '/cn/maintain/validator-set-session-keys',
        '/cn/maintain/validator-stake',
        '/cn/maintain/monitor-node',
      ]
    }
];
  