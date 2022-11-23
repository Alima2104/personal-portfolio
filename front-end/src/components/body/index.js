import React from "react";
import "./body.css";
import About from "../about/about";
import Work from "../work";
import Contact from "../contact/contact";
import Keyboard from "../landing page/keyboard";

function Body() {
  return (
  <div className="body">
    <section id="start">
      <Keyboard />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="work">
      <Work />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
  );
}

export default Body;