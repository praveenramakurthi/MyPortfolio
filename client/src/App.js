// src/App.js
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import Main from './Components/Main';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </Router>
    );
}

export default App;
