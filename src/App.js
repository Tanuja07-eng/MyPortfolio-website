import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import Education from "./Components/Education/education";
import Skills from "./Components/Skills/skills";
import Experience from './Components/Experience/experience'
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Navbar/>
      <div id="Body">
      <Home/>
      <div className="Wrapper">
      <Skills/>
      <Experience/>
      </div>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
      </div>
      </Router>
       
   
  );
}

export default App;
