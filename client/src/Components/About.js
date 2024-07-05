import React from 'react';
import './about.css'
const About = () => {
    return (
        <section id="about">
            <div className="about-content">
                <h2>About Me</h2>
                <div className="about-details">
                    <div className="about-text">
                    <p>
                            Hi, I'm Praveen, an engineering graduate with a Bachelor's degree in Computer Science Engineering. Over the past 4 years, I have gained extensive experience in the tech industry, specializing in software development and web technologies.
                        </p>
                        <p>
                            My expertise lies in developing dynamic and responsive web applications. I am proficient in HTML, CSS, JavaScript, and React, and I have a strong foundation in computer science principles and problem-solving skills.
                        </p>
                        <p>
                            I am passionate about leveraging technology to solve real-world problems and continuously strive to enhance my skills and knowledge. Outside of work, I enjoy exploring new tech trends, reading tech blogs, and engaging in outdoor activities.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="20230908_161410.jpg" alt="praveen" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
