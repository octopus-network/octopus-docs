## Octopus Docs.

This is the source repo for Octopus documents.

### Install.

This repo is build by [vuepress](https://vuepress.vuejs.org).

You should install Node.js and vuepress.

```bash
# install nvm https://github.com/nvm-sh/nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm --version

# install Node.js https://nodejs.org/en/
nvm install v14.16.1

# install yarn
npm install -g yarn

# install vuepress
yarn add -D vuepress
```

### Config

Sidebar config file is in `src/.vuepress/config`, `sidebar-en.js` is for english, `sidebar-zh.js` is for chinese.

```javascript
[
  {
    title: 'MenuName',      // Required
    path: '/MenuPath',      // Required, The path to jump
    collapsable: false,     // Required, set it to false
    children: [
      'MenuSubpath'
    ]
  }
]
```

### Local Run

```bash
# Build
$ yarn build

# Run
$ yarn dev
```

### Deploy
#### Publish to Netlify

1. In Netlify, config the GitHub repo with the following settings:

* Build Command: `yarn build`
* Publish directory: `dist`

2. Click the **Deploy** button.
