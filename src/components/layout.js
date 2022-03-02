/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// react-vertical-timeline-component
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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
          
             <Row className="justify-content-md-center pt-5 pb-5">
               <Col md={{ span: 4, offset: 0 }}>
                 <h1>Hero Heading</h1>
                 <h3>A Sub Heading</h3>
                 <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                 <span> <Button variant="outline-primary">Follow Us</Button>{' '}</span>
                 <span> <Button variant="outline-primary">Join Discord</Button>{' '}</span>
               </Col>
             </Row>

            <div className="blockgrid">
              <div className="blocks">
                <div className="b1">
                  <div className="b1inner">
                    block1
                  </div>
                </div>
                <div className="b2">
                  <div className="b2inner">
                    block 2
                  </div>
                </div>
                <div className="b3">
                  <div className="b3inner">
                    block 3
                  </div>
                </div>
                <div className="b4">
                  <div className="b4inner">
                    block 5
                  </div>
                </div>
                <div className="b5">
                  <div className="b5inner">
                    block 5
                  </div>
                </div>
                <div className="b6">
                  <div className="b6inner">
                    block 6
                  </div>
                </div>
              </div>
            </div>


             <Row className="">

              <Col> <img id="p1" align="" src="https://via.placeholder.com/150/0000FF/808080" width={300} height={300} /></Col>
              <Col><img id="p2" align="" src="https://via.placeholder.com/150/FF0000/FFFFFF" width={450} height={450} /></Col>
              <Col><img id="p3" align="" src="https://via.placeholder.com/150/FFFF00" width={400} height={250} /></Col>
              <Col><img id="p4" align="" src="https://via.placeholder.com/150/000000" width={300} height={500} /></Col>
              <Col><img id="p5" align="" src="https://via.placeholder.com/150/0000FF/808080" width={300} height={300} /></Col>
              <Col> <img id="p6" align="" src="https://via.placeholder.com/150/FF0000/FFFFFF" width={400} height={400} /></Col>
             </Row>

             
             



            










             <Row className="justify-content-md-center pb-5">
             <div class="row row-cols-1 row-cols-md-3 mb-5">
                  <img id="p5" align="" src="https://zno.s3.us-west-1.amazonaws.com/la2.jpeg" width={300} height={300} />    
                 
                 {/*<img id="p2" align="" src="https://via.placeholder.com/150/FF0000/FFFFFF" width={450} height={450} />*/}
                 <img id="p3" align="" src="https://zno.s3.us-west-1.amazonaws.com/blueprint1.jpeg" width={300} height={300} />
                 <img id="p1" align="" src="https://zno.s3.us-west-1.amazonaws.com/sofi1.jpeg" width={300} height={300} />
                 
                 
               </div>
               <div class="row row-cols-1 row-cols-md-4 justify-content-center">
                 <img id="p4" align="" src="https://zno.s3.us-west-1.amazonaws.com/glucas1.jpeg" width={300} height={300} />
                 <img id="p6" align="" src="https://zno.s3.us-west-1.amazonaws.com/clippers1.jpeg" width={300} height={300} />
               </div>


             
             </Row>
             
             <Row className="justify-content-md-center pt-5">
               <Col md={{ span: 4, offset: 0 }}>
                 <h2>Roadmap</h2>
                 {/* https://www.npmjs.com/package/react-vertical-timeline-component */}
                 <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '', color: '' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="2022"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      //icon={<WorkIcon />}
                      >
                      <h5 className="vertical-timeline-element-title">Timeline Event</h5>
                      <h6 className="vertical-timeline-element-subtitle pt-3">A subtitle</h6>
                      <p>
                        Blah blah blah
                      </p>
                    </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2022"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      //icon={<WorkIcon />}
                    >
                    <h5 className="vertical-timeline-element-title">Timeline event</h5>
                    <h6 className="vertical-timeline-element-subtitle pt-3">A subtitle</h6>
                    <p>
                      Blah blah blah
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '', color: '' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="2022"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      //icon={<WorkIcon />}
                      >
                      <h5 className="vertical-timeline-element-title">Timeline Event</h5>
                      <h6 className="vertical-timeline-element-subtitle pt-3">A subtitle</h6>
                      <p>
                        Blah blah blah
                      </p>
                    </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2022"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      //icon={<WorkIcon />}
                    >
                    <h5 className="vertical-timeline-element-title">Timeline event</h5>
                    <h6 className="vertical-timeline-element-subtitle pt-3">A subtitle</h6>
                    <p>
                      Blah blah blah
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '', color: '' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="2022"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      //icon={<WorkIcon />}
                      >
                      <h5 className="vertical-timeline-element-title">Timeline Event</h5>
                      <h6 className="vertical-timeline-element-subtitle pt-3">A subtitle</h6>
                      <p>
                        Blah blah blah
                      </p>
                    </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2022"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      //icon={<WorkIcon />}
                    >
                    <h5 className="vertical-timeline-element-title">Timeline event</h5>
                    <h6 className="vertical-timeline-element-subtitle pt-3">A subtitle</h6>
                    <p>
                      Blah blah blah
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '', color: '' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="2022"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      //icon={<WorkIcon />}
                      >
                      <h5 className="vertical-timeline-element-title">Timeline Event</h5>
                      <h6 className="vertical-timeline-element-subtitle pt-3">A subtitle</h6>
                      <p>
                        Blah blah blah
                      </p>
                    </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2022"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      //icon={<WorkIcon />}
                    >
                    <h5 className="vertical-timeline-element-title">Timeline event</h5>
                    <h6 className="vertical-timeline-element-subtitle pt-3">A subtitle</h6>
                    <p>
                      Blah blah blah
                    </p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
               </Col>
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
