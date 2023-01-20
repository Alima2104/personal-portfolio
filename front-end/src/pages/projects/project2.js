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
      {/* <div id="bannerimage"></div> */}
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

          <p>Customizable, portable, trendy solution that will ensure that NYU students are prepared for an emergency.</p>
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
          <div id="culturalProbe"></div>
        </div>

        <div class="iiitem5">
        <div className="description4"> 
        One of the most important parts of our research was talking with the NYU Emergency Management team - people who are responsible for the way university prepares for any emergency.  
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
        <div className="description5"> After gathering all the information, we sat together and started brainstorming  </div>
        </div>

        <div className="iiitem8">
        <div className="description6"> We came up with the few HMW questions, and the initial choice was "How Might We reconstruct how we educate university students on local disaster preparedness?" </div>
        </div>

        <div class="iiitem9">
         <div id="howmightwe">
         <img src={hmw} />
         </div>
        </div>

        <div className="iiitem9_1">
        <div className="description12"> 
        As the NYU emergency team has mentioned, they have all the resources listed on their websites. So there is information ready for us to use! We also decided to focus on NYU students and come up with ways to educate them about natural disasters and emergencies.
        Our research has shown that students feel extremely unprepared, and our goal was to find the best way so they can feel safe!
      

        </div>
        </div>

        <div className="iiitem10">
        <div className="description10"> 
           We came up with the user personas:
        </div>
        </div>

        <div class="iiitem11">
         <div id="userpersona1">
      
         </div>
        </div>

        <div class="iiitem12">
         <div id="userpersona2">
         </div>
        </div>

        <div className="iiitem13">
        <div className="description11"> 
          And user journey map:
        </div>
        </div>

        <div class="iiitem14">
        <div id="userjourney"></div>
        </div>

        <div className="iiitem14_5">
        <div className="description12"> 

        The biggest problem is an extremely low reach of the information NYU Emergency Team is producing, and luck of engagement from the side of the student body. After that we were thinking about how to connect students to it, but the problem with the website that it needs an internet connection.
        It means that in the case of an emergency students won't be able to get the useful information.
        <div id="noInternet"></div>

        </div>
        </div>


        <div className="iiitem15">
        <div className="description12"> 
        When researching the ways emergency preparedness is communicated at the moment, we came across the Safe NYU app, and it was vital for our project. This app that has a lot of important information, and often is downloaded during the orientation week, had all the information we needed.  
<br/>We didn’t want to invent the wheel, and reframed the purpose of our project to be a bridge between already existing resources and NYU student body.
       </div>
        </div>

        <div class="iiitem15_11">
         <div id="safeNYU1">
         
         </div>
        </div>
        <div class="iiitem15_12">
         <div id="safeNYU2">
        
         </div>
        </div>
        <div class="iiitem15_13">
         <div id="safeNYU3">
        
         </div>
        </div>

        <div class="iiitem15_14">
         <div id="safeNYU4">
        
         </div>
        </div>



        <div class="iiitem15_1">
         <div id="brainstorming1">
         
         </div>
        </div>
        <div class="iiitem15_2">
         <div id="brainstorming2">
        
         </div>
        </div>
        <div class="iiitem15_3">
         <div id="brainstorming3">
        
         </div>
        </div>
        <div class="iiitem15_4">
         <div id="brainstorming">
          Here are brainstorming ideas for which we used a 8 folded paper approach. We left the ideation phase this time with 3 prototype ideas: VR program that imitates the case of an emergency for students to prepare for it, a booklet with all the necessary information in an easily accessible place, and a kit.
         
         </div>
        </div>
        <div class="iiitem15_5">
         <div id="refinedHMW">
          We finished our brainstorming phase with the refined How Might We:
          <div className="bold"> How might we redesign the disaster preparedness resources/information at NYU and better engage the community so that university students are more prepared during the event of an emergency?</div>
         
         </div>
        </div>

        <div class="iiitem16">
        <div className="sectionName"> 
           Prototyping
        </div>
        </div>

        <div class="iiitem16_1">
         <div id="description12">
          When asking our classmates about ideas, the majority seemed to be confused by the idea of using VR to imitate the case of an emergency. 
          Moreover, it would take an extensive period of time to go through all of the simulations, and the number of VR headsets is very limited.
          Consequently, the idea that seemed the most promising and sophisticated received the worst feedback from people. <br/>
          Surprisingly, we received the best reaction when pitching the idea of the emergency kit that we decided to present in the form of the tote bag.
          We also played with the idea of putting a QR code as a design element, and as an easy but effective way to promote the app that has all 
          necessary information.
         
         </div>
        </div>
        <div class="iiitem16_2">
         <div id="qrcode">
         </div>
       
        </div>

        <div class="iiitem16_3">
        
         <div id="physicalprototype">
         </div>
        </div>

        <div class="iiitem17_0">
        <div className="sectionName"> 
           Usability Testing
        </div>
       </div>

        <div class="iiitem17">
        
        <div className="miniSectionName"> 
           User Testing Sample Questions
        </div>
        <div className="description10"> 
        The first thing we focused on was our research strategy. In order to identify the flaws in the current UX and UI, we conducted a usability test by interviewing people that fit our user archetype. These were users over the age of 50 who had lost a loved one within the past 5-10 years. Before we began our interviews we first needed to do two things.
First we conduct a competitor analysis. Aside from using and understanding Memento, this also gave us an insight in the market space and provided additional context for the problem we are working on. Secondly we create an interview guide in preparation for Usability Testing. This enabled us to conduct our interviews in a consistent and controlled manner.
        </div>

        </div>

        <div class="iiitem17_5">
        <div id="UserTestingQ"></div>
        </div>
        
        <div class="iiitem18">
        <div className="miniSectionName"> 
           Results
        </div>
        <div className="description10"> 
        The first thing we focused on was our research strategy. In order to identify the flaws in the current UX and UI, we conducted a usability test by interviewing people that fit our user archetype. These were users over the age of 50 who had lost a loved one within the past 5-10 years. Before we began our interviews we first needed to do two things.
First we conduct a competitor analysis. Aside from using and understanding Memento, this also gave us an insight in the market space and provided additional context for the problem we are working on. Secondly we create an interview guide in preparation for Usability Testing. This enabled us to conduct our interviews in a consistent and controlled manner.
        </div>
        </div>

        <div class="iiitem18_5">
        <div id="usabilityResults"></div>
        </div>


        <div class="iiitem19">
        <div className="sectionName"> 
           Refined Prototype
        </div>
        <div className="description10"> 
        After we decided on the 5 items that we are putting inside the kit, 
        </div>
  
        </div>

        <div class="iiitem19_1">
        <div id="bag"></div>
     
        </div>

        <div class="iiitem19_2">
      
        <div id="items"></div>
        </div>
      
        <div class="iiitem20">
        <div className="sectionName"> 
          Future Plans
        </div>
        <div className="description10"> 
        In our perfect world, every NYU student feels safe and is prepared for any emergency. To ensure that, our next steps are: <br/>
        <ul>
          <li>Continued collaboration with NYU Emergency Team  </li>
          <li> Estimating the price of the kit and logistics</li>
          <li> Making the distribution of the Super Emergency Kit possible during the orientation week
</li>
        </ul>

        </div>
        </div>
      
      
      
      </div> 
        </div> 
    </div>
  </div>
  );
}

export default Project2Description;