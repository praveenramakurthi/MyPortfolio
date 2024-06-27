import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Main = () => {
    return (
        <div>
            <div className="App">
                <Header />
                <main>
                    <Home />
                    <About />
                    <Portfolio />
                    <Contact />
                    <Footer />
                </main >
            </div>
        </div>
    )
}

export default Main
