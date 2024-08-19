
import React, { useState } from 'react';
import './ExperienceEducation.css';

const ExperienceEducation = () => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <div className="experience-education-container">
            <div className="section-links">
                <div className="link" onClick={() => openModal('education')}>
                    Education
                </div>
                <div className="link" onClick={() => openModal('experience')}>
                    Experience
                </div>
            </div>

            {modalContent && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {modalContent === 'education' && (
                            <>
                                <h2>Education</h2>
                                <ul>
                                    <li>
                                        <h3>B.Com International Business</h3>
                                        <p><strong>Institution:</strong> NGM College of Art and Science</p>
                                        <p><strong>Duration:</strong> 2018 - 2021</p>
                                        <p><strong>Details:</strong> This undergraduate degree provided a solid foundation in international business principles, including global market dynamics, cross-cultural communication, and international trade regulations. I completed various projects and internships related to international business strategies, which enhanced my analytical and research skills.</p>
                                    </li>
                                    <li>
                                        <h3>MBA in Data Science</h3>
                                        <p><strong>Institution:</strong> Manipal Institute of Management, MAHE</p>
                                        <p><strong>Duration:</strong> 2024 - 2026 (Expected)</p>
                                        <p><strong>Details:</strong> This postgraduate program focuses on leveraging data to drive business decisions. Coursework includes data analysis, machine learning, and data visualization. The program involves hands-on projects with real-world datasets, providing practical experience in extracting insights and making data-driven decisions.</p>
                                    </li>
                                </ul>
                            </>
                        )}
                        {modalContent === 'experience' && (
                            <>
                                <h2>Experience</h2>
                                <ul>
                                    <li>
                                        <h3>Process Executive</h3>
                                        <p><strong>Company:</strong> Infosys BPM</p>
                                        <p><strong>Duration:</strong> July 2021 - January 2023</p>
                                        <p><strong>Role:</strong> As a Process Executive, I was responsible for manual testing using Jira, which involved creating and executing test cases to ensure software quality. I also wrote and maintained scripts to automate testing processes, which improved efficiency and accuracy in our testing procedures. My role included analyzing bugs, coordinating with development teams, and contributing to process improvements.</p>
                                    </li>
                                </ul>
                            </>
                        )}
                        <span className="close-button" onClick={closeModal}>&times;</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceEducation;
