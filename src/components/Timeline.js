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
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

const Timeline = () => (
    
    <>
    <Row id="timeline-heading" className="justify-content-md-center pt-5">
        Project Timeline!
    </Row>
    <Row className="justify-content-md-center">
    <div className='timeline-container'>
       <div className="timeline-item">
           <div className="timeline-item-content">
               
               
               <h6><span className="badge bg-dark">Phase 1</span></h6>
               
               <ul>
                   <li><FontAwesomeIcon icon={faCoffee} className="fa-icon fa-regular fa-xs"/>Land Acquisition, Geotechnical Survey, Boundary Survey, Alley Dedication Waiver, Certificate of Compliance, Fire Hydrant Flow Rate Certification
<sup><span className="badge rounded-pill bg-success ms-3">Complete</span></sup></li>
                   <li><FontAwesomeIcon icon={["fal", "coffee"]} />thing</li>
                   <li><FontAwesomeIcon icon={["fab", "github"]} />thing</li>
               </ul>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
               <span className="tag">tag</span>
               <time>time</time>
               <p>text</p>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
               <span className="tag">tag</span>
               <time>time</time>
               <p>text</p>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
               <span className="tag">tag</span>
               <time>time</time>
               <p>text</p>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
               <span className="tag">tag</span>
               <time>time</time>
               <p>text</p>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
               <span className="tag">tag</span>
               <time>time</time>
               <p>text</p>
               <span className="circle"></span>
           </div>
       </div> 
   </div>
    </Row>
    
    
    </>
    
    
);

export default Timeline;