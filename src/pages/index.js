import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import Layout from "../components/layout"
import Seo from "../components/seo"

//Custom Components
//Hero
import Hero from "../components/Hero";
//Benefits
import Benefits from "../components/Benefits";
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
import Skyline from "../components/Skyline"
// use it like this  <FontAwesomeIcon icon={faUser} size="10x" />
// not avail anymore? import { } from "@fortawesome/free-brands-sv-icons"

const IndexPage = () => (
  <>
  <Layout>
    <Seo title="1140 NFT" />
    <Hero />
    <Blockgrid />
    
    <Timeline />
    <Waitlist />
  </Layout>
 
  </>
  
)

export default IndexPage
