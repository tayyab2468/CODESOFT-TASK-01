
import './App.css';
import './Components/Navbar.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import './Components/intro.css';
import AboutMe from './Components/AboutMe';
import './Components/AboutMe.css';
import ProjectShowcase from './Components/ProjectShowcase';
import './Components/projects.css';
import Contact from './Components/Contact';
import './Components/contact.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
       <Routes>
          <Route path="/Intro" element={<Intro />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ProjectShowcase" element={<ProjectShowcase />} />
          <Route path="/Contact" element={<Contact />} />
          
          
       </Routes>
       </BrowserRouter>
  );
}

export default App;
