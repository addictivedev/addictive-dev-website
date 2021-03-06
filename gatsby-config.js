module.exports = {
  siteMetadata: {
    title: 'Addictive',
    author: 'Addictive s.r.l',
    description: 'A developer company',
    keywords: ['developer', 'software', 'engineering', 'web application'],
    titleTemplate: "%s | addictive.dev",
    url: "https://www.addictive.dev", // No trailing slash allowed!
    image: "/images/website-icon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@pitchtarget",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'addictive.dev',
        protocol: "https",
        hostname: "addictive.dev",
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/locale`,
        // supported language
        languages: [`en`, `it`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/favicon.png",
      },
    },
  ],
}
