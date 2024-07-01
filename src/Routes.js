import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/Home/home'
import AboutMe from './pages/roadmap/roadmap'
import Projects from './pages/Projects/projects'
import Contact from './pages/Contact/contact'

function routes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/roadmap" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default routes;