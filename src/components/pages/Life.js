import React from 'react';
import LifeStyle from "../Css/LifeStyle.css";
// import WOW from 'wowjs';

function Life() {
  
  return (
    
    <div className="lifeAtIntui mrt40 bgColor pdTnB" id="lifeDisplay">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className=" basicheading">Life at INTUITIVE </div>
              <p className="lead1 mrt15">We recognize that happy & healthy employees foster the right kind of environment for organizational success. We provide benefits to our employees and their families conducive to physical, financial and emotional well-being.</p>
            </div>
          </div>
  
          <div className="row lifePoints">
            <div className="col-md-8">
              <div className=" mrt20">
              
              <ul class="list-group">
                <li class="list-group-item ">Work from anywhere</li>
                <li class="list-group-item  ">Flexible working hours</li>
                <li class="list-group-item  ">Peer learning platform</li>
                <li class="list-group-item  ">Training and Upskilling</li>
                <li class="list-group-item  ">Medical Insurance for employee & dependents</li>
              </ul>
              </div>   
            </div>
          </div> 
  
        </div>
    </div>
      
    
  )
}

export default Life

