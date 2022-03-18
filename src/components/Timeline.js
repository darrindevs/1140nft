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
//import {  } from '@fortawesome/pro-solid-svg-icons'
//import {  } from '@fortawesome/pro-regular-svg-icons'
//import {  } from '@fortawesome/pro-light-svg-icons'
//import {  } from '@fortawesome/pro-thin-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faSignHanging, faRulerCombined, faFileCertificate, faHandshakeSimple, faCompassDrafting, faFileContract, faShovel, faStars, faFootball, faTrainSubway, faSwordsLaser, faLocationDot, faBasketball  } from '@fortawesome/pro-duotone-svg-icons'



const Timeline = () => (
    
    <>
    <Row id="timeline-heading" className="justify-content-md-center pt-5">
        Project Timeline!
    </Row>
    <Row className="justify-content-md-center">
    <div className='timeline-container'>
       <div className="timeline-item">
           <div className="timeline-item-content">
               <h6><span className="badge bg-dark mb-3">Phase 1</span><span className='phase-label completed ms-3'>Completed</span></h6>
               <h5 className="ms-2"><FontAwesomeIcon icon={faSignHanging} className="fa-xs me-2"/>Land Acquisition<span className="badge rounded-pill bg-success ms-3 timeline-badge">Complete</span></h5>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faRulerCombined} className="fa-xs me-2"/>Geotechnical Survey, Boundary Survey, Alley Dedication Waiver<span className="badge rounded-pill bg-success ms-3 timeline-badge">Complete</span></h5>
              
               <span className="circle"></span>
           </div>
       </div>
       
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-3">Area Events</span><span className='phase-label ms-3'>Feb 2022</span></h6>
               <h5 className="ms-2 event-name"><FontAwesomeIcon icon={faFootball} className="fa-xs me-2"/>Superbowl LVI &middot; SoFi Stadium</h5>
               <span className="event-meta"><span></span><FontAwesomeIcon icon={faLocationDot} className="fa-xs ms-3 me-1"/>3 miles away</span>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
               <h6><span className="badge bg-dark mb-3">Phase 1</span><span className='phase-label completed ms-3'>Completed</span></h6>
               
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faFileCertificate} className="fa-xs me-2"/>Certificate of Completion, Fire Hydrant Flow Rate Certification<span className="badge rounded-pill bg-success ms-3 timeline-badge">Complete</span></h5>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faHandshakeSimple} className="fa-xs me-2"/>AMK Design Partnership<span className="badge rounded-pill bg-success ms-3 timeline-badge">Complete</span></h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-dark mb-3">Phase 2</span><span className='phase-label ms-3'>Summer 2022</span></h6>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faEthereum} className="fa-xs me-2"/>NFT Launch</h5>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faEthereum} className="fa-xs me-2"/>NFT Holders Start Accruing Points</h5>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-3">Area Events</span><span className='phase-label ms-3'>Nov 2022</span></h6>
               <h5 className="ms-2 event-name"><FontAwesomeIcon icon={faTrainSubway} className="fa-xs me-2"/>Metro Crenshaw Line Opening</h5>
               <span className="event-meta"><span></span><FontAwesomeIcon icon={faLocationDot} className="fa-xs ms-3 me-1"/>2 miles away</span>
               
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-dark mb-3">Phase 2</span><span className='phase-label ms-3'>2022</span></h6>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faCompassDrafting} className="fa-xs me-2"/>Design, Architecture, and Engineering</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-3">Area Events</span><span className='phase-label ms-3'>2023</span></h6>
               
               <h5 className="ms-2 mt-2 event-name"><FontAwesomeIcon icon={faSwordsLaser} className="fa-xs me-2"/>Lucas Museum of Narrative Arts Opening</h5>
               <span className="event-meta"><span></span><FontAwesomeIcon icon={faLocationDot} className="fa-xs ms-3 me-1"/>3 miles away</span>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-dark mb-3">Phase 2</span><span className='phase-label ms-3'>2023</span></h6>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faFileContract} className="fa-xs me-2"/>Entitlement and Permitting</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-dark mb-3">Phase 2</span><span className='phase-label ms-3'>2023</span></h6>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faShovel} className="fa-xs me-2"/>Construction</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-3">Area Events</span><span className='phase-label ms-3'>2024</span></h6>
               <h5 className="ms-2 event-name"><FontAwesomeIcon icon={faBasketball} className="fa-xs me-2"/>Clippers Intuit Dome Opening</h5>
               <span className="event-meta"><span></span><FontAwesomeIcon icon={faLocationDot} className="fa-xs ms-3 me-1"/>3 miles away</span>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-dark mb-3">Phase 3</span></h6>
           <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faStars} className="fa-xs me-2"/>DAO Launch</h5>
           <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faStars} className="fa-xs me-2"/>Rental Revenue Profit Sharing</h5>
           <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faStars} className="fa-xs me-2"/>Member Accommodation</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-dark mb-3">Phase 4</span><span className='phase-label acquisition ms-3'>Acquisition</span></h6>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faEthereum} className="fa-xs me-2"/>Additional Property Acquisition</h5>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faEthereum} className="fa-xs me-2"/>Further Property Development</h5>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faEthereum} className="fa-xs me-2"/>Rental Revenue Profit Sharing</h5>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faEthereum} className="fa-xs me-2"/>Member Accomodation</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-3">Area Events</span></h6>
               <h5 className="ms-2 event-name"><FontAwesomeIcon icon={faBasketball} className="fa-xs me-2"/>Clippers Intuit Dome Opening</h5>
               <span className="event-meta"><span>2024</span><FontAwesomeIcon icon={faLocationDot} className="fa-xs ms-3 me-1"/>3 miles away</span>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-dark mb-3">Phase 4</span><span className='phase-label acquisition ms-3'>Liquidation</span></h6>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faEthereum} className="fa-xs me-2"/>Select Properties Will Be Sold</h5>
               <h5 className="ms-2 mt-2"><FontAwesomeIcon icon={faEthereum} className="fa-xs me-2"/>Profit Sharing With Members</h5>
               
               <span className="circle"></span>
           </div>
       </div>
       
   </div>
    </Row>
    
    
    </>
    
    
);

export default Timeline;