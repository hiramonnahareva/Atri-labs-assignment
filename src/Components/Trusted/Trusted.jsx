import React from 'react';
import './Trusted.css';

const Trusted = () => {
    return (
        <section className='trusted-by-section wf-section'>
            <div className="trusted-by">
                <div className="trusted-by-text-wrapper">
                <div className="text-block">Trusted by</div>
                </div>
                <div className="trusted-logo-grid">
                <div className="trusted-logo-item"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078b0cd748b8581836fddf5_Group%20334.png" loading="lazy" alt="" className="image contain"/></div>
                <div className="trusted-logo-item"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078b0ccdbeafadf1a24d34a_Group%20333.png" loading="lazy" alt="" className="image contain"/></div>
                <div className="trusted-logo-item"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078b0c238e88c2e55fe84cf_Group%20335.png" loading="lazy" alt="" className="image contain"/></div>
                <div className="trusted-logo-item"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078b0c235209438ffca029b_Group%20336.png" loading="lazy" alt="" className="image contain"/></div>
                </div>
            </div>
        </section>
    );
};

export default Trusted;