import React from 'react';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from '../components/Header';

export default function Home() {
    return (
        <div>
            <Header></Header>
            <div>
                <p>
                    HOME
                </p>
            </div>
        </div>
    );
}