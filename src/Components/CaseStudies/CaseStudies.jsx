import React from 'react';
import './CaseStudies.css';
import ProjectSlider from './ProjectSlider/ProjectSlider';

const CaseStudies = () => {
    return (
        <section>
            <div className="wrapper case-studies-heading">
                <div className="case-study-heading-and-subtext-wrapper">
                    <div className="case-studies-subtext-wrapper">
                <h6>PROJECTS</h6>
                </div>
                <div className="case-study-heading-wrapper"><h2>I bring results.&nbsp;<br/>My clients are proof.</h2>
                </div>
                </div>
                <a href="/projects" className="button w-inline-block"><div className="button-up">
                    <div className="button-text">View all projects</div>
                    </div>
                    <div className="button-down">
                        <div className="button-text no-opacity">Let’s talk now!</div>
                        </div>
                        </a>
                        </div>
                        <ProjectSlider/>
        </section>
    );
};

export default CaseStudies;