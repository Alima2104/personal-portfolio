import React from "react";
import "./body.css";
import About from "../about/about";
import Work from "../work";
import Contact from "../contact/contact";

function Body() {
  return (
  <div className="body">
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