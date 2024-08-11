// src/App.js
import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation'; // Import the ExperienceEducation component
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Projects />
        <section id="experience-education">
            <ExperienceEducation /> {/* Add the ExperienceEducation component */}
        </section>
        <Contact />
        <Footer />
    </div>
);

export default App;
