import React from "react";
import "./contact.css";
import ContactForm from "./contactForm";
import SocialContact from "./social-contact";
function Contact() {
  return (
    <div className="contact">
    <div className="contact-container">
      <div className="contact-left">
        <p>let's connect!</p>
        <SocialContact />
        </div>
        {/* <div className="Contact-Form"> 
        <ContactForm/>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;