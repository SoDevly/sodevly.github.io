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
        gitRepoContentPath: 'https://github.com/zdlath/zdlath.github.io/tree/develop_v2/example/content/',
        showDescriptionInSidebar: true,
        showThemeInfo: false,
        showDate: true,
        logo: 'https://zdlath.github.io/photo.jpg',
      },
    },
  ],
}
