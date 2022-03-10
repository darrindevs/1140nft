import React from 'react';

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Hero = () => (
    
    <Row className="justify-content-md-center pt-5 pb-5">
               <Col md={{ span: 4, offset: 0 }}>
                 <h1>Hero Heading</h1>
                 <h3>A Sub Heading</h3>
                 <p>Hexagon brunch vape bitters actually post-ironic. YOLO vaporware flannel kogi, subway tile trust fund direct trade chicharrones vegan kitsch fashion axe bushwick. Hexagon farm-to-table disrupt blog intelligentsia flannel sriracha gentrify meggings. Tacos put a bird on it offal, iceland enamel pin 90's next level readymade seitan narwhal brooklyn polaroid copper mug try-hard gochujang. Mlkshk selfies YOLO, lyft meditation brooklyn hoodie live-edge viral man bun. Af farm-to-table shaman, subway tile la croix thundercats pickled.</p>
                 <span> <Button variant="outline-primary">Follow Us</Button>{' '}</span>
                 <span> <Button variant="outline-primary">Join Discord</Button>{' '}</span>
               </Col>
             </Row>
);

export default Hero;