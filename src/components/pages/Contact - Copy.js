import React from 'react'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    {/**onSubmit fun called here*/}
    const sendEmail = (e) => {
        e.preventDefault();
    
        {/* emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')*/}
        emailjs.sendForm('service_45w3wbh', 'template_wmescar', form.current, '5xuFv74ntXj3Iik1c')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          {/*cleare the form onSubmit*/}
          e.target.reset();
    };
    

  return (
    <section>
        <div classNameName='container'>
            <div className="row mrt15">
                <div className="col-md-12">
                <div className=" basicheading">Contact Us</div>
                </div>
            </div> {/**row end here name contact us */}
            <div className="row mrt15">
                <div className="col-md-6">Left side</div>
                {/**contact us form started */}
                <div className="col-md-6">
                    <h2>Get In Touch</h2>
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
            </div>
        </div>
    </section>
  )
}

export default Contact
