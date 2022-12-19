import React from "react";
import "./contact.css";
import ContactForm from "./contactForm";
import SocialContact from "./social-contact";

function Contact() {
  return (
    <div className="contact">
    <div className="contact-container">
      <div className="contact-left">
  
        <p>You can connect with me by sending me an <a href="google.com"> email</a>, adding me in <a href="google.com"> linkedin</a> or <a href="https://github.com/Alima2104"> github</a>. I would love to talk about everything! </p>
        {/* <SocialContact /> */}
        </div>
        {/* <div className="Contact-Form"> 
        <ContactForm/>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;