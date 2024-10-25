import React from 'react';
import './portfolio.css';
const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="portfolio-content">
                <h2>My Projects</h2>
                <div className="projects">
                    <div className="project">
                        <h3>ECommerce Website</h3>
                        <p>
                            An eCommerce website for selling products online. Built with React for the frontend, Node.js and Express for the backend, and MongoDB for the database.
                        </p>
                        {/* <a href="https://live-demo-link.com" target="_blank" rel="noopener noreferrer" className="cta">View Live</a> */}
                        <a href="https://github.com/praveenramakurthi/Ecommerse" target="_blank" rel="noopener noreferrer" className="cta">Source Code</a>
                    </div>
                    <div className="project">
                        <h3>Portfolio Website</h3>

                        <p>
                            A personal portfolio website to showcase my projects, skills, and experience. Built with HTML, CSS, JavaScript, and React.
                        </p>
                        {/* <a href="https://live-demo-link.com" target="_blank" rel="noopener noreferrer" className="cta">View Live</a> */}
                        <a href="https://github.com/praveenramakurthi/MyPortfolio" target="_blank" rel="noopener noreferrer" className="cta">Source Code</a>
                    </div>
                    <div className="project">
                        <h3>Diabetics Prediction Using ML</h3>
                        <p>
                            The "Diabetics Prediction Using Machine Learning" project aims to leverage machine learning algorithms to predict the likelihood of a patient having diabetes based on various health parameters. This project demonstrates the practical application of data science in the medical field, potentially aiding early diagnosis and treatment of diabetes.
                        </p>
                        {/* <a href="https://live-demo-link.com" target="_blank" rel="noopener noreferrer" className="cta">View Live</a> */}
                        <a href="https://github.com/praveenramakurthi/portfolio-website" target="_blank" rel="noopener noreferrer" className="cta">Source Code</a>
                    </div>
                    <div className="project">
                        <h3>Data Visualization using ML</h3>
                        <p>
                        In this project, we aim to create an interactive data visualization tool that utilizes machine learning algorithms to predict and visualize financial trends based on historical data. The tool will allow users to explore and analyze trends in stock prices, commodity prices, or any financial metrics of interest.
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
