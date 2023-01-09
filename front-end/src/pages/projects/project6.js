import React from "react";
import Header from "../../components/header";
import "./project6.css";
import Vimeo from '@u-wave/react-vimeo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

function Project6Description() {

  useEffect(() => {
    AOS.init();
  }, [])

  return ( 
  <div className="home">
  <div>
      <Header />
  </div>
  <div className = "bodyPart">
      {/* <div id="bannerimage"></div> */}
      <div className="title"> 
      <p>Interactive Websites</p>
      </div>
      <hr class="rounded"/>
        <div className="project6"> 
        <div class="grid-container6 ">
        <div class="part1">
          <div className="GenDescription"> 
          Throughout the communications lab class that I took in Spring 2022, we were exploring interactivity on the websites through visuals, audio, and video. Each of the three following projects are focusing on one of those forms of interactivity and are focusing on the storytelling relying primarily on one of these forms.
          </div>
        </div>
        <div class="part2">
        <div className="projectDesc" data-aos="fade-right" > 
        “The Goodest Boy” - is a story about a lovely Shiba called Bark who is home alone when his owner goes to work and something happens to him during this time. 
The story itself is short and funny, and it is told using comics style. [add something about comics from the readings]
        </div>
        
        </div>  
        <div class="part3" data-aos="fade-left" >
          <div id="image1">
          </div>
        </div>

        <div class="part4" data-aos="fade-left">
        <div className="projectDesc"> 
        “Turbulence” - is a simple looking website where the only thing u see on the screen most of the time is this airplane which takes off with the crew and passengers on board. However, please were headphones and listen to the audio carefully - visuals here are just the support for the main story. And I hope you will appreciate the hilarious contrast between the drawing style and the content of the audio. No spoilers!
        </div>
        </div>
        <div class="part5"  data-aos="fade-right" >
         <div id="image2"></div>
        </div>

        <div className="part6"  data-aos="fade-right">
        <div className="projectDesc"> 
        “Treasure Hunt for Campus Dirhams” - is a variation of the “choose your adventure” type of games presented on the website. You will meet us, or better say, riddle givers, in different spots on the NYUAD campus while trying to find campus dirhams so you can afford buying products in the convenience store. Don’t worry, riddles are easy, and you have as many attempts as you want - I hope you will enjoy!
        </div>
        </div>

        <div class="part7" data-aos="fade-left">
         <div id="image3"></div>
        </div>

      </div> 

        </div> 

    
    </div>
</div>
  );
}

export default Project6Description;