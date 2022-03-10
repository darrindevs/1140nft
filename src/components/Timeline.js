import React from 'react';

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Timeline = () => (
    
    <>
    <Row id="timeline-heading" className="justify-content-md-center pt-5">
        Project Timeline
    </Row>
    <Row className="justify-content-md-center">
    <div className='timeline-container'>
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