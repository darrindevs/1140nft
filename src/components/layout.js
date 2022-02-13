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
//import { Media } from 'react-bootstrap'
import { Card } from 'react-bootstrap'




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
      {/* Container 1 */}
        <Container fluid className="container-1">
          <main>
            {/* Row 1 */}
            <Row className="justify-content-md-center">
              <Col md={{ span: 6, offset: 0 }}>
                <div class="card card-map">
                  <div class="card-body">
                    <h1>Fractionalized <span className="blue">Real World</span> Real Estate Investing</h1>
                    <h2>Hero</h2>
                    <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                    <span> <Button variant="outline-primary">Follow Us</Button>{' '}</span>
                    <span> <Button variant="outline-primary">Join Discord</Button>{' '}</span>
                  </div>
                </div>
              </Col>
            </Row>
             
              </main>
         </Container>
         {/* Container 1 */}
        <Container fluid className="container-11">
         
              {/* Row 3 */}
              <Row>
                <Col md={{ span: 5, offset: 3 }}>
                  <div class="card">
                    <div class="card-body">
                      <h2>Heading</h2>
                      <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                    </div>
                  </div>
                </Col>
              </Row>
             {/* Row 4 */}
             <Row>
              <Col md={{ span: 5, offset: 4 }}>
                <div class="card">
                  <div class="card-body">
                    <h2>Heading</h2>
                    <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                  </div>
                </div>
              </Col>
              </Row>
               {/* Row 3 */}
               <Row>
                <Col md={{ span: 5, offset: 3 }}>
                  <div class="card">
                    <div class="card-body">
                      <h2>Heading</h2>
                      <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                    </div>
                  </div>
                </Col>
              </Row>
              

        </Container>
         {/* Container 2 */}
         <Container fluid className="container-2">
         <Row>
              <Col md={{ span: 3, offset: 1 }}>
                <div class="card card-map">
                  <div class="card-body">
                    <h2>Heading</h2>
                    <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                  </div>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 0 }}>
              <div class="card card-map">
                  <div class="card-body">
                    <h2>Heading</h2>
                    <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                  </div>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 0 }}>
              <div class="card card-map">
                  <div class="card-body">
                    <h2>Heading</h2>
                    <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md={{ span: 3, offset: 0 }}>
                <div class="card card-map">
                  <div class="card-body">
                    <h2>Heading</h2>
                    <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                  </div>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 0 }}>
              <div class="card card-map">
                  <div class="card-body">
                    <h2>Heading</h2>
                    <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                  </div>
                </div>
              </Col>
            </Row>
          
        </Container>
             {/* Container 3 */}
            <Container fluid className="container-3">
            <Row className="justify-content-md-center">
            <Col md={{ span: 6, offset: 0 }}>
                <div class="card card-alt">
                  <div class="card-body">
                    <h2>Heading</h2>
                    <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                  </div>
                </div>
              </Col>
              </Row>
              <Row className="justify-content-md-center">
            <Col md={{ span: 6, offset: 0 }}>
                <div class="card card-alt">
                  <div class="card-body">
                    <h2>Heading</h2>
                    <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                  </div>
                </div>
              </Col>
              </Row>
              <Row className="justify-content-md-center">
            <Col md={{ span: 6, offset: 0 }}>
                <div class="card card-alt">
                  <div class="card-body">
                    <h2>Heading</h2>
                    <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                  </div>
                </div>
              </Col>
              </Row>
            

            </Container>
            <Container fluid className="container-5">
              <Row className="justify-content-md-center">
                <ul>
                  <li>Intro</li>
                  <li>About Mint</li>
                  <li>Community</li>
                  <li>Roadmap</li>
                  <li>Team</li>
                  <li>Mint CTA</li>
                  <li>Value Add</li>
                  <li>FAQs</li>
                </ul>
              </Row>
            </Container>
            <Container fluid className="container-6">

            </Container>
       
         {/*  <Footer/> */}
        
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
