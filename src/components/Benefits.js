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
            
                <Row>
                    <Col></Col>
                    <Col md={{ span: 10, offset: 0 }}>
                    <div className="mb-5">
                    <h2 className='mb-3'>The Long-Term Value NFT</h2>
                    <p className='benefits-p'>1140nft is a long-term capital project that will reward early investors exponentially. </p>
                    <p>NFT holders earn points toward 1140DAO every day that they hold the token in their wallet. 1140DAO will provide members with long-term recurring passive income opportunities.</p>
                    </div>
                    </Col>
                    <Col></Col>
                </Row>
               <Container>
                    <Row>
                        <Col xl={{ span: 3, offset: 0 }}>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Innovative Model</h4>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Real World Value</h4>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Limited Supply</h4>
                        </Col>
                        <Col xl={{ span: 4, offset: 0 }}>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Member DAO</h4>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Voting + Governance</h4>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Points Leaderboard</h4>
                        
                            </Col>
                        <Col xl={{ span: 5, offset: 0 }}>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Rental Income Profit Sharing</h4>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>Resale Income Profit Sharing</h4>
                        <h4 className="ms-2 bennys"><FontAwesomeIcon icon={faCircleDot} className="fa-xs me-2 benicon"/>IRL Property Access</h4>
                        
                        </Col>
                        
                        
                    </Row>
                </Container>
               </div>
        </Col>
    </Row>
);

export default Benefits;