import React, { useEffect, useState } from 'react';
import './Projects.css';


import portfolioImage from '../assets/images/portfolio.jpg';
import oilImage from '../assets/images/oil.jpeg';
import uiuxImage from '../assets/images/uiux.png';
import fedImage from '../assets/images/FED.jpeg';

const Projects = () => {
    const [projects] = useState([
        { 
            title: "Personal Portfolio Website", 
            image: portfolioImage, 
            description: "Developed a responsive and visually appealing personal portfolio website to showcase my skills, projects, and experience."
        },
        { 
            title: "Shree Krishna Cold Press Oils Website", 
            image: oilImage, 
            description: "Designed and developed a small business website for Shree Krishna Cooled Press Oils, featuring an easy-to-navigate layout and optimized for mobile devices."
        },
        { 
            title: "UI/UX Design Internship", 
            image: uiuxImage, 
            description: "Gained hands-on experience in UI/UX design, creating wireframes, prototypes, and user flows during my internship."
        },
        { 
            title: "Frontend Development Internship at Unified Mentor Company", 
            image: fedImage, 
            description: "Currently working as a Frontend Developer Intern, translating design mockups into interactive web pages and collaborating with backend developers."
        },
    ]);

  
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
       
        const timer = setTimeout(() => {
            setAnimationClass('fade-in');
        }, 100); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className={`project-list ${animationClass}`}>
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;


