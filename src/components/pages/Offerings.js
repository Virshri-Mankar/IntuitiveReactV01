import React from "react";
import { useState } from "react";
import OfferingStyle from "../Css/OfferingStyle.css";
import Service1 from './Service1';
// import ReactWOW from 'react-wow';

function Offerings() {
  const [show, setShow] = useState(true);

  const showAlert = () => {
    alert("I'm an alert");
  }
    
  return (
    <section className="lifeAtIntui mrt40 bgColor pdTnB" id="offerDisplay">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className=" basicheading">Offerings </div>
            <p className="lead1 mrt15">
              We are experts in complex multi-vendor solutions & support the
              broadest range of technologies, managed services and security in
              the industry. These allow us to deliver the highest level of
              service in the hosting industry with unmatched reliability,
              security, flexibility & integrity.
            </p>
          </div>
        </div>

        <div className="row offerPoints">
          <div className="col-md-6 ">
            <ul className="list-group ml-auto" data-aos="fade-left">
              <li className="list-group-item life-item" id="offeringPt1" onClick={showAlert}>
                <img
                  src="./images/newBsic/App Developemnt.png"
                  alt="abc"
                  height="50px"
                  width="50px"
                  className="mrr10"
                  loading="lazy"
                />
                Application Development
              </li>
              <li className="list-group-item life-item" id="offeringPt2" onClick={() => setShow(!show)}>
              
           
              {show ? <Service1 /> : null}
                <img
                  src="./images/newBsic/batch_opti_img.jpg"
                  alt="abc"
                  height="50px"
                  width="50px"
                  className="mrr10"
                  loading="lazy"
                />
                Batch Optimisation
              </li>
              <li className="list-group-item life-item" id="offeringPt3">
                <img
                  src="./images/newBsic/Data Visualization transparent.jpeg"
                  alt="abc"
                  height="50px"
                  width="50px"
                  className="mrr10"
                  loading="lazy"
                />
                Data Visualization
              </li>

              <li className="list-group-item life-item" id="offeringPt4">
                <img
                  src="./images/newBsic/Data Migration 1.png"
                  alt="abc"
                  height="50px"
                  width="50px"
                  className="mrr10"
                  loading="lazy"
                />
                Data Migration
              </li>
              <li className="list-group-item life-item" id="offeringPt5">
                <img
                  src="./images/newBsic/Data Management.jpeg"
                  alt="abc"
                  height="50px"
                  width="50px"
                  className="mrr10"
                  loading="lazy"
                />
                Data Management
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul className="list-group ml-auto" data-aos="fade-right">
              <li className="list-group-item life-item" id="offeringPt6">
                <img
                  src="./images/newBsic/Data Analytics.png"
                  alt="abc"
                  height="50px"
                  width="50px"
                  className="mrr10"
                  loading="lazy"
                />
                Big Data Analytics
              </li>
              <li className="list-group-item life-item" id="offeringPt7">
                <img
                  src="./images/newBsic/Data Consulting.jpeg"
                  alt="abc"
                  height="50px"
                  width="50px"
                  className="mrr10"
                  loading="lazy"
                />
                Data Consulting
              </li>
              <li className="list-group-item life-item" id="offeringPt8">
                <img
                  src="./images/newBsic/Data Monetisation 1.jpeg"
                  alt="abc"
                  height="50px"
                  width="50px"
                  className="mrr10"
                  loading="lazy"
                />
                Data Monetization
              </li>
              <li className="list-group-item life-item" id="offeringPt9">
                <img
                  src="./images/newBsic/Data Sense.png"
                  alt="abc"
                  height="50px"
                  width="50px"
                  className="mrr10"
                  loading="lazy"
                />
                Data Sense
              </li>
              <li className="list-group-item life-item" id="offeringPt10">
                <img
                  src="./images/newBsic/Data Modernisation.png"
                  alt="abc"
                  height="50px"
                  width="50px"
                  className="mrr10"
                  loading="lazy"
                />
                Data Modernization In Cloud
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offerings;
