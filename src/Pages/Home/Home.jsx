import React from 'react';
import About from '../../Components/About/About';
import BlogSection from '../../Components/BlogSection/BlogSection';
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
            <BlogSection/>
            <About/>
            <Experience/>
            <Testimonials/>
            <FAQSection/>
        </div>
    );
};

export default Home;