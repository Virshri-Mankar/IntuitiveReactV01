
            <div className="row mrt15">
            {/*right side started here */}
            <div className="col-md-6">Left side</div>
            {/**contact us form started */}
            <div className="col-md-6">
                <h2>Get In Touch</h2>
                    {status?.type === 'success' && <p>"Twoja wiadomość została wysłana."</p>}
                    {status?.type === 'error' && (
                        <p>"Wysyłanie wiadomości nie powdioło się. Spróbuj jeszcze raz."</p>
                    )}
                <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div >
                    <label for="username"></label>
                    <input type="text" placeholder="Name" name="user_name" id="username" autocomplete="off" required/>
                </div>
            </div>  
            <div className="col-md-6 col-sm-6 col-xs-12">
                <div >
                  <label for="email"></label>
                <input type="email" placeholder="E-mail" name="user_email" id="email" autocomplete="off" required/>
                </div>
            </div>    
            <div className="col-md-12 col-sm-12 col-xs-12">
                  <div >
                    <label for="subject"></label>
                  <input type="text" placeholder="Subject" name="subject" autocomplete="off" id="subject" required/>
                  </div>
              </div>  
              <div className="col-md-12 message-input">
                  <div >
                    <label for="textarea"></label>
                  <textarea  placeholder="Message" name="message" id="textarea" cols="30" rows="10" autocomplete="off" min="5" required></textarea>
                  </div>
              </div>   
              
              <div className="col-md-12 text-center ">
                  <div >
                  <button type="submit" name="submit" id="submit" value="Send Message" autocomplete="off">
                  Submit
                  </button>
                  </div> 
              </div>                                          
              </div>               
                </form>
                {/**end of form  tag started */}
            </div>{/**end ofcontact us form started */}

            // {/*  second file starts here */}
            import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import ConactStyle from "../Css/ContactStyle.css";

const Contact = () => {
  const [status, setStatus] = useState(undefined);
  const form = useRef();
  {
    /**onSubmit fun called here*/
  }
  const sendEmail = (e) => {
    e.preventDefault();

    {
      /* emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')*/
    }
    emailjs
      .sendForm(
        "service_45w3wbh",
        "template_wmescar",
        form.current,
        "5xuFv74ntXj3Iik1c"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ type: "success" });
        },
        (error) => {
          console.log(error.text);
          setStatus({ type: "error", error });
        }
      );
    {
      /*cleare the form onSubmit*/
    }
    e.target.reset();
  };

  return (
    <section id="contactSection" className="contact-page-sec mrt40  pdTnB">
      <div className="container">
        <div className="row mrt15">
          <div className="col-md-12">
            <div className=" basicheading">Contact Us</div>
          </div>
        </div>
        
        <div className="row mrt15">
          <div className="flexcontact">
            <div className=" leftsideInfo">
              
              <div>
                <div className="address">
                 
                  <div className="contact-info  mailtxt ">
                    <div className="contact-info-item">
                      <div className="contact-info-icon">
                          <i className="fas fa-envelope"></i>
                      </div>
                      <div className="contact-info-text">
                          <h2>E-mail</h2>
                          
                          <span ><a  href="mailto:info@intuitiveitsolution.com"><b > info@intuitiveitsolution.com</b></a></span> 
                      </div>
                    </div>            
                  </div> 
                </div>
  
                <div className="infoNmailID">
                  <div className="column">
                    <div className="contact-info  phonetxt " >
                      <div className="contact-info-item">
                        <div className="contact-info-icon">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className="contact-info-text">
                            <h2>Phone</h2>
                            
                            <span><a href="tel:+18044065534"><b>+1&nbsp;804&nbsp;406&nbsp;5534</b></a></span>
                            <span><a href="tel:+919730200667"><b> +91 9730200667</b></a></span>
                            
                        </div>
                      </div>   
                    </div>   
                  </div>
  
  
                  <div className="column">
                    <div className="contact-info  addretxt ">
                      <div className="contact-info-item">
                        <div className="contact-info-icon">
                           
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="contact-info-text ">
                            <h2>Address</h2>
                            
                            <span ><a ><b> 8501 Mayland Drive, <br/> STE 105, Henrico  <br/> VA 23294 </b></a> </span> 
                            
                        </div>
                      </div>            
                    </div> 
                  </div>
                </div>
  
              </div>
  
            </div>
  
            {/*<!-- rightside form  -->*/}
            <div className="rightsideInfo">
              <div className="contact-page-form">
                <h2>Get in Touch</h2>

                <form action="https://formspree.io/f/mayzdykl" method="POST">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <label for="username"></label>
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          id="username"
                          autocomplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <label for="email"></label>
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          id="email"
                          autocomplete="off"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="single-input-field">
                        <label for="subject"></label>
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          autocomplete="off"
                          id="subject"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <label for="textarea"></label>
                        <textarea
                          placeholder="Message"
                          name="message"
                          id="textarea"
                          cols="30"
                          rows="10"
                          autocomplete="off"
                          min="5"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12 text-center ">
                      <div className="single-input-fieldsbtn ">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          value="Send Message"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
