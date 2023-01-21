import React from "react";
import Header from "../../components/header";
import Keyboard from "../../components/landing page/keyboard";
import "./landingPage.css";
import { Link } from "react-router-dom";


function LandingPage() {
    return ( 
    <div className="home">
      <div>
          <Header />
      </div>

      <div className="land"> 

      <div class="grid-container">
        <div class="item1">
        <div className="roomContainer">
            <Keyboard /> 
        </div>
        </div>
        <div class="item2">
          <div className="ShortDescription">
            Hey, my name is Alima. <br/>
            An aspiring UX/UI Designer with Multidisciplinary Design and Coding Experiences. <br/>
            Please, feel free explore this page. 
        </div>
        </div>
        <div class="item3">
        <div className="ShortDescription">

          Click <Link to="/about">here</Link> if you want to read more about me, <br/>
          <Link to="/Work">here</Link> if you want to see my work, <br/>
          and <Link to="/alsoWork">here</Link> if you want to see even more from me.
          </div>
        </div>  
      
      </div>
      
      
      </div>

      
    </div>
    );
  }
  
  export default LandingPage;