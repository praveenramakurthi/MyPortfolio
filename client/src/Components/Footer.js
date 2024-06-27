import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.css';
const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://twtter.com/your_username" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://linkedin.com/in/praveenramakurthi" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/praveenramakurthi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    {/* Add more social media links/icons as needed */}
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Praveen. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
