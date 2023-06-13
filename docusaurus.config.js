// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Octopus Network Docs',
  tagline: 'Develop Appchain on Octopus Network',
  favicon: 'img/favicon.ico',
  url: 'https://docs.oct.network',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'octopus-network',
  projectName: 'octopus-docs',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          routeBasePath: '/',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/octopus-network/octopus-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          href: '/',
          alt: 'Octopus Network Logo',
          src: 'img/logo-blue.png',
        },
        items: [       
          {
            href: 'https://github.com/octopus-network',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://medium.com/oct-network',
            label: 'Blog',
            position: 'right',
          },          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Network',
            items: [
              {
                label: 'Mainnet',
                href: 'https://mainnet.oct.network/',
              },
              {
                label: 'Testnet',
                href: 'https://testnet.oct.network/',
              },
            ],
          },          
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.oct.network/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/6GTJBkZA9Q',
              },              
            ],
          },          
          {
            title: 'Social',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/octopusnetwork',
              },              
              {
                label: 'Twitter',
                href: 'https://twitter.com/oct_network',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Octopus Network. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
