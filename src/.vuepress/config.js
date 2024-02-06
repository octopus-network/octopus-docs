module.exports = {
  title: 'Octopus Network Documentation',
  theme: 'reco',
  plugins: [
    ['@dovyp/vuepress-plugin-clipboard-copy', true]
  ],

  base: process.env.BASE_PATH || '/',
  dest: './dist',

  head: [
    ['link', { rel: 'icon', href: 'https://oct.network/favicon.ico' }],
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
      lang: 'en-US'
    },
    '/cn/': {
      lang: 'zh-CN'
    }
  },

  themeConfig: {
    logo: 'https://oct.network/v2/logo-blue.png',
    lastUpdated: true,
    editLinks: false,
    sidebar: 'auto',

    author: 'Octopus Team',
    repo: 'https://github.com/octopus-network/octopus-docs.git',

    locales: {
      '/': {
        label: 'English',
        nav: [
          {
            text: 'Official Home',
            link: 'https://oct.network/',
            target: '_self',
            rel: '',
            icon: 'reco-home'
          },
        ],
        sidebar: require('./config/sidebar-en')
      },
      '/cn/': {
        label: '简体中文',
        nav: [
          {
            text: '主页',
            link: 'https://oct.network/',
            target: '_self',
            rel: '',
            icon: 'reco-home'
          },
        ],
        sidebar: require('./config/sidebar-zh')
      }
    }
  }
};