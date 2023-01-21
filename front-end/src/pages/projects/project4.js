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
    <div className="title4"> 
    You Are the Problem
    </div>

    <div className="project4"> 
        <div class="grid-container4 ">
        <div class="ppart2">
        <div className="projectDesc" > 
        The <div className="bold"> simulation</div>, created in <div className="bold"> Unity VR</div>, aimed to educate users on the impacts of <div className="bold"> fast fashion</div> through interactive scenes. Scene one placed users in a science-fiction setting where they see many television sets and posters that showcase environmental problems. Scene two transported users to a virtual store where they were able to see the consequences of their purchasing choices, such as the depletion of resources and pollution caused by the disposal of cheap clothing. Users were able to move objects in the scene. The mini script included a voiceover, highlighting the key takeaways of the simulation, such as the importance of sustainable fashion and the power of consumer choice. Overall, the simulation aimed to raise awareness and <div className="bold">encourage more conscious consumption habits through interactivity</div>.
        </div>
        
        </div>  
        <div class="ppart3"  >
        <div className="video">
    <Vimeo
      video="https://vimeo.com/781964496"
     
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