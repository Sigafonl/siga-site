import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from '../components/Header';
import About from './About';
import Desktop from './Desktop';

export default function Home() {
    return (
        <div className= 'home-container' id='home'>
            <Header />
            <Outlet />
            <Desktop></Desktop>
        </div>
    );
}