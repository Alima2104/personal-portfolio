import React from "react";
import './web.css';
import { Link } from "react-router-dom";


function Web() {
  return <div className="web">
    <div className="web-option">
      <Link to="/about">About </Link>    
    </div>
    <div className="web-option">
      <Link to="/Work">UX/UI </Link>   
    </div>
    <div className="web-option">
      <Link to="/alsoWork">Projects </Link>   
    </div>
    <div className="web-option">
     <Link to="/Contact">Contact</Link>   
    </div>
  </div>;
}

export default Web;