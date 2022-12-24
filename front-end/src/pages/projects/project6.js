import React from "react";
import Header from "../../components/header";
import "./project.css";
import Vimeo from '@u-wave/react-vimeo';

function Project6Description() {
  return ( 
  <div className="home">
  <div>
      <Header />
  </div>
  <div className = "bodyPart">
    <div className="title"> 
    <p>Interactive Websites</p>
    </div>
    <div className="subtitle"> 
    <p>Interactive websites that explore the interactivity through pictures, audios, and videos.</p>
    </div> 
     
      <div className = "mainText">
        <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
      </div>
  </div>
</div>
  );
}

export default Project6Description;