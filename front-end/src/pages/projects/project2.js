import React from "react";
import Header from "../../components/header";
import "./project2.css";
import Vimeo from '@u-wave/react-vimeo';
import p1 from "./up1.png";
import p2 from "./up2.png";
import p3 from "./journeymap.png";
import hmw from "./img/hmw.png";
import b1 from "./img/brainstorming1.png";
import b2 from "./img/brainstorming2.png";
import b3 from "./img/brainstorming3.png";
import zoom from "./img/zoom.png";

function Project2Description() {
  return ( 
    <div className="home">
    <div>
        <Header />
    </div>
    <div className = "bodyPart">
      <div id="bannerimage"></div>
      <div className="title"> 
      <p>Super Emergency Kit</p>
      </div>

      
        <div className="project2"> 
        <div class="grid-container2 ">
          <div class="iitem0"> 
          <div className="ShortDescription2">
        <p> <div className="bold"> Role:</div> UX/UI designer <br/>
          <div className="bold"> Team:</div> Adam, Mingren, Emilia, Alima <br/>
          <div className="bold"> Date:</div> September-December 2022 <br/>
          <div className="bold"> Tools:</div> Figma, Miro, Google forms
      </p>
        </div> 
          </div>


        <div class="iiitem1">
          <div className="GenDescription"> 
          How might we redesign the disaster preparedness resources/information at NYU and better engage the community so that university students are more prepared during the event of an emergency?
          </div>
        </div>


        <div class="iiitem3_1">
        <div className="sectionName"> 
           Research
        </div>

        </div>
       
      
        <div class="iiitem3">
       
        <div className="description2"> 
        Going into user research study, our hypothesis was that most students don’t know much about emergency management. To understand the existing problem and place it in the context, we conducted both primary and secondary research. 
We talked to 6 students at this stage and realized that all of them feel helpless, doesn’t know much about how to navigate the city and deal with extreme weather conditions. They also didn’t know where to reach out when the emergency happens or where find the information about emergency preparedness.

        </div>
        
        </div> 

        <div className="iiitem3_5">
          <div className="quote1"> 
          “Wow… we are really not prepared at all” - student interviewee.
          </div>
        </div> 

        <div class="iiitem4">
        <div className="description3"> 
        Another way of the primary research we incorporated was a cultural probe. We sent it to 5 students for a week, so they can produce the answers for the questions there. You can see the example of the cultural probe here.  
        </div>
        </div>

        <div class="iiitem4_5">
          <div id="thisImage2"></div>
        </div>

        <div class="iiitem5">
        <div className="description4"> 
        One of the most important parts of our research was talking with the NYU Emergency Management team - people who are responsible for the way university prepares for the 
        </div>
        </div>
        <div class="iiitem6">
         <div id="thisImage2">
         <img src={zoom} />
         </div>
        </div>

        <div className="iiitem7">
        <div className="sectionName"> 
           Brainstorming
        </div>
        <div className="description"> After gathering all the informtion, we sat together and started brainstorming  </div>
        </div>

        <div className="iiitem8">
        <div className="description"> We came up with the few HMW questions </div>
        </div>

        <div class="iiitem9">
         <div id="howmightwe">
         <img src={hmw} />
         </div>
        </div>

        <div className="iiitem10">
        <div className="description10"> 
           We came up with the user personas:
        </div>
        </div>

        <div class="iiitem11">
         <div id="userpersona1">
         <img src={p1} />
         </div>
        </div>

        <div class="iiitem12">
         <div id="userpersona2">
         <img src={p2} />
         </div>
        </div>

        <div className="iiitem13">
        <div className="description11"> 
          Ad user journey map:
        </div>
        </div>

        <div class="iiitem14">
         <div id="userjourney">
         <img src={p3} />
         </div>
        </div>

        <div className="iiitem15">
        <div className="description12"> 
        As the NYU emergency team has mentioned, they have all the resources listed on their websites. The only problem is an extremely low reach, and luck of engagement from the side of the student body. After that we were thinking about how to connect students to it, but the problem with the website that it needs an internet connection
        When researching the ways emergency preparedness is communicated at the moment, we came across the Safe NYU app, and it was vital for our project. This app that has a lot of important information, and often is downloaded during the orientation week, had all the information we needed.  
We didn’t want to invent the wheel, and reframed the purpose of our project to be a bridge between already existing resources and NYU student body.
We left the ideation phase this time with 3 prototype ideas: VR program that imitates the case of an emergency for students to prepare for it, a booklet with all the necessary information in an easily accessible place, and a kit.

        </div>
        </div>

        <div class="iiitem15_1">
         <div id="brainstorming">
         <img src={b1} />
         </div>
        </div>
        <div class="iiitem15_2">
         <div id="brainstorming">
         <img src={b2} />
         </div>
        </div>
        <div class="iiitem15_3">
         <div id="brainstorming">
         <img src={b3} />
         </div>
        </div>
        <div class="iiitem15_4">
         <div id="brainstorming">
          Here are brainstorming fjksdd oijfksldlsad ofjskdld fjodskl jfakdls fajkdsl fhjdkwep [ewpoddkl dksjl.
         
         </div>
        </div>

        <div class="iiitem16">
        <div className="sectionName"> 
           Prototyping
        </div>
        </div>

      </div> 

        </div> 

    
    </div>
  </div>
  );
}

export default Project2Description;