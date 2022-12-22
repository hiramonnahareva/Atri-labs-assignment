import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div class="wrapper home-hero">
            {/* ---------- left ------------ */}
            <div className="home-hero-content-wrapper">
                <div className="home-hero-heading-wrapper">
                    <h1 className="heading">
                        <span className="hero-gradient-heading">I design products</span>
                        <br />
                        that delight and
                        <br />
                         inspire people.
                        <br />
                    </h1>
                </div>
                    <div className="home-hero-paragraph-wrapper">
                    <p className="paragraph">Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
                    </div>
                    <div className="home-hero-button-wrapper">
                        <a href="" className="button w-inline-block">
                            <div className="button-up">
                                <div className="button-text">Book a call</div>
                            </div>
                            <div className="button-down">
                            </div>
                        </a>
                        <a href="" className="home-hero-link-wrapper w-inline-block">
                        <div class="home-hero-link-text">Download CV</div>
                        <div class="home-hero-arrow-wrapper"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg" loading="lazy" alt="" class="image contain"/></div>
                        </a>
                    </div>
                    
            </div>
            {/* ---------- right ------------ */}
            <div className="home-hero-image-wrapper">
            <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/60ad1c2b0e1d633fc7ef2e69_Group%20160-min.jpg" loading="lazy"  alt="" class="image home-hero"/>
            </div>
        </div>
    );
};

export default Hero;