import React from 'react';

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Hero = () => (
    
    <Row id="hero" className="justify-content-md-center pt-5 pb-5">
               <Col md={{ span: 5, offset: 0 }}>
                 <h1 className="1140">1140nft</h1>
                 <h2 id="tagline" className='mb-3 mt-3'><span>The World's First NFT Funded</span><br></br><span>Real Estate Development</span> </h2>
                 <p>1140nft is an innovative NFT project that shares the value of real world real estate with the holders. The NFT funds the development of properties in Los Angeles into rental and resale properties. The NFT holders will have member access to the properties and share in rental and resale revenues. 
                </p>
                
                <a href="/whitepaper" className="text-white"><button type="button" class="btn btn-primary mt-5">Read the Whitepaper</button></a>
                
                {/*
                <a className="link" href='/whitepaper'>Read the whitepaper</a>
                <div id="launching"><span className="badge bg-primary mb-2"><h5>NFT Launch Summer 2022</h5></span></div>
                */}
                
                 
                 
               </Col>
             </Row>
);

export default Hero;