import React from 'react';

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Hero = () => (
    
    <Row className="justify-content-md-center pt-5 pb-5">
               <Col md={{ span: 6, offset: 0 }}>
                 <h1 className="1140">1140nft</h1>
                 <h3>The world's first nft funded real estate development.</h3>
                 <p>1140NFT is an innovative NFT project that shares the value of real world real estate with the NFT holders. The NFT funds the development of properties in Los Angeles into rental and resale properties. The NFT holders will have member access to the properties and share in rental and resale revenues. 
                </p>
                
                 <span> <Button variant="outline-primary">Follow Us</Button>{' '}</span>
               </Col>
             </Row>
);

export default Hero;