import React from "react";
import Header from "../../components/header";
import "./project1.css";
import Vimeo from '@u-wave/react-vimeo';

function Project2Description() {
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

        <div className="project1"> 
        <div class="grid-container ">
        <div class="iitem1">
          <div className="GenDescription"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </div>
      
        </div>
        <div class="iitem2">
         <div id="thisImage"></div>
          
        </div>
        <div class="iitem3">
        <div className="description2"> 
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        </div>
        
        </div>  

        <div class="iitem4">
        <div className="description3"> 
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        </div>
        
        </div>

        <div class="iitem5">
        <div className="description4"> 
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        </div>
        
        </div>

        <div class="iitem6">
         <div id="thisImage2"></div>
          
        </div>
      
      </div> 

        </div> 

    
    </div>
  </div>
  );
}

export default Project2Description;