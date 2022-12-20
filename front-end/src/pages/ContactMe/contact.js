import React from "react";
import "./contact.css";
import Header from "../../components/header";

function Contact() {
  return ( 
    <div className="home">
    <div>
          <Header />
      </div>
    <div className="contact">
    <div className="contact-container">
      <div className="contact-left">
  
        <p>You can connect with me by sending me an <a href="mailto:az2180@nyu.edu">email</a>, adding me in <a href="google.com"> linkedin</a> or <a href="https://github.com/Alima2104"> github</a>. I would love to talk about everything! </p>
        {/* <SocialContact /> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;