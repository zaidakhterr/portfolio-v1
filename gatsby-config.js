const config = require("./src/config")

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    // siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.name,
        short_name: config.shortName,
        start_url: `/`,
        background_color: config.charcoalColor,
        theme_color: config.charcoalColor,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
