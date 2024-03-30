import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/Home/home'
import AboutMe from './pages/About_Me/aboutme'
import Projects from './pages/Projects/projects'
import Contact from './pages/Contact/contact'
import Tecnologia from './pages/About_Me/Tecnologia/tecnologia'
import Formacao from './pages/About_Me/Formacao/formacao'
import Experiencia from './pages/About_Me/Experiencia/experiencia'
import Interesse from './pages/About_Me/Interesse/interesse'

function routes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/tecnologias" element={<Tecnologia />} />
                <Route path="/formacao" element={<Formacao />} />
                <Route path="/experiencia" element={<Experiencia />} />
                <Route path="/interesse" element={<Interesse />} />
            </Routes>
        </BrowserRouter>
    );
}

export default routes;