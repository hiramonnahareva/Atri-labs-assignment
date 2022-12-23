import React from 'react';
import About from '../../Components/About/About';
import CaseStudies from '../../Components/CaseStudies/CaseStudies';
import Experience from '../../Components/Experience/Experience';
import FAQSection from '../../Components/FAQ/FAQSection';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Trusted from '../../Components/Trusted/Trusted';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Trusted/>
            <Services/>
            <CaseStudies/>
            <About/>
            <Experience/>
            <Testimonials/>
            <FAQSection/>
        </div>
    );
};

export default Home;