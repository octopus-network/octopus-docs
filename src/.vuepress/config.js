module.exports = {
  title: 'Octopus Documentation',
  theme: 'reco',

  base: process.env.BASE_PATH || '/',
  dest: './dist',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],

  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  },

  themeConfig: {
    logo: '/logo-blue.png',
    lastUpdated: true,
    editLinks: true,
    sidebar: 'auto',

    author: 'Octopus Team',
    repo: 'https://github.com/octopus-network/octopus-docs.git',

    locales: {
      '/': {
        label: '简体中文',
        nav: [
          {
            text: '主页',
            link: 'https://oct.network/',
            target: '_self',
            rel: '',
            icon: 'reco-home'
          },
          { text: '首页', link: '/', icon: '' }
        ],
        sidebar: require('./config/sidebar-zh')
      },
      '/en/': {
        label: 'English',
        nav: [
          {
            text: 'Official Home',
            link: 'https://oct.network/',
            target: '_self',
            rel: '',
            icon: 'reco-home'
          },
          { text: 'Index', link: '/en/' }
        ],
        sidebar: require('./config/sidebar-en')
      }
    }
  }
};