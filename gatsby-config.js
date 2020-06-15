const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'AfricaI',
    description: 'AfricaI is an organanization working to transform Tech Education in Africa youth. We inspire and teach cutting-edge technology to Africa Youth',
    author: '@AfricaI',
    keywords: 'AfricaI, Tech Education, digital skills, Youth, Rwanda, Kenya',
    image: 'src/assets/images/africai.png',
    url: 'https://www.africai.site/',
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
        name: 'AfricaI',
        short_name: 'AfricaI',
        start_url: '/',
        background_color: '#efefef',
        theme_color: '#373333',
        display: 'standalone',
        icon: 'src/assets/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TSTRR96",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "dataLayer",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "PageViewG",
      },
    },
  ],
};
