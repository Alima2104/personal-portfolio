import React from "react";
import Header from "../../components/header";
import p1 from "./img/p1.jpeg";
import p2 from "./img/p2.jpeg";
import p3 from "./img/p3.jpeg";
import p4 from "./img/p4.jpeg";
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
        <div className="title"> More Projects </div>
        <div className="description"> Click on them to learn more! </div>
        </div> 
        <div className="containerForWorks"> 
        <div className="grid-container">
            <div className="grid-item"> 
               <Link to="/project4">
               <figure>
                  <img src={p2} />
                  <figcaption>
                    <h> Name of the Project </h> <br/>
                    Caption goes here
                    </figcaption>
                </figure>
                 </Link>  
            </div>
            <div className="grid-item"> 
            
               <Link to="/project5">
               <figure>
               <img src={p2} />
                  <figcaption><h> Name of the Project </h> <br/>
                    Caption goes here
                    </figcaption>
                </figure>
                </Link>  
            </div>
            <div className="grid-item"> 
               <Link to="/project6">
               <figure>
               <img src={p2} />
                  <figcaption><h> Name of the Project </h> <br/>
                    Caption goes here</figcaption>
                </figure> </Link>  
            </div>
            
        </div>
        </div>

         
      </div>
    </div>
    );
  }
  
  export default AlsoWorks;