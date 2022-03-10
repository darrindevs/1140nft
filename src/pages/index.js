import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

//Custom Components
//Hero
import Hero from "../components/Hero";
//Blockgrid
import Blockgrid from "../components/Blockgrid";
//Timeline
import Timeline from "../components/Timeline";
//Waitlist
import Waitlist from "../components/Waitlist";

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
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
    <Hero />
          <Blockgrid />
          <Timeline />
          <Waitlist />
  </Layout>
  </>
  
)

export default IndexPage
