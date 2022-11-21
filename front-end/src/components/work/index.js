import React, { useState } from "react";
import "./style.css";
import p1 from "./img/enviromental.png"
import p2 from "./img/interactive.png"
import p3 from "./img/enviromental.png"
import p4 from "./img/interactive.png"
import p5 from "./img/enviromental.png"
import p6 from "./img/p6.png"


function Work() {
    return(
        <div class="grid-container">
            <div class="grid-item"> 
               <a href="https://google.com"> <img src={p1} /> </a>  
            </div>
            <div class="grid-item"> <img src={p2} /> </div>
            <div class="grid-item"> <img src={p3} /></div>  
            <div class="grid-item"> <img src={p4} /></div>
            <div class="grid-item"> <img src={p5} /></div>
            <div class="grid-item"> <img src={p4} /></div>  
        </div>

    );
}

export default Work