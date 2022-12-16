import React, { useState } from "react";
import "./style.css";
import p1 from "./img/enviromental.png"
import p2 from "./img/interactive.png"
import p3 from "./img/MUSAIK.jpg"
import p4 from "./img/interactive.png"
import p5 from "./img/enviromental.png"
import p6 from "./img/p6.png"
import { Link } from "react-router-dom";


function Work() {
    return(
        <>
       
        <div className="grid-container">
            <div className="grid-item"> 
               <Link to="/project1"><img src={p1} /> </Link>  
            </div>
            <div className="grid-item"> 
               <Link to="/project2"><img src={p2} /> </Link>  
            </div>
            <div className="grid-item"> 
               <Link to="/project3"><img src={p3} /> </Link>  
            </div>
            <div className="grid-item"> 
               <Link to="/project4"><img src={p4} /> </Link>  
            </div>
            <div className="grid-item"> 
               <Link to="/project5"><img src={p5} /> </Link>  
            </div>
            <div className="grid-item"> 
               <Link to="/project6"><img src={p6} /> </Link>  
            </div>
            
        </div>

        </>

    );
}

export default Work