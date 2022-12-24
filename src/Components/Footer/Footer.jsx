import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section>
            <div className="footer-section">
                <div className="wrapper footer">
                <div className="footer-heading-wrapper">
                    <h2 className="footer-heading">Ready to make something kickass?<br/></h2>
                    <div className="footer-link-wrap"><a href="/" className="footer-cta">
                        <span className="footer-cta">Let's get on a call.</span></a>
                        <div className="footer-line"></div>
                        </div>
                        </div>
                        {/* ------------- address & links ---------- */}
                        <div className="footer-address-and-links-wrapper">
                            <div className="footer-address-wrapper">
                                <a href="/" aria-current="page" className="footer-logo-wrap w-inline-block w--current">
                                    <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078d43538e88cf2a8ff4464_White%20Logo.svg" loading="lazy" alt="" className="footer-logo"/>
                                    </a>
                                    <p className="paragraph _16px">4353 Delaware Avenue, San Francisco, USA</p>
                                    <a href="mailto:hi@thefolio.com?subject=Email" className="contact-email footer w-inline-block">
                                        <div className="email-image-wrapper footer">
                                        <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/60792c7df85964dafaa3825d_Vector.svg" loading="lazy" alt="" className="image contain"/>
                                        </div>
                                        <div className="email-text footer">hi@thefolio.com</div>
                                        </a></div><div className="footer-links-grid"><a href="/#About" className="footer-link-block w-inline-block"><div className="footer-link">About</div><div className="footer-link-bottom-border"></div></a><a href="/#Services" className="footer-link-block w-inline-block"><div className="footer-link">Services</div><div className="footer-link-bottom-border"></div></a><a href="/#Experience" className="footer-link-block w-inline-block"><div className="footer-link">Experience</div><div className="footer-link-bottom-border"></div></a><a href="/contact" className="footer-link-block w-inline-block"><div className="footer-link">Contact</div><div className="footer-link-bottom-border"></div></a><a href="/blog" className="footer-link-block w-inline-block"><div className="footer-link">Blog</div><div className="footer-link-bottom-border"></div></a><a href="/projects" className="footer-link-block w-inline-block"><div className="footer-link">Projects</div><div className="footer-link-bottom-border"></div></a><a href="https://dribbble.com/" className="footer-link-block w-inline-block"><div className="footer-link">Dribbble</div>
                                        <div className="footer-link-bottom-border"></div></a><a href="/" target="_blank" className="footer-link-block w-inline-block">
                            <div className="footer-link">Instagram</div>
                            <div className="footer-link-bottom-border">
                                </div>
                                </a>
                                <a href="/" target="_blank" className="footer-link-block w-inline-block">
                                    <div className="footer-link">Twitter</div>
                                    <div className="footer-link-bottom-border">
                                        </div></a></div></div>
                                        <div className="sub-footer-wrapper"><div className="sub-footer-text">© All rights reserved. <a href="https://www.conversionflow.co/" target="_blank" className="footer-down-links">Conversionflow</a>. Powered by <a href="https://webflow.com/" target="_blank" className="footer-down-links">Webflow </a>/ <a href="/reference/licensing" className="footer-down-links">Image License Info</a> / <a href="/reference/instructions" className="footer-down-links">Instructions</a> / <a href="/reference/changelog" className="footer-down-links">Changelog</a> / <a href="/reference/style-guide" className="footer-down-links">Style Guide</a></div></div>
                </div>
            </div>
        </section>
    );
};

export default Footer;