require("dotenv").config({
  path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
        theme_color: `#214f95`,
        display: `minimal-ui`,
        icon: `src/images/friesland-logo.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          process.env.WPGRAPHQL_URL || `http://frieslandschoolv2.local/graphql`,
        // process.env.WPGRAPHQL_URL ||
        // `http://codeaday.co.uk/friesland/graphql`,
        verbose: true,
        schema: {
          queryDepth: 2,
          typePrefix: `Wp`,
          timeout: 30000,
        },
        develop: {
          nodeUpdateInterval: 3000,
          hardCacheMediaFiles: false,
        },
        production: {
          hardCacheMediaFiles: false,
        },
        debug: {
          // these settings are all the defaults,
          // remove them if you'd like
          graphql: {
            showQueryOnError: false,
            showQueryVarsOnError: true,
            copyQueryOnError: true,
            panicOnError: true,
            // a critical error is a WPGraphQL query that returns an error and no response data. Currently WPGQL will error if we try to access private posts so if this is false it returns a lot of irrelevant errors.
            onlyReportCriticalErrors: true,
          },
        },
        // fields can be excluded globally.
        // this example is for wp-graphql-gutenberg.
        // since we can get block data on the `block` field
        // we don't need these fields
        excludeFields: [`blocksJSON`, `saveContent`],
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
          // this shows how to exclude entire types from the schema
          // these examples are for wp-graphql-gutenberg
          CoreParagraphBlockAttributes: {
            exclude: true,
          },
          CoreParagraphBlockAttributesV2: {
            exclude: true,
          },
          CorePullquoteBlockAttributes: {
            exclude: true,
          },
        },
      },
    },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     // excludedRoutes: [
    //     //   "/wp/v2/users/**",
    //     //   "/wp/v2/themes",
    //     //   "/wp/v2/settings*",
    //     //   "wp/wp-json/siteground-optimizer/**",
    //     //   "/wp/wp-json/siteground-optimizer/v1/**",
    //     // ],
    //     includedRoutes: [
    //       "**/categories",
    //       "**/posts",
    //       "**/pages",
    //       "**/media",
    //       "**/tags",
    //       "**/taxonomies",
    //       "**/menus",
    //     ],
    //     baseUrl: "frieslandschoolv2.local",
    //     // baseUrl: "codeaday.co.uk/friesland",
    //     // baseUrl: "frieslandschool.com",
    //     protocol: "http",
    //     hostingWPCOM: false,
    //     useACF: true,
    //     concurrentRequests: 2,
    //     // searchAndReplaceContentUrls: {
    //     //   sourceUrl: "http://frieslandschool.com",
    //     //   sourceUrl: "http://codeaday.co.uk/friesland",
    //     //   replacementUrl: "",
    //     // },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
