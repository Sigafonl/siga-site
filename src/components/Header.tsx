import React from 'react';
import {HashLink as Link} from "react-router-hash-link"
import { useEffect, useState } from "react";

export default function Header(){

    const [sticky, setSticky] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyStatus = scrollTop >= 250 ? "is-sticky" : "";
        setSticky(stickyStatus);
        console.log(stickyStatus)
    };

    return (
        <header id='header'>
            <nav>
                <div id='nav-logo' className='nav-section'>
                    <Link smooth to="#home">LOGO</Link>
                </div>
                <div id='nav-projects' className='nav-section'>
                    <Link smooth to="#projects">PROJECTS</Link>
                </div>
                <div id='nav-about' className='nav-section'>
                    <Link smooth to="#about">ABOUT</Link>
                </div>
                <div id='nav-contact' className='nav-section'>
                    <Link smooth to="#contact">CONTACT</Link>
                </div>
            </nav>
        </header>
    );
}