import React from "react";
import Header from "../../components/header";
import "./project5.css";

function Project5Description() {
  return ( <div className="home">
    <div>
        <Header />
    </div>
    <div className = "bodyPart">
      <div className="title"> 
      <p>Finding Home</p>
      </div>
      <div className="project5"> 
        <div class="grid-container5 ">
        <div class="pppart1">
          <div className="GenDescription"> 
             VR simulation that explores problem of fast fashion through the interaction
          </div>
        </div>

        <div class="pppart2">
        <div className="projectDesc"  > 
        “The Goodest Boy” - is a story about a lovely Shiba called Bark who is home alone when his owner goes to work and something happens to him during this time. 
The story itself is short and funny, and it is told using comics style. [add something about comics from the readings]
        </div>
        </div> 

        <div class="pppart3"  >
        <div className="editor">
        <iframe src="https://editor.p5js.org/alima21/full/Y227mV9CC">
          </iframe> 
        </div>
      </div> 

        </div> 
        </div> 
    </div>
  </div>
  );
}

export default Project5Description;