import React from 'react';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header(){

    return (
        <header>
            <nav>
                <div id='nav-logo' className='nav-section'>
                    <NavLink to="/">LOGO</NavLink>
                </div>
                <div id='nav-projects' className='nav-section'>
                    <NavLink to="/projects">PROJECTS</NavLink>
                </div>
                <div id='nav-about' className='nav-section'>
                    <NavLink to="/about">ABOUT</NavLink>
                </div>
                <div id='nav-contact' className='nav-section'>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
            </nav>
        </header>
    );
}