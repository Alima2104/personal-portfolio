import './App.css';
import { BrowserRouter, Routes,  Route, Link} from "react-router-dom";
import Home from './components/home/home';
import Project1Description from './pages/project1';

const App = props => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path = "/" element= {<Home/>} />
        <Route path="/project1" element={<Project1Description/>} />
        <Route path="/project2" element={<Project1Description/>} />
        <Route path="/project3" element={<Project1Description/>} />
        <Route path="/project4" element={<Project1Description/>} />
        <Route path="/project5" element={<Project1Description/>} />
        <Route path="/project6" element={<Project1Description/>} />
      </Routes>
</BrowserRouter>
</>
  );
}

export default App


