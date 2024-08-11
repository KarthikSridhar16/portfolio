import React, { useEffect, useState } from 'react';
import './Home.css';

// Import the image
import profileImage from '../assets/images/profile.jpg';

const Home = () => {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 500); 

        return () => clearTimeout(timer);
    }, []);

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home">
            {showImage && (
                <div className="profile-image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
            )}
            <h1>Welcome to My Portfolio</h1>
            <p>I'm Karthik Sridhar, frontend developer passionate about creating beautiful and functional web experiences.</p>
            <button onClick={scrollToNextSection} className="scroll-down-button">Scroll Down</button>
        </section>
    );
};

export default Home;


