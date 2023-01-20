import React from "react";
import Header from "../../components/header";
import "./project3.css";
import Vimeo from '@u-wave/react-vimeo';

function Project3Description() {
  return ( 
  <div className="home">
    <div>
        <Header />
    </div>
    <div className = "bodyPart">
      <div className="title3"> 
      <p>Code Chat</p>
      </div>
      {/* <div className="ShortDescription">
        <p> <a className="bold"> Role:</a> lorem ipsum <br/>
          <a className="bold"> Team:</a> lorem ipsum, lorem ipsum, lorem ipsum <br/>
          <a className="bold"> Date:</a> lorem ipsum <br/>
          <a className="bold"> Tools:</a> lorem ipsum, lorem ipsum, lorem ipsum
      </p>
        </div>  */}

        <div className="project3"> 
        <div class="grid-container3 ">
        <div class="tem1">
          <div className="GenDescription"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
      
        </div>
        <div class="tem2">
         <div id="secondSlide"></div>
          
        </div>
        <div class="tem3">
        <div id="thirdSlide"></div>
        
        </div>  

        <div class="tem4">
        <div id="fourthSlide"></div>
        
        </div>

        <div class="tem5">
        <div id="fifthSlide"></div>
        
        </div>

        <div class="tem6">
         <div id="sixthSlide"></div>
        </div>

        <div class="tem7">
         <div id="seventhSlide"></div>
        </div>


        <div class="tem8">
         <div id="eighthSlide"></div>
        </div>
        <div class="tem9">
         <div id="ninethSlide">  <Vimeo
      video="https://vimeo.com/781274231"
     
      /> </div>
        </div>

        <div class="tem10">
         <div id="tenthSlide"></div>
        </div>
        <div class="tem11">
         <div id="eleventhSlide"></div>
        </div>
        <div class="tem12">
         <div id="twelvethSlide"></div>
        </div>
      </div> 

        </div> 

    
    </div>
  </div>
  );
}

export default Project3Description;
