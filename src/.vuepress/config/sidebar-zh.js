module.exports = [
    '/cn/',
    {
      title: 'Octopus Network 2.0',
      path: '',
      collapsable: false,
      children: [
        {
          title: 'Restaking',
          path: '/general/octopus-staking',
          collapsable: false,
          children: [

          ]
        }
      ]
    },
    {
      title: 'Octopus Network 1.0',
      path: '',
      collapsable: true,
      children: [
        {
          title: '基础知识',
          path: '/cn/general/octopus-overview',
          collapsable: false,
          children: [
            '/cn/general/infrastructure',
            '/cn/general/octopus-staking',
          ]
        },
        {
          title: '验证人指南',
          path: '/cn/maintain/validator-guide',
          collapsable: false,
          children: [
            '/cn/maintain/validator-generate-keys',
            '/cn/maintain/validator-deploy',
            '/cn/maintain/validator-register',
            '/cn/maintain/validator-operations',
            '/cn/maintain/monitor-node',
            '/cn/maintain/node-instance-operations',
          ]
        },
        {
          title: '委托人指南',
          path: '/cn/v1/maintain/delegator-delegate',
          collapsable: false,
          children: [
            '/cn/maintain/delegator-operations',
          ]
        },
        {
          title: '开发者指南',
          path: '/cn/guides/appchain-guide',
          collapsable: false,
          children: [
            '/cn/guides/appchain-develop',
            '/cn/guides/appchain-evm',
            '/cn/guides/appchain-register',
            '/cn/guides/appchain-startup',
            '/cn/guides/appchain-upgrade',
            '/cn/guides/appchain-indexer',
            '/cn/guides/assets-cross-chain',
          ]
        },
        {
          title: '治理指南',
          path: '/cn/guides/voting-appchain',
          collapsable: false,
          children: [
            '/cn/guides/voting-appchain',
          ]
        }
      ]
    }
];