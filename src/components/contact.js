import '../App.css';
import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {Alert} from 'react-bootstrap';


function Contact() {

  const [status, setStatus] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_bbg5vxb', 'template_q4pvcb3', e.target, 'user_lMhVb7tuksDwPLs8jDPNp')
      .then((result) => {
          setStatus(true);
      }, (error) => {
          setStatus(false);
      });
      e.target.reset();
  };

 return (
   <div>
    <section id="contact" className="contact">
      <div className="container">

		    <header className=" section-header text-center wow zoomIn" data-wow-delay="0.1s">
            <p>SAY HELLO</p>
            <h2>Contact</h2>
        </header>
        

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Colombo, Sri Lanka</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>97lakshman@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>0770769962</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.288575472071!2d79.86116061426752!3d6.855973721112201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b08039bf02b%3A0xc55c58fa254995f7!2s1%20Vanderwert%20Pl%2C%20Colombo%2010350!5e0!3m2!1sen!2slk!4v1624130929438!5m2!1sen!2slk"  frameborder="0" style={{border:"0", width: "100%", height:" 290px"}} allowfullscreen></iframe>
             </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={sendEmail} method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required />
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required />
                </div>
              </div>
              <div className="form-group">
                <label for="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required />
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                {status===false ?
                    <Alert variant="danger" onClose={() => setStatus("")} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>                
                    </Alert>: ""}
                {status===true ?
                    <Alert variant="success" onClose={() => setStatus("")} dismissible>
                    <Alert.Heading>Your message has been sent. Thank you!</Alert.Heading>                
                    </Alert>: ""}         


              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
   </div>
  );
}

export default Contact;
