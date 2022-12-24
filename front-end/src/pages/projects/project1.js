import React from "react";
import Header from "../../components/header";
import "./project.css";
import Vimeo from '@u-wave/react-vimeo';

function Project1Description() {
  return ( 
  <div className="home">
    <div>
        <Header />
    </div>
    <div className = "bodyPart">
      <div id="bannerimage"></div>
      <div className="title"> 
      <p>Project Name</p>
      </div>
      <hr class="rounded"/>
      <div className="ShortDescription">
        <p> <a className="bold"> Role:</a> lorem ipsum <br/>
          <a className="bold"> Team:</a> lorem ipsum, lorem ipsum, lorem ipsum <br/>
          <a className="bold"> Date:</a> lorem ipsum <br/>
          <a className="bold"> Tools:</a> lorem ipsum, lorem ipsum, lorem ipsum
      </p>
        </div>  
    </div>
  </div>
  );
}

export default Project1Description;
