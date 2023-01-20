import React from "react";
import Header from "../../components/header";
import "./project7.css";
import YoutubeEmbed from "../../components/youtubeEmbed";

function Project7Description() {
  return ( 
  <div className="home">
  <div>
      <Header />
  </div>
  <div className = "bodyPart">
    <div className="title"> 
    <p>No More Stress</p>
    </div>

    <div className="project7"> 
        <div class="grid-container7 ">
        <div class="pppart2">
        <div className="projectDesc" > 
        The <div className="bold"> physical, interactive installation</div>, created using <div className="bold">Arduino and Processing</div>, aimed to help users relieve <div className="bold"> stress</div> 
        and turn it into <div className="bold"> art piece</div> by typing the word that causes the stress and punching it. User can change the color and size of the flowers that appear every time they punch.
        Appearing flowers are the example of generative art.

        </div>
        
        </div>  
        <div class="pppart3"  >
        <div className="video"> 
        <YoutubeEmbed embedId="nfmChfvgI0Q"/>
      </div> 
        </div>

      </div> 

        </div> 

  </div>
</div>
  );
}

export default Project7Description;

// https://youtu.be/nfmChfvgI0Q