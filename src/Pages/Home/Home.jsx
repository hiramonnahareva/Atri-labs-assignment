import React from 'react';
import About from '../../Components/About/About';
import CaseStudies from '../../Components/CaseStudies/CaseStudies';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import Trusted from '../../Components/Trusted/Trusted';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Trusted/>
            <Services/>
            <CaseStudies/>
            <About/>
        </div>
    );
};

export default Home;