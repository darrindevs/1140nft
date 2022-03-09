import * as React from "react"
import { Navbar } from 'react-bootstrap'
import { Link } from "gatsby"
// import { Container } from 'react-bootstrap'

// assets 
// https://docs.opensea.io/docs/logos 


// Font Awesome 
// https://www.youtube.com/watch?v=BbF-2o__5Xo 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons"
// use it like this  <FontAwesomeIcon icon={faUser} size="10x" />



const NavDark = (
    <Navbar bg="" expand="lg" className="navbar-dark">
      <Navbar.Brand href="#home" className="brando ms-3">1140nft</Navbar.Brand>
      <Navbar.Toggle className="me-3 custom-toggler"/>
      <Navbar.Collapse className="justify-content-end me-3">
        <Navbar.Text className="text-white ms-3">
        <Link to="/page-2/">Go to page 2</Link>
        <span></span>
         <span className="nav-item me-3"><i class="fa-solid fa-user"></i></span>
         <span class="fa-solid fa-user"></span>
         <span className="nav-item me-3"><a href=""><img className="nav-icon mb-1" src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg"/></a></span>
         <span className="nav-item me-4"><a href=""><FontAwesomeIcon icon={faTwitter} className="fa-icon fa-xl"/></a></span>
         <span className="nav-item me-3"><a href=""><FontAwesomeIcon icon={faDiscord} className="fa-icon fa-xl"/></a></span>
        </Navbar.Text>
      </Navbar.Collapse>
  </Navbar>
)

export default NavDark
