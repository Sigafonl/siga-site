import React from 'react';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from '../components/Header';

export default function About() {
    return (
        <div>
            <Header></Header>
            <div>
                <p>
                    ABOUT
                </p>
            </div>
        </div>
    );
}