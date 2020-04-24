module.exports = {
  siteMetadata: {
    title: `Friesland School`,
    description: `Friesland School, Sandiacre, Nottingham.  Part of the Two Counties Trust`,
    author: `@carlbradburyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato`,
          `Open Sans`, // you can also specify font weights and styles
          "Cormorant Garamond",
        ],
        display: "swap",
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/friesland-logo.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // excludedRoutes: [
        //   "/wp/v2/users/**",
        //   "/wp/v2/themes",
        //   "/wp/v2/settings*",
        //   "wp/wp-json/siteground-optimizer/**",
        //   "/wp/wp-json/siteground-optimizer/v1/**",
        // ],
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/menus",
        ],
        baseUrl: "frieslandschoolv2.local",
        // baseUrl: "frieslandschool.com",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "http://frieslandschool.com",
        //   replacementUrl: "",
        // },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
