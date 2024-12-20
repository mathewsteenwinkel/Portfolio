import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Ellipse from './assets/Ellipse 1.png';
import Ellipse2 from './assets/Ellipse 2.png';
import Ellipse3 from './assets/Ellipse 3.png';
import About from './About';
import Toolbox from './Toolbox';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';
import CoverLetter from './CoverLetter';
import Faq from './Faq';
import PastEx from './PastEx';
import Mouse from './Mouse';
import Tabs from './Tabs';

import './css/App.css';




const App = () => {

    const title = 'Skills'
    const tabs = [
        {
        name:"frontend",
        content: "javascript, HTML, CSS, ReactJS, Sass, Wordpress, GSAP, Vue"
    },
    {
        name:"backend",
        content: "Express, Ruby on rails, Node JS, PSQL, GIT"
    },
    {
        name:"more skills",
        content: "Figma, Scrum, Notion, Clickup, Excel"
    }
    ]

    return (
        <div className='middle'>
            <img src={Ellipse} alt='Ellipse' className='ellipse1' />
            <div className='body'>
                <Mouse/>
                <Navbar className='body' />
                <div className='hero_section'>
                    <Hero />
                </div>
                <About />
                <CoverLetter />
                <PastEx />
                <Tabs title={title}
                tabs={tabs}
                />
                <Toolbox />
                <Faq />
                <Projects />
                <Contact />
                <Footer />
            </div>
            <img src={Ellipse2} alt='Ellipse2' className='ellipse2' />
            <img src={Ellipse3} alt='Ellipse3' className='ellipse3' />
        </div>
    );
};

export default App;
