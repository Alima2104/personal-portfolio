import './App.css';
import { BrowserRouter, Routes,  Route, Link} from "react-router-dom";
import Home from './components/home/home';
import Project1Description from './pages/project1';
import Project2Description from './pages/project2';
import Project3Description from './pages/project3';
import Project4Description from './pages/project4';
import Project5Description from './pages/project5';
import Project6Description from './pages/project6';

const App = props => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path = "/" element= {<Home/>} />
        <Route path="/project1" element={<Project1Description/>} />
        <Route path="/project2" element={<Project2Description/>} />
        <Route path="/project3" element={<Project3Description/>} />
        <Route path="/project4" element={<Project4Description/>} />
        <Route path="/project5" element={<Project5Description/>} />
        <Route path="/project6" element={<Project6Description/>} />
      </Routes>
</BrowserRouter>
</>
  );
}

export default App


