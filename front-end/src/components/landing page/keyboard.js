import Spline from '@splinetool/react-spline';
import {BrowserRouter as Link} from 'react-router-dom';

export default function Keyboard() {
    function onMouseDown(e) {
        if (e.target.name === 'projects') {
        //   console.log('I have been clicked!');
          document.getElementById('work').scrollIntoView();
        }

        if (e.target.name === 'About') {
            //   console.log('I have been clicked!');
              document.getElementById('about').scrollIntoView();
            }

        if (e.target.name === 'contact') {
                //   console.log('I have been clicked!');
            document.getElementById('contact').scrollIntoView();
        }
    }
  return (

    <Spline scene="https://prod.spline.design/PmqAUm4IZB-QWHIG/scene.splinecode"
    onMouseDown={onMouseDown} />

    
  );
}
