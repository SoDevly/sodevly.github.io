module.exports = {
  siteMetadata: {
    title: '',
    description: 'Sohee의 IT 블로그',
    keywords: [],
    siteUrl: `https://zdlath.github.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "G-E00FQ1WF75",
        head: true,
      },
    },
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'content',
        basePath: '/',
        gitRepoContentPath: '',
        showDescriptionInSidebar: true,
        showThemeInfo: false,
        showDate: true,
        logo: 'https://zdlath.github.io/photo.jpg',
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
