import * as React from "react"
import { Navbar } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'

// assets 
// https://docs.opensea.io/docs/logos 

const NavDark = (
    <Navbar bg="" expand="lg" className="navbar-dark">
      <Navbar.Brand href="#home" className="brando ms-3">1140nft</Navbar.Brand>
      <Navbar.Toggle className="me-3 custom-toggler"/>
      <Navbar.Collapse className="justify-content-end me-3">
        <Navbar.Text className="text-white ms-3">
         <span className="nav-item me-3">whitepaper</span>
         <span className="nav-item me-3"><a href=""><img className="nav-icon" src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png"/></a></span>
         <span className="nav-item me-3"><a href=""><img className="nav-icon" src="https://zno.s3.us-west-1.amazonaws.com/twitter-white.png"/></a></span>
         <span className="nav-item me-3">twitter</span>
         <span className="nav-item me-3">discord</span>
        
        </Navbar.Text>
      </Navbar.Collapse>
  </Navbar>
)

export default NavDark
