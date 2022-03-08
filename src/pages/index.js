import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// Font Awesome 
// https://www.youtube.com/watch?v=BbF-2o__5Xo 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
// use it like this  <FontAwesomeIcon icon={faUser} size="10x" />
// not avail anymore? import { } from "@fortawesome/free-brands-sv-icons"

const IndexPage = () => (
  <>
  <Layout>
    <Seo title="1140 NFT" />
    
    <h1>Future Home of 1140 NFT</h1>
    
    <p>
      <Link to="/page-2/">Goe 2</Link> <br />
      
    </p>
  </Layout>
  </>
  
)

export default IndexPage
