module.exports = {
  siteMetadata: {
    title: '',
    description: 'Sohee의 IT 블로그',
    keywords: ['React Native', 'React', '프로그래밍', 'App Developer', '앱개발자', 'IT'],
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
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-3153449982002378`,
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
        logo: '',
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://zdlath.github.io/',
        sitemap: 'https://zdlath.github.io/sitemap/sitemap-0.xml',
        policy: [{
          userAgent: '*',
          allow: '/'
        }]
      }
    },
  ],
}
