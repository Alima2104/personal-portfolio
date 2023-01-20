import './App.css';
import { BrowserRouter, Routes,  Route, Link} from "react-router-dom";
import Project1Description from './pages/projects/project1';
import Project2Description from './pages/projects/project2';
import Project3Description from './pages/projects/project3';
import Project4Description from './pages/projects/project4';
import Project5Description from './pages/projects/project5';
import Project6Description from './pages/projects/project6';
import Project7Description from './pages/projects/project7';
import LandingPage from './pages/landingPage/landingPage';
import Works from './pages/work/work';
import Contact from './pages/ContactMe/contact';
import AlsoWorks from './pages/alsoWork/alsoWork';
import About from './pages/aboutMe/about';

const App = props => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path = "/" element= {<LandingPage/>} />
        <Route path = "/about" element={<About/>}/>
        <Route path = "/work" element={<Works/>}/>
        <Route path = "/alsoWork" element={<AlsoWorks/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path="/project1" element={<Project1Description/>} />
        <Route path="/project2" element={<Project2Description/>} />
        <Route path="/project3" element={<Project3Description/>} />
        <Route path="/project4" element={<Project4Description/>} />
        <Route path="/project5" element={<Project5Description/>} />
        <Route path="/project6" element={<Project6Description/>} />
        <Route path="/project7" element={<Project7Description/>} />
      </Routes>
</BrowserRouter>
</>
  );
}

export default App


