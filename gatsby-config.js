module.exports = {
  siteMetadata: {
    title: `Photos`,
    description: `Photos by Christian Russo`,
    author: `@xian`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `film1`,
        path: `${__dirname}/src/content/film1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `film2`,
        path: `${__dirname}/src/content/film2`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `provia100f`,
        path: `${__dirname}/src/content/provia100f`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `delta400`,
        path: `${__dirname}/src/content/delta400`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `silvermax100`,
        path: `${__dirname}/src/content/silvermax100`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portra400`,
        path: `${__dirname}/src/content/portra400`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
