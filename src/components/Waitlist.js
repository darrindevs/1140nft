import React from 'react';

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Waitlist = () => (
    <Row className="justify-content-md-center pt-5 pb-5">
        <Col md={{ span: 4, offset: 0 }}>
            <h2>Join the Waitlist for early access</h2>
            <span> <Button variant="primary">Join</Button>{' '}</span>
        </Col>
    </Row>
);

export default Waitlist;