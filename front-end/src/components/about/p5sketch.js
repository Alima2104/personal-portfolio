import React from "react";
import p5 from 'p5';

class MySketch extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }
  
    Sketch = (p) => {
        let x = 100;
        let y = 100;
  
       p.setup = () => {
        p.createCanvas(720, 400);
        p.fill(204, 101, 192, 127);
        p.stroke(127, 63, 120);
        p.translate(580, 200);
        p.noStroke();
        for (let i = 0; i < 10; i ++) {
            p.ellipse(0, 30, 20, 80);
            p.rotate(3.14/5);
        }
        
       }
  
       p.draw = () => {
        // p.background(0);
        // p.fill(255);
        // p.rect(x,y,50,50);
       }
    }
  
    componentDidMount() {
      this.myP5 = new p5(this.Sketch, this.myRef.current)
    }
  
    render() {
      return (
        <div ref={this.myRef}>
  
        </div>
      )
    }
  }

  export default MySketch