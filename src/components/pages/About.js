import React from "react";
// import {Link} from 'react-router-dom';
// import slider2 from "../images/slider2.jpg";aboutUsS1
import aboutUsS1 from "../images/aboutUsS1.jpg";
import AboutStyle from "../Css/AboutStyle.css";
// import HomeImg from './HomeImg';


function About() {
  return (
    <section className="about_us mrt40 " id="aboutSec">
        <div className="container">
          {/*<div className="row ">
          <HomeImg/>
          </div>*/}
          
          <div className="row ">
            <div className="flexAbout">
              <div   className="leftSideImage ">
                  <img src={aboutUsS1} alt="About INTUITIVE"  className="mh-100 mw-100 lazy-img img-fluid" loading="lazy" />
              </div>
  
              <div className=" contentMr">
                <div className=" basicheading">About Us</div>
                <p className="lead1 ">Intuitive has exemplified what it means to go an ‘Extra Mile’ for customers. We made a conscious decision to focus first and foremost on our clients’ satisfaction instead of driving stakeholder value and profits.</p>
                <p className="lead1">We give interpretation to your ideas and develop them into software products. We give life to your dreams.</p>
              </div>
            </div>
            
          </div>
        </div>
    </section>

  );
}

export default About;
