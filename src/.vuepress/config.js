module.exports = {
  title: 'Octopus Documentation',
  theme: 'reco',
  plugins: [
    ['@dovyp/vuepress-plugin-clipboard-copy', true]
  ],

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
      lang: 'en-US'
    },
    '/cn/': {
      lang: 'zh-CN'
    }
  },

  themeConfig: {
    logo: '/logo-blue.png',
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
          { text: 'Index', link: '/' }
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
          { text: '首页', link: '/cn/', icon: '' }
        ],
        sidebar: require('./config/sidebar-zh')
      }
    }
  }
};