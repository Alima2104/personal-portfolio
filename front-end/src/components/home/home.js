import React from "react";
import { BrowserRouter, Routes,  Route, Link} from "react-router-dom";
import "./home.css";
import Header from "../header/index";
import Body from "../body/index";
import Footer from "../footer/index";
import Project1Description from "../../pages/project1";


function Home() {
  return ( 
    <>  
  <div className="home">
    <div>
        <Header />
    </div>
    <div>
        <Body />
    </div>
    <div>
        <Footer />
    </div>
  </div>
  </>
  );

}

export default Home;