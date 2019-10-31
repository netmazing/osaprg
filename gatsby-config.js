module.exports = {
  siteMetadata: {
    title: `Socjologia i psychologia organizacji`,
    description: `Interdyscyplinarny zespół badawczy`,
    author: `Trojnacki & Draganek`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Socjologia i psychologia organizacji`,
        short_name: `OSAP`,
        description: `Interdyscyplinarny zespół badawczy`,
        start_url: `/`,
        lang: `pl`,
        background_color: `rgb(1, 135, 145)`,
        theme_color: `rgb(1, 135, 145)`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-transition-link`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
