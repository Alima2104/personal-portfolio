import logo from './logo.svg';
import './App.css';
import Header from "../src/components/header/index";
import About from "../src/components/about/about";
import MySketch from './components/about/p5sketch';
// import index from '../src/components/about/graphics/index.html';
import Work from './components/work';
import Footer from './components/footer';

function App() {
  return (
    <div className="home">
    <div>
        <Header />
    </div>
    <div>
        <About />
        <MySketch/>
    </div>
   {/* <div className='workgrid'> 
      <Work />
    </div> */}
  </div>
  );
}

export default App;
