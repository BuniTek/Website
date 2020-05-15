const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'AfricaI',
    description: "AfricaI is an organanization working to transform Tech Education in Africa youth. We inspire and teach cutting-edge technology to Africa Youth",
    author: '@AfricaI',
    keywords: "AfricaI, Tech Education, digital skills, Youth, Rwanda, Kenya",
    image:'src/assets/images/africai.png',
    url: 'https://www.africai.site/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/africai.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
};


{/* <Helmet>
  <title> </title>
  <meta name="description" content = "" />
  <meta name= "keywords" content = "" />
  <meta name="robots" content="index,follow" />
</Helmet> */}