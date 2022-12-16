import React from "react";
import Header from "../components/header";
import "./project.css";
import Vimeo from '@u-wave/react-vimeo';

function Project1Description() {
  return ( <div className="home">
    <div>
        <Header />
    </div>
    <div>
        <p>This  is the first project</p>
        <Vimeo
        video="https://vimeo.com/781274231"
        autoplay
        width={500}
        height={300}
/>
    </div>
  </div>
  );
}

export default Project1Description;
