# 1140 NFT

# Basics

- based on Gatsby Starter Default 
- https://github.com/gatsbyjs/gatsby-starter-default


# Font Awesome 

- added npm packages found here https://fontawesome.com/docs/web/setup/packages
- Important to use the npm token for the project, other wise it kills the netlify build 
- https://fontawesome.com/docs/web/setup/packages 
- https://stackoverflow.com/questions/56977609/can-not-deploy-gatsby-site-to-netlify-with-fontawesome-pro

`@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=FONT-AWESOME-PACKAGE-TOKEN`

- add this plugin to prevent icons jumping around on page load 
- compile icons at build time https://www.gatsbyjs.com/plugins/gatsby-plugin-fontawesome-css/

