import React from 'react';
import './portfolio.css';
const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="portfolio-content">
                <h2>My Portfolio</h2>
                <div className="projects">
                    <div className="project">
                        <h3>ECommerce Website</h3>
                        <p>
                            An eCommerce website for selling products online. Built with React for the frontend, Node.js and Express for the backend, and MongoDB for the database.
                        </p>
                        {/* <a href="https://live-demo-link.com" target="_blank" rel="noopener noreferrer" className="cta">View Live</a> */}
                        <a href="https://github.com/your-username/ecommerce-website" target="_blank" rel="noopener noreferrer" className="cta">Source Code</a>
                    </div>
                    <div className="project">
                        <h3>Portfolio Website</h3>
                        <p>
                            A personal portfolio website to showcase my projects, skills, and experience. Built with HTML, CSS, JavaScript, and React.
                        </p>
                        {/* <a href="https://live-demo-link.com" target="_blank" rel="noopener noreferrer" className="cta">View Live</a> */}
                        <a href="https://github.com/your-username/portfolio-website" target="_blank" rel="noopener noreferrer" className="cta">Source Code</a>
                    </div>
                    {/* Add more projects as needed */}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
