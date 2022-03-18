// something about Footer.js was breaking the Netlify Build, testing as new component

import React from 'react';

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Footie = () => (
    <div className="footie">
      <span>
      <span className="small">© 1140nft 2022</span>
      <span className="small ms-3">Built by <a href="https://dynamo.dev" target="_blank"><strong>Dynamo</strong></a></span>
      </span>
    </div>
);

export default Footie;