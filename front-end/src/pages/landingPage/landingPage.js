import React from "react";
import Header from "../../components/header";
import Keyboard from "../../components/landing page/keyboard";
import "./landingPage.css";


function LandingPage() {
    return ( 
    <div className="home">
      <div>
          <Header />
      </div>

      <div class="grid-container">
        <div class="item1">
        <div className="roomContainer">
            <Keyboard /> 
        </div>
        </div>
        <div class="item2">
          <div className="ShortDescription">
            Hello, it's me. <br/>
            Nice to meet you all. 
        </div>
        </div>
        <div class="item3">
          
          <ul id="Buttons">
             <li class="newbutton"> <button class="button-19" role="button">Read more about me</button> </li>
             <li class="newbutton"> <button class="button-19" role="button">See works</button> </li>
             <li class="newbutton"> <button class="button-19" role="button">see more works</button> </li>
             </ul>
        </div>  
      
      </div>
    </div>
    );
  }
  
  export default LandingPage;