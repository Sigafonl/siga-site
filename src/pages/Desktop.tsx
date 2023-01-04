import { useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Desktop () {
    const [isScrolling, setIsScrolling] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
  
    useEffect(() => {
        const onScroll = () => {
          if (window.pageYOffset) {
            setIsScrolling(true);
          } else {
            setIsScrolling(false);
          }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, []);

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            }
        window.addEventListener("resize", handleWindowResize);
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
      <div className="desktop-container">
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
      </div>
      
        // {width, height}
    );
}