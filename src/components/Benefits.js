import React from 'react';

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

// Font Awesome 
// https://www.youtube.com/watch?v=BbF-2o__5Xo 
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {  } from '@fortawesome/free-solid-svg-icons'
//import {  } from '@fortawesome/free-regular-svg-icons'
import { faCircleDot } from '@fortawesome/pro-solid-svg-icons'
//import {  } from '@fortawesome/pro-regular-svg-icons'
//import {  } from '@fortawesome/pro-light-svg-icons'
//import {  } from '@fortawesome/pro-thin-svg-icons'
//import {  } from '@fortawesome/free-brands-svg-icons'
//import {  } from '@fortawesome/pro-duotone-svg-icons'

const Benefits = () => (
    
    <Row id="benefits" className="justify-content-md-center pt-5 pb-5">
        <Col md={{ span: 5, offset: 0 }}>
            <div id="benefits-content">
            <div class="d-flex justify-content-center">
                <h3 className='mb-5'>The Long Term Value NFT</h3>
            </div>
                
               <Container>
                    <Row>
                        <Col md="">
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Innovative Model</h4>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Real World Value</h4>
                        </Col>
                        <Col md="">
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Limited Supply</h4>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Member DAO</h4>
                        
                            </Col>
                        <Col md="">
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Profit Sharing</h4>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Member IRL Access</h4>
                        
                        </Col>
                        
                        
                    </Row>
                </Container>
               </div>
        </Col>
    </Row>
);

export default Benefits;