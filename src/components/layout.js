/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


//import Header from "./header"
//import NavDark from "./nav-dark"
import NavLight from "./nav-light"
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
import { Media } from 'react-bootstrap'




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
      {NavLight}
      {/* Custom Container */}
        <Container>
          <main>
            {/* Row 1 */}
            <div className="section-1">
              <Row className="row-1">
                <Col>
              <h1>Fractionalized <span className="blue">Real World</span> Real Estate Investing</h1>
              <h2>Sub Headline</h2>
              <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                  <span> <Button variant="outline-primary">Follow Us</Button>{' '}</span>
                  <span> <Button variant="outline-primary">Join Discord</Button>{' '}</span>
                </Col>
                <Col xs={4}>An image that fills the entire column x and y</Col>
              </Row>
            </div>
           
             {/* Row 2 */}
             <div className="section-1">
              <Row className="row-2">
               <h2>A Heading</h2>
                <Col>
                  <p>
                  Poke hexagon keytar post-ironic echo park chambray humblebrag coloring book kitsch woke. Mustache whatever man braid salvia poke meditation kickstarter cred, locavore try-hard pork belly cornhole tbh roof party sriracha. 
                  </p>
                </Col>
                <Col>
                  <p>
                   3 wolf moon gluten-free man bun blue bottle disrupt adaptogen try-hard neutra stumptown mixtape. Retro butcher artisan typewriter, lumbersexual brooklyn vape listicle. Bicycle rights letterpress la croix PBR&B literally.
                  </p>
                </Col>
              </Row>
             </div>
             
             {/* Row 3 - the yellow box */}
            <div className="box-1">
            </div>
             {/* Row 5 */}
             <div className="section-1">
              <Row className="box-2">
                <h2>A Heading</h2>
                <Col>
                  <h6><span className="me-3">⭐️</span> media object </h6>
                  <h6><span className="me-3">⭐️</span> media object </h6>
                  <h6><span className="me-3">⭐️</span> media object </h6>
                  <h6><span className="me-3">⭐️</span> media object </h6>
                </Col>
                <Col>
                  <h6><span className="me-3">⭐️</span> media object </h6>
                  <h6><span className="me-3">⭐️</span> media object </h6>
                  <h6><span className="me-3">⭐️</span> media object </h6>
                <span> <Button variant="outline-primary">Do Something</Button>{' '}</span>
                </Col>
              </Row>
             </div>
             <div>
               <Row>
                 <h2>A Heading</h2>
                 
               </Row>
             </div>
            
            
           
            
          </main>
        </Container>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
