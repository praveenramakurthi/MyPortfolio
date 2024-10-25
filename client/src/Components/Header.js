import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                    <li><a href="Praveen's resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
