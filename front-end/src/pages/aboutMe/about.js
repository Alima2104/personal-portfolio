import React from "react";
import "./about.css";
import Header from "../../components/header";
import image from "./alimusha.png";

function About() {
  return (
    <div className="home">
    
    <div>
          <Header />
      </div>
     <div className="aboutme">
        <div className="pic"> 
        <img src={image}/>
        </div>
    <p> 
      My name is Alima and I am a junior at NYU Abu Dhabi. I am majoring in Computer Science and minoring in Interactive Media. I am interested in generative art, virtual reality, and social entrepreneurship. <br/>
      I've taken classes like agile software development, data structures, algorithms, and computer systems organization, so I have a good understanding of computer science. 
        
    </p>
  </div> 
  


    </div>
 

  );
}

export default About;