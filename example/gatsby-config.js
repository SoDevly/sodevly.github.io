module.exports = {
  siteMetadata: {
    title: '',
    description: 'SoDevly의 개발 블로그',
    keywords: ['React Native', 'React', '프로그래밍', 'App Developer', '앱개발자', "Web Front Developer", "웹개발자", 'IT'],
    siteUrl: `https://sodevly.github.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "G-HQFWY3E1JT",
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
        logo: '',
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        output: "/sitemap.xml",
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://sodevly.github.io',
        sitemap: 'https://sodevly.github.io/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/'
        }]
      }
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                keywords
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.title,
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.created,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.fields.slug + '/',
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.fields.slug + '/',
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___created] },
                ) {
                  edges {
                    node {
                      fields { slug }
                      frontmatter {
                        title
                        created
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "SoDevly Develop Blog RSS Feed",
            link: "https://sodevly.github.io",
          },
        ],
      },
    }
  ],
}
