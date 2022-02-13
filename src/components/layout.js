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
            <div className="block" id="Intro">
              <Row>
               <h2>Intro</h2>
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
             <div className="block" id="mint">
               <Row>
                <h2>About Mint</h2>
               </Row>
             </div>
             <div className="block" id="community">
               <Row>
                <h2>Community</h2>
               </Row>
             </div>
             <div className="block" id="roadmap">
               <Row>
                <h2>Roadmap</h2>
               </Row>
             </div>
             <div className="block" id="Team">
               <Row>
                <h2>Team</h2>
               </Row>
             </div>
             <div className="block" id="mint-cta">
               <Row>
                <h2>Mint CTA</h2>
               </Row>
             </div>
             <div className="block" id="value-add">
               <Row>
                <h2>Value Add</h2>
               </Row>
             </div>
             <div className="block" id="faq">
               <Row>
                <h2>FAQs</h2>
               </Row>
             </div>

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
                  <li>Value</li>
                  
                </ul>
              </Row>
            </Container>
       
         {/*  <Footer/> */}
        
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
