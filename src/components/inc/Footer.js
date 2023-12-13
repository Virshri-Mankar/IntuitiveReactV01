import React from 'react';
import FooterStyle from '../inc/FooterStyle.css';
import slider2 from "../images/slider2.jpg";
import LogoIT from "../images/LogoIT.png";

function Footer() {
  return (
    
    <footer id="footer" className="section-footer mrt80">
        <div className="footer-top">
            <div className="container-fluid">
                <div className="row">
        
                    <div className="col-lg-3 col-md-6 footer-info borderRgt">
                        <div className="v-foot-logo " >
                        <a href="./index.html"><img src={LogoIT} alt="logo" loading="lazy" />&nbsp; </a><br/>
                        <div className="footName"> <a href="./index.html">Intuitive IT Solutions</a> </div> 
                        </div>
                       
                        
                        
                    </div>
                    <div className="col-lg-3 col-md-6 footer_newsletter borderRgt">
                        <h4>CONTACT US</h4>
                    
                        <div className="social-links mt-3">
                          <div>
                              <p><span><i className="fa fa-solid fa-phone"></i></span>&nbsp;&nbsp;  <a href="tel:+919730200667"> +91 9730200667</a></p>
                          </div>
                              
                          <div>
                              <p><span><i className="fa fa-envelope"></i></span> &nbsp;&nbsp; <a href="mailto:info@intuitiveitsolution.com">info@intuitiveitsolution.com</a></p>
                          </div>   

                          
                      
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links borderRgt">
                        <h4>USEFUL LINKS</h4>
                        <ul>
                        <li><span><i className="fa fa-arrow-right"></i></span> &nbsp;&nbsp; <a href="#nav1">Home</a></li>
                        <li><span><i className="fa fa-arrow-right"></i></span> &nbsp;&nbsp; <a href="#aboutSec">About Us</a></li>
                        <li><span><i className="fa fa-arrow-right"></i></span> &nbsp;&nbsp; <a href="#offerDisplay">Offering</a></li>
                        <li><span><i className="fa fa-arrow-right"></i></span> &nbsp;&nbsp; <a href="#contactSection">Contact Us</a></li>
                        </ul>
                    </div>
            
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>OFFERINGS</h4>
                        <ul>
                        <li><span><i className="fa fa-arrow-right"></i></span> &nbsp;&nbsp; <a href="#offeringPt2">Batch Optimisation</a></li>
                        <li><span><i className="fa fa-arrow-right"></i></span> &nbsp;&nbsp; <a href="#offeringPt3">Data Visualization</a></li>
                        <li><span><i className="fa fa-arrow-right"></i></span> &nbsp;&nbsp; <a href="#offeringPt6">Big Data Analytics</a></li>
                        <li><span><i className="fa fa-arrow-right"></i></span> &nbsp;&nbsp; <a href="#offeringPt4">Data Migration</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="container">
          <div className="copyright">
            &copy;<span id="date" > 2023</span>
            <span> Intuitive IT Solutions. All rights reserved.</span>
          </div>

          
        </div>
    </footer>
    
  )
}

export default Footer
