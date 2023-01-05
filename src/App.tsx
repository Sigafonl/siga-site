import {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

import "./scss/style.css";
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from './components/Header';

function App() {

  return (    
    <div>    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="projects" element={<Projects/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
          </Route>    
        </Routes>
      </Router>
    </div>
  );

  // return width < breakpoint ? <Mobile /> : <Desktop/>;
}

export default App;
