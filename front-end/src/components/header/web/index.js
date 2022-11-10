

import React from "react";
import './web.css';

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="#about">
        About
        </a>
    </div>
    <div className="web-option">
        <a href="#work">
        Work
        </a>
    </div>
    <div className="web-option">
        <a href="#contact">
        Contact
        </a>
    </div>
  </div>;
}

export default Web;