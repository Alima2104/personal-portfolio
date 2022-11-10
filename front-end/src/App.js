import logo from './logo.svg';
import './App.css';
import Header from "../src/components/header/index";
import Footer from './components/footer';

function App() {
  return (
    <div className="home">
    <div>
        <Header />
    </div>
    {/* <div>
        <Body />
    </div> */}
    <div>
        <Footer />
    </div>
  </div>
  );
}

export default App;
