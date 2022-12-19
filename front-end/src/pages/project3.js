import React from "react";
import Header from "../components/header";
import "./project.css";
import Vimeo from '@u-wave/react-vimeo';

function Project3Description() {
  return ( <div className="home">
    <div>
        <Header />
    </div>
    <div className = "bodyPart">
      <div className="title"> 
      <p>"MUSAIK"</p>
      </div>
      <div className="subtitle"> 
      A live radio web application to discover new music and connect with friends      </div> 
      <div className="video">
      <Vimeo
        video="https://vimeo.com/781274231"
        width={500}
        height={300}
        /> 
        </div>
       
        <div className = "mainText">
            <p> The Musaik team has a vision of making connection through music a much easier process. We want our users to view our app as a hub for finding and connecting with others that share the same musical taste.
</p>
            <p> New music discovery is a souless, intensive experience. If you want to find new artists, you'll have to sift through playlist on top of playlist for hours. Musaik will connect users through streaming parties and auto-match chats. Users will discover new music easily and enjoyably.</p>
        </div>
    </div>
  </div>
  );
}

export default Project3Description;
