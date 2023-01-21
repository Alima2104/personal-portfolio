import React from "react";
import Header from "../../components/header";
import p1 from "./img/firstmore.png";
import p2 from "./img/secondmore.png";
import p3 from "./img/thirdmore.jpg";
import p4 from "./img/proj7.jpg";
import p5 from "./img/p1.jpeg";
import p6 from "./img/p2.jpeg";
import { Link } from "react-router-dom";
import "./alsoWork.css";

function AlsoWorks() {
    return ( 
    <div className="home">
      <div>
          <Header />
      </div>
      <div className = "body">
      <div className="WorkTab"> 
        <div className="title21"> Projects </div>
        <div className="description"> Click on them to learn more! </div>
        </div> 
        <div className="containerForWorks"> 
        <div className="grid-container21">
            <div className="grid-item1"> 
               <Link to="/project4">
               <figure>
                  <img src={p1} />
                  <figcaption>
                    <h> You Are The Problem </h> <br/>
                    VR simulation that explores fast fashion
                    </figcaption>
                </figure>
                 </Link>  
            </div>
            <div className="grid-item2"> 
            
               <Link to="/project5">
               <figure>
               <img src={p2} />
                  <figcaption><h> Finding Home </h> <br/>
                    Simulation in p5.js that uses genetic algorithm
                    </figcaption>
                </figure>
                </Link>  
            </div>
            <div className="grid-item3"> 
               <Link to="/project6">
               <figure>
               <img src={p3} />
                  <figcaption><h> Interactive Wedsites </h> <br/>
                    Three websites that explore interactivity through different mediums</figcaption>
                </figure> </Link>  
            </div>
            
            <div className="grid-item4"> 
               <Link to="/project7">
               <figure>
               <img src={p4} />
                  <figcaption><h> No More Stress </h> <br/>
                    Physical Interactive installation to reduce stress levels</figcaption>
                </figure> </Link>  
            </div>

        </div>
        </div>

         
      </div>
    </div>
    );
  }
  
  export default AlsoWorks;