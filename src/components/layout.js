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
        <Container fluid className="">
          <main>
          
             <Row className="justify-content-md-center">
               <Col md={{ span: 4, offset: 0 }}>
                 <h1>Hero Heading</h1>
                 <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
               </Col>
             </Row>

             







             <Row className="justify-content-md-center">
             <div class="row row-cols-1 row-cols-md-6">
             <img id="p1" align="" src="https://via.placeholder.com/150/0000FF/808080" width={300} height={300} />
                 <img id="p2" align="" src="https://via.placeholder.com/150/FF0000/FFFFFF" width={450} height={450} />
                 <img id="p3" align="" src="https://via.placeholder.com/150/FFFF00" width={400} height={250} />
                 <img id="p4" align="" src="https://via.placeholder.com/150/000000" width={300} height={500} />
                 <img id="p5" align="" src="https://via.placeholder.com/150/0000FF/808080" width={300} height={300} />
                 <img id="p6" align="" src="https://via.placeholder.com/150/FF0000/FFFFFF" width={400} height={400} />
               </div>


             
             </Row>
             <Row className="justify-content-md-center">
               <Col md={{ span: 4, offset: 0 }}>
                 <div class="card card-map">
                   <div class="card-body">
                     <h2>Heading</h2>
                     <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                   </div>
                 </div>
               </Col>
             </Row>
             <Row className="justify-content-md-center">
               <Col md={{ span: 4, offset: 0 }}>
                 <div class="card card-map">
                   <div class="card-body">
                     <h2>Heading</h2>
                     <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                   </div>
                 </div>
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
