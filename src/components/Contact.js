import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => (
    <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at: sritherna@gmail.com</p>
        <div className="social-icons">
            <a href="https://www.instagram.com/karthik_lucifer16/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://github.com/KarthikSridhar16" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/karthiksridharn/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
    </section>
);

export default Contact;
