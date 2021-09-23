require("dotenv").config({path:".env"})
module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-snipcartv3',
            options: {
              apiKey: process.env.SNIPCART_KEY
            }
          }
      
    ]
}