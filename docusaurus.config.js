// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Octopus Network Docs',
  tagline: 'Develop Appchain on Octopus Network',
  trailingSlash: false,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.oct.network',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'octopus-network', // Usually your GitHub org/user name.
  projectName: 'octopus-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
        title: 'Octopus Network Docs',
        logo: {
          href: '/',
          alt: 'Octopus Network Logo',
          src: 'img/logo-blue.png',
        },
        items: [
          {
            position: 'left',
            label: 'Use',
            to: '/use',
          },
          {
            position: 'left',
            label: 'Validate',
            to: '/validate',  
          },
          {
            position: 'left',
            label: 'Protocol',
            to: '/protocol',  
          },          
          {
            href: 'https://github.com/octopus-network',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Become a Validator',
                to: '/validate',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/6GTJBkZA9Q',
              },
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
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://medium.com/oct-network',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/octopus-network',
              },
            ],
          },
        ],
        copyright: `Built with ❤️ by the Octopus Network Core Development Team. © ${new Date().getFullYear()} All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
