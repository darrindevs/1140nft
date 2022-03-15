// something about Footer.js was breaking the Netlify Build, testing as new component

import React from 'react';

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Footie = () => (
    <div className="footie">
      <h6 className="small">© 1140nft 2022</h6>
    </div>
);

export default Footie;