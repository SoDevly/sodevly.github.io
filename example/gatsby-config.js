module.exports = {
  siteMetadata: {
    title: '',
    description: 'Sohee의 IT 블로그',
    keywords: [],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'content',
        basePath: '/',
        gitRepoContentPath: '',
        showDescriptionInSidebar: true,
        showThemeInfo: false,
        showDate: true,
        logo: '',
      },
    },
  ],
}
