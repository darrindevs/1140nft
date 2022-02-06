import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="1140 NFT" />
    
    <h1>Future Home of 1140 NFT</h1>
    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      
    </p>
  </Layout>
)

export default IndexPage
