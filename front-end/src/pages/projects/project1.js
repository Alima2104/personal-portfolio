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
      {/* <div id="bannerimage"></div> */}
      <div className="title1"> 
      <p>musaik</p>
      </div>
        <div className="project1"> 
        <div class="grid-container1">
         <div class="iitem0">
          <div className="ShortDescription1">
            <p> <div className="bold"> Role:</div> full stack software developer, UX/UI designer <br/>
            <div className="bold"> Team:</div> Zain, Jeongin, Ahmad, Chinedu <br/>
            <div className="bold"> Date:</div> September-December 2022 <br/>
            <div className="bold"> Tools:</div> Figma, React.js, Express.js, Node.js, Docker, MongoDB </p>
          </div> 
          </div>

          <div class="iitem1">
            <div className="GenDescription"> 
              The Musaik team has a vision of making connection through music a much easier process. We want our users to view our app as a hub for finding and connecting with others that share the same musical taste.
            </div>
          </div>

          <div class="iitem2">
             <div id="firstScreenshot"></div>
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
           Design Process
        </div>
        <div className="description4"> 
        I used a 5-stage Design Thinking model proposed by the Hasso Plattner Institute of Design at Stanford (the "d. school"). The stages of this Design Thinking process are as follows:
        1. Empathise, 2. Define, 3. Ideate, 4. Prototype, 5. Test.
        </div>
        </div>
        
        <div class="iitem6">
         <div id="homeScreenshot"></div>
        </div>

        <div className="iitem7">
        <div className="sectionName"> 
           Home
        </div>
        <div className="description4"> We introduced the homepage in order to provide a central place for a user to go from when starting their Memento journey.
Users have the option to Record a Session or access their Saved Recordings.
There is also a short video that explains how the whole process works, again to reinforce the information we are trying to convey but this time in form of video.
We also Introduced our Help Bot. This button pops up and explains the elements of the apps. This is only shown once and only comes up when using the app for the first time. </div>
        </div>

        <div class="iitem8">
         <div id="stationScreenshot"></div>
        </div>

        <div className="iitem9">
        <div className="sectionName"> 
           Station
        </div>
        <div className="description4">
          We decided to introduce fun and friendly illustrations that would support the questions. We chose illustrations over pictures because they’re timeless and reflect emotional sentimentality of memories that are often not as deliberate and certain as a photograph. </div>
        </div>

        <div class="iitem10">
         <div id="discoverScreenshot"></div>
        </div>

        <div className="iitem11">
        <div className="sectionName"> 
           Discover
        </div>
        <div className="description4">
        The recording process wasn't clear – both before, during and after the recording. Users were not aware that the app was recording all the time and assumed that they had to click a button to start a recording.
We decided on the iconography of the microphone  to give the users the ability to start/pause/save their recordings. A power that wasn’t given to them in the previous prototype.
By doing this we have removed the uncertainty of knowing when the recording would begin and end.
 </div>
        </div>


        <div className="iitem12">
        <div className="sectionName"> 
           User Research
        </div>
        <div className="miniSectionName"> 
           Research Strategy
        </div>
        <div className="description10"> 
        The first thing we focused on was our research strategy. In order to identify the flaws in the current UX and UI, we conducted a usability test by interviewing people that fit our user archetype. These were users over the age of 50 who had lost a loved one within the past 5-10 years. Before we began our interviews we first needed to do two things.
First we conduct a competitor analysis. Aside from using and understanding Memento, this also gave us an insight in the market space and provided additional context for the problem we are working on. Secondly we create an interview guide in preparation for Usability Testing. This enabled us to conduct our interviews in a consistent and controlled manner.
        </div>
        </div>

        <div className="iitem13"> 
          <div className="miniSectionName">
            Competitor Analysis 
            </div>
            <div className="description11"> 
          As part of our Competitor Analysis, we conducted an analysis on three apps with similar product offerings to Memento. These were: Thread.Care, Saga and A Lasting Tale.
We focused our research on User Interface elements and User Experience Flows – including the Sign Up process, Recording stage, User Ratings and the Features.
        </div>

        <div id="competitorAnalysis"></div>

        <div className="description12"> 
          As part of our Competitor Analysis, we conducted an analysis on three apps with similar product offerings to Memento. These were: Thread.Care, Saga and A Lasting Tale.
We focused our research on User Interface elements and User Experience Flows – including the Sign Up process, Recording stage, User Ratings and the Features.
        </div>
        </div>

        <div className="iitem14"> 
          <div className="miniSectionName">
            Interview Guide
            </div>
            <div className="description11"> 
            We created an interview guide that allowed us to follow a structured interviewing process, ensuring that each team member records their interview in a consistent manner. With this guide we conducted 5 user interviews, recording video with the online tool Lookback.io and then scribing our findings on a Miro board.
        </div>

        <div id="competitorAnalysis"></div>
        </div>

        <div className="iitem15">
        <div className="miniSectionName">
            Research Objectives
            </div>
            <div className="description12"> 
            The intent of the UX usability testing activity is to identify any usability issues including:
            <ul>
              <li>Assess whether the terminology is understood by users and appropriate language is used </li>
              <li>Determine whether the process flows in a logical way</li>
              <li>Assess if users can effectively navigate through the process using the UI elements</li>
              <li>Assess if users can effectively navigate through the process using the UI elements</li>
              <li>Analysis of how the design measures up against user goals, business goals, project intent, and system or technical constraints</li>
            </ul>
        </div>
        </div>

        <div className="iitem16"> 
          <div className="miniSectionName">
            Research Synthesis
            </div>
            <div className="description11"> 
            After our interview we grouped and categorised the data into an Affinity Map which enabled us to have a clearer understanding of the user experience.
            </div>

        <div id="competitorAnalysis"></div>
        </div>

        <div className="iitem17"> 
          <div className="miniSectionName">
            Usability Testing insights
            </div>
            <div className="description11"> 
            After our interview we grouped and categorised the data into an Affinity Map which enabled us to have a clearer understanding of the user experience.
            </div>

        <div id="competitorAnalysis"></div>
        </div>

        <div className="iitem18"> 
          <div className="miniSectionName">
            User Flow
            </div>
            <div className="description11"> 
            After numerous testing and feedback we altered the user flow of the app, so it would be a better experience for all users. Due to the short time frame for the project, we decided to focus our efforts on improving the recording process.
            </div>

        <div id="competitorAnalysis"></div>
        </div>

        <div className="iitem19"> 
          <div className="miniSectionName">
            How Might We
            </div>
            <div className="description11"> 
            We conducted a brainstorming session where we re-framed the problem.
We started thinking about the recording process, and spent time sparking ideas for possible innovative solutions as a collective team
            </div>

        <div id="competitorAnalysis"></div>
        </div>

        <div className="iitem20"> 
          <div className="miniSectionName">
            Sketch
            </div>
            <div className="description11"> 
            The next steps were to each do a lo-fi sketch using the new user-flow we created.
            Here quickly incorporated our brainstorming ideas into rough sketches, and outlined the different screens from A-B.
            </div>
        </div>
         
        <div class="iitem21">
         <div id="homeScreenshot"></div>
        </div>

        <div className="iitem22"> 
          <div className="miniSectionName">
            Wireframing
            </div>
            <div className="description11"> 
            The next steps were to each do a lo-fi sketch using the new user-flow we created.
            Here quickly incorporated our brainstorming ideas into rough sketches, and outlined the different screens from A-B.
            </div>
        </div>

        <div class="iitem23">
         <div id="homeScreenshot"></div>
        </div>


        <div className="iitem24"> 
          <div className="miniSectionName">
            Design System
            </div>
            <div className="description11"> 
            We came up with a design system to add consistency, structure and communication across all team members. We chose simple readable humanist typeface that would improve reading legibility at both small and large sizes. The colour palette is mature yet modern and has good contrast.
We also implemented icons and friendly illustrations to bring some fun and enjoyment to the app.            </div>

        <div id="competitorAnalysis"></div>
        </div>


          <div className="iitem25"> 
          <div className="miniSectionName">
            Prototype
            </div>
            <div className="description11"> 
            We have combined all the elements shown throughout the design process to create what we feel is a warm, functional, fun and approachable app      </div>

        <div id="competitorAnalysis"></div>
        </div>


         



      </div> 

        </div> 

    
    </div>
  </div>
  );
}

export default Project1Description;
