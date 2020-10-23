module.exports = {
  title: 'Solidity Starter Kit',
  description: 'A starter kit for Ethereum Smart Contracts development',
  base: '/solidity-starter-kit/',
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-115756440-2'
    }]
  ],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    repo: 'vittominacori/solidity-starter-kit',
    sidebar: 'auto',
  },
};
