import React from 'react';
import './About.css';
import Projects from './Projects/Projects';

const About = () => {
    return (
        <section>
            <div className='wrapper about'>
                <div className="about-heading-and-subtext-wrapper">
                    <div className="about-subtext-wrapper">
                    <h6>Product Designer</h6>
                    </div>
                    <div className="about-heading-wrapper">
                    <h2 className="about-heading">That's me!</h2>
                    </div>
                </div>
                <div className="about-content-wrapper"><p className="paragraph medium">Over the past 12 years, I've worked with a diverse range of <br /> clients, from startups to Fortune 500 companies.&nbsp;I love crafting interfaces that delight users and help businesses grow.</p></div>
            </div>
            <Projects/>
        </section>
    );
};

export default About;