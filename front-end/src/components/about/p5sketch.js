import React from "react";
import p5 from 'p5';

class MySketch extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }
    Sketch = (p) => {
      var width = 1000;
      var height = 1000
        
       p.setup = () => {
        p.background(10,20,30)
        p.createCanvas(width, height);
        p.angleMode(p.DEGREES);
        p.rectMode(p.CENTER);
        // console.log("set up");    
       }
  
       p.draw = () => {
        p.noFill();
        p.translate(width/2, height/2);
        for (var i=0; i<200; i++){
          p.push()
          p.rotate(p.sin(p.frameCount +i)*100)
          var r = p.map(p.sin(p.frameCount), -1, 1, 50, 255)
          var g = p.map(p.cos(p.frameCount/2), -1, 1, 50, 255)
          var b = p.map(p.sin(p.frameCount /4), -1, 1, 50, 255)
          p.stroke(r,g,b)
          p.rect(0,0,600-i*3,600-i*3,200-i)
          p.pop()
        }
       }
    }
  
    componentDidMount() {
      this.myP5 = new p5(this.Sketch, this.myRef.current)
    }
  
    render() {
      console.log("rendered");
      return (
        <div ref={this.myRef}>
       
        </div>
      )
    }
  }

  export default MySketch