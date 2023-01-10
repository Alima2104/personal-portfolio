import React from "react";
import Header from "../../components/header";
import "./project4.css";
import Vimeo from '@u-wave/react-vimeo';

function Project4Description() {
  return ( 
  <div className="home">
  <div>
      <Header />
  </div>
  <div className = "bodyPart">
    <div className="title"> 
    <p>You Are the Problem</p>
    </div>

    <div className="project4"> 
        <div class="grid-container4 ">
        <div class="ppart1">
          <div className="GenDescription"> 
             VR simulation that explores problem of fast fashion through the interaction
          </div>
        </div>
        <div class="ppart2">
        <div className="projectDesc" > 
        “The Goodest Boy” - is a story about a lovely Shiba called Bark who is home alone when his owner goes to work and something happens to him during this time. 
The story itself is short and funny, and it is told using comics style. [add something about comics from the readings]
        </div>
        
        </div>  
        <div class="ppart3"  >
        <div className="video">
    <Vimeo
      video="https://vimeo.com/781964496"
      width={500}
      height={300}
      /> 
      </div> 
        </div>

      </div> 

        </div> 

  </div>
</div>
  );
}

export default Project4Description;


  {/* <div className="video">
    <Vimeo
      video="https://vimeo.com/781964496"
      width={500}
      height={300}
      /> 
      </div> */}