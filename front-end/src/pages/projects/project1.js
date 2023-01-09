import React from "react";
import Header from "../../components/header";
import "./project1.css";
import Vimeo from '@u-wave/react-vimeo';

function Project1Description() {
  return ( 
  <div className="home">
    <div>
        <Header />
    </div>
    <div className = "bodyPart">
      <div id="bannerimage"></div>
      <div className="title1"> 
      <p>MUSAIK</p>
      </div>
        <div className="project1"> 
        <div class="grid-container ">
          <div class="iitem0">
          <div className="ShortDescription1">
          <p> <div className="bold"> Role:</div> full stack software developer, UX/UI designer <br/>
          <div className="bold"> Team:</div> Zain, Jeongin, Ahmad, Chinedu <br/>
          <div className="bold"> Date:</div> September-December 2022 <br/>
          <div className="bold"> Tools:</div> Figma, React.js, Express.js, Node.js, Docker, MongoDB
      </p>
        </div> 

          </div>
        <div class="iitem1">
          <div className="GenDescription"> 
          The Musaik team has a vision of making connection through music a much easier process. We want our users to view our app as a hub for finding and connecting with others that share the same musical taste.
          </div>
        </div>
       
      
        <div class="iitem3">
        <div className="sectionName"> 
           Exploring the Problem
        </div>
        <div className="description2"> 
        New music discovery is a soulless, intensive experience. If you want to find new artists, you'll have to sift through playlist on top of playlist for hours. You can listen to music together with your friends on Spotify, but it only limited to 8 people, and only people who sent you an invitation. Musaik will connect users through streaming parties and auto-match chats. Users will discover new music easily and enjoyably.
        </div>
        
        </div>  

        <div class="iitem4">
        <div className="sectionName"> 
           Project Scope
        </div>
        <div className="description3"> 
        Originally as a project for the Agile Software Development class, we as a team were supposed to quickly create an app from scratch in the agile style, and we only had 2 days to come up with the UX/UI prototype. <br/>
Now, after this class has ended, I challenged myself in creating a more user-friendly and intuitive design for Musaik so it can help more people to discover new music and connect through it.  <br/>
 Based on the existing MVP I created a high-fidelity prototype with many iterations including user testing. This project was highly focused on UI design and exploring multiple solutions for launching this app
        </div>
        
        </div>

        <div class="iitem5">
        <div className="sectionName"> 
           Problem Statement
        </div>
        <div className="description4"> 
        This is the Problem-statement: dhjfkdsl;adkfjhbdsofc doisjklzbjvdsk sdknklajds sdjklas jdksl
        </div>
        </div>
        <div class="iitem6">
         <div id="thisImage2"></div>
        </div>

        <div className="iitem7">
        <div className="sectionName"> 
           Design Process
        </div>
        <div className="description"> Here is the initial prototype we had to come up with.  </div>
        </div>

        <div className="iitem8">
        <div className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  </div>
        
        </div>

        <div className="iitem9"> 
        <div className="video"> 
        <Vimeo video="https://vimeo.com/781964496" width={500} height={300} /> 
        </div>
        </div>

        <div className="iitem10">
        <div className="sectionName"> 
           User flow
        </div>
        <div className="description10"> 
        Originally as a project for the Agile Software Development class, we as a team were supposed to quickly create an app from scratch in the agile style, and we only had 2 days to come up with the UX/UI prototype. <br/>
Now, after this class has ended, I challenged myself in creating a more user-friendly and intuitive design for Musaik so it can help more people to discover new music and connect through it.  <br/>
 Based on the existing MVP I created a high-fidelity prototype with many iterations including user testing. This project was highly focused on UI design and exploring multiple solutions for launching this app
        </div>
        </div>

      </div> 

        </div> 

    
    </div>
  </div>
  );
}

export default Project1Description;
