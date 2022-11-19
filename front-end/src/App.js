// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home/home';

const App = props => {
  return (
    <Home />


    // <Router>
    //   <Routes>
    //     <Route path="/about" element={<About />} />

    //     <Route path="/work" element={<Work />} />

    //     <Route path="/contact" element={<Work />} />

    //   </Routes>
    // </Router>
  );
}

export default App


