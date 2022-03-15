// something about Footer.js was breaking the Netlify Build, testing as new component

import React from 'react';

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Footie = () => (
    
    <Row className="justify-content-md-center pt-5 pb-5">
               this is footie
             </Row>
);

export default Footie;