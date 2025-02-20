import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Navbar from './Navbar';
import Hero from './Hero';
import Ellipse from './assets/Ellipse 1.png';
import Ellipse2 from './assets/Ellipse 2.png';
import Ellipse3 from './assets/Ellipse 3.png';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import CoverLetter from './CoverLetter';
import Faq from './Faq';
import PastEx from './PastEx';
import Mouse from './Mouse';
import Tabs from './Tabs';
import Portfolio from './Portfolio';
import CriticalMass from './CriticalMass'; // New import

import './css/App.css';

const App = () => {
    const title = 'Skills';
    const tabs = [
        {
            name: "frontend",
            content: "javascript, HTML, CSS, ReactJS, Sass, Wordpress, GSAP, Vue"
        },
        {
            name: "backend",
            content: "Express, Ruby on rails, Node JS, PSQL, GIT"
        },
        {
            name: "other",
            content: "Figma, Scrum, Notion, Clickup, Excel"
        }
    ];

    return (
        <Router basename="/Portfolio">
            <div className='middle'>
                <img src={Ellipse} alt='Ellipse' className='ellipse1' />
                <div className='body'>
                    <Mouse />
                    <Navbar className='body' />
                    {/* Navigation Links */}
                    <nav className="p-4 bg-gray-800 text-white">
                        <ul className="flex space-x-4">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/criticalmass">Critical Mass</Link></li>
                        </ul>
                    </nav>

                    <Routes>
                        {/* Main Portfolio Route */}
                        <Route path="/" element={
                            <>
                                <div className='hero_section'>
                                    <Hero />
                                </div>
                                <About />
                                <CoverLetter />
                                <PastEx />
                                <Tabs title={title} tabs={tabs} />
                                <Faq />
                                <Portfolio />
                                <Contact />
                                <Footer />
                            </>
                        } />

                        {/* Critical Mass Route */}
                        <Route path="/critical-mass" element={<CriticalMass />} />
                    </Routes>
                </div>
                <img src={Ellipse2} alt='Ellipse2' className='ellipse2' />
                <img src={Ellipse3} alt='Ellipse3' className='ellipse3' />
            </div>
        </Router>
    );
};

export default App;
