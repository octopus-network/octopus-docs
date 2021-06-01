module.exports = [
    '/en/',
    {
      title: 'Octopus',
      path: '/en/octopus/overview',
      collapsable: false,
      children: [
        '/en/octopus/overview',
      ]
    },    
    {
      title: 'Appchain',
      path: '/en/appchain/guide',
      collapsable: false,
      children: [
        '/en/appchain/develop',
        '/en/appchain/integrate',
        '/en/appchain/release',
        '/en/appchain/register',
      ]
    },
    {
      title: 'Validator',
      path: '/en/validator/guide',
      collapsable: false,
      children: [
        '/en/validator/generate-keys',
        '/en/validator/deploy-validator',
        '/en/validator/set-session-key',
        '/en/validator/stake',
      ]
    }
];