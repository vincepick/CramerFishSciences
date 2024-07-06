import React from 'react'

import { Footer, Blog, Possibility, Features, WhatSphere, Header} from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatSphere /> 
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
            {/* <h1>squiidgaammemmeee</h1> */}
        </div>
    )
}

export default App