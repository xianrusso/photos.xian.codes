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
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fujic200`,
        path: `${__dirname}/src/content/fujic200`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `trix400`,
        path: `${__dirname}/src/content/trix400`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ektar100`,
        path: `${__dirname}/src/content/ektar100`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portra160`,
        path: `${__dirname}/src/content/portra160`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `classic100`,
        path: `${__dirname}/src/content/classic100`,
      },
    },
    "gatsby-transformer-json",
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
        name: `gold200`,
        path: `${__dirname}/src/content/gold200`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `superia400`,
        path: `${__dirname}/src/content/superia400`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ultramax400`,
        path: `${__dirname}/src/content/ultramax400`,
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
        icon: `src/content/portra400/paris24.jpg`,
      },
    },
  ],
}
