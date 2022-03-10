/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

// react-vertical-timeline-component
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


//import Header from "./header"
import NavDark from "./nav-dark"
//import NavLight from "./nav-light"
import Footer from "./footer"
//import "./layout.css"  
// 👆 replaced with bootstrap minified 👇
import 'bootstrap/dist/css/bootstrap.min.css'
// add custom css folder and file 
import '../css/custom.css'

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
//import { Media } from 'react-bootstrap'
import { Card } from 'react-bootstrap'


//Hero
import Hero from "./Hero";
//Timeline
import Timeline from "./Timeline";

// Font Awesome 
// https://www.youtube.com/watch?v=BbF-2o__5Xo 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
// use it like this  <FontAwesomeIcon icon={faUser} size="10x" />




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* remove default header 
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      */}
      
      {/* Custom Navbar */}
      {NavDark}
      {/* Container 1 */}
        <Container fluid className="">
          <main>
          <Hero />
             

            <div className="blockgrid">
              <div className="blocks">
                <div className="b1">
                  <div className="b1inner">
                  <img id="img1" align="" src="https://zno.s3.us-west-1.amazonaws.com/la2.jpeg" />    
                 
                    
                  </div>
                </div>
                <div className="b2">
                  <div className="b2inner">
                  <img id="img2" align="" src="https://zno.s3.us-west-1.amazonaws.com/la2.jpeg" />    
                  
                  </div>
                </div>
                <div className="b3">
                  <div className="b3inner">
                  <img id="img3" align="" src="https://zno.s3.us-west-1.amazonaws.com/la2.jpeg" />    
                  </div>
                </div>
                <div className="b4">
                  <div className="b4inner">
                  <img id="img4" align="" src="https://zno.s3.us-west-1.amazonaws.com/la2.jpeg" />    
                  </div>
                </div>
                <div className="b5">
                  <div className="b5inner">
                  <img id="img5" align="" src="https://zno.s3.us-west-1.amazonaws.com/la2.jpeg" />    
                  </div>
                </div>
                <div className="b6">
                  <div className="b6inner">
                  <img id="img6" align="" src="https://zno.s3.us-west-1.amazonaws.com/la2.jpeg" />    
                  </div>
                </div>
              </div>
            </div>
            <Row id="timeline-heading" className="justify-content-md-center pt-5">
              Project Timeline
              </Row>
            <Row className="justify-content-md-center">
              
              <Timeline />
            </Row>
            <Row className="justify-content-md-center pt-5 pb-5">
               <Col md={{ span: 4, offset: 0 }}>
                 <h2>Join the Waitlist for early access</h2>
                 <span> <Button variant="primary">Join</Button>{' '}</span>
               </Col>
             </Row>
          </main>
         </Container>
      
       
         {/*  <Footer/> */}
        
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
