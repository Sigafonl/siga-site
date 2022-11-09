import {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./scss/style.css";
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {

  return (    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  );

  // return width < breakpoint ? <Mobile /> : <Desktop/>;
}

export default App;
