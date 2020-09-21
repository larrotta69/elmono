module.exports = {
  pathPrefix: "/elmono",
  siteMetadata: {
    title: `Bio`,
    description: `Bio descripción`,
    author: `Oscar Larrotta`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Biomedical long name`,
        short_name: `Biomedical name`,
        start_url: `/`,
        background_color: `#43abb4`,
        theme_color: `#43abb4`,
        display: `minimal-ui`,
        icon: `src/images/bio-icon.png`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
