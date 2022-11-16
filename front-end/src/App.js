import logo from './logo.svg';
import './App.css';
import Header from "../src/components/header/index";
import About from "../src/components/about/about";
import Footer from './components/footer';

function App() {
  return (
    <div className="home">
    <div>
        <Header />
    </div>
    <div>
        <About />
    </div>
  </div>
  );
}

export default App;
