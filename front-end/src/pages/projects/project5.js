import React from "react";
import Header from "../../components/header";
import "./project5.css";

function Project5Description() {
  return ( <div className="home">
    <div>
        <Header />
    </div>
    <div className = "bodyPart">
      <div className="title"> 
      Finding Home
      </div>
      <div className="project5"> 
        <div class="grid-container5 ">
        {/* <div class="pppart1">
          <div className="GenDescription"> 
             Simulation in p5.js that demontrates the work of genetic algorithm.
          </div>
        </div> */}

        <div class="p2">
        <div className="projectDesc5" > 
        The simulation, created in <div className="bold">p5.js</div>, demonstrates the concept of a <div className="bold">genetic algorithm</div> through the use of machine learning. The simulation features a batch of astronauts attempting to learn the optimal way to fly back to Earth
The simulation starts with a randomly generated group of astronauts, each with their own unique set of "genes" representing their flight techniques. As the simulation runs, the astronauts undertake a series of virtual "flights" and are scored based on their performance. The highest-performing astronauts are selected to "breed" and pass on their genes to the next generation. This process continues, with each new generation of astronauts building on the successful traits of the previous generation, and discarding less successful ones. Over time, the population of astronauts evolves to become more efficient and skilled at flying back to Earth.
Users are able to observe the simulation as it progresses, watching as the population of astronauts improves and the optimal flight technique emerges. The simulation also provides visual representation of the genetic algorithm, such as graphs of the average fitness of the population over time, and highlighting the genes of the fittest individuals. The simulation provides an interactive way of understanding how genetic algorithm works in machine learning and how it can be applied in real world scenarios.
        </div>
        </div> 

        <div class="p3"  >
        <div className="editor5">
        <iframe src="https://editor.p5js.org/alima21/full/Y227mV9CC">
          </iframe> 
        </div>
      </div> 

        </div> 
        </div> 
    </div>
  </div>
  );
}

export default Project5Description;