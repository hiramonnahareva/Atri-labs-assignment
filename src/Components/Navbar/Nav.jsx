import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
        <div className=''>
           <div className='wrapper nav'>
            <a href="/" className='nav-brand w-nav-brand w--current'>
                <img src=" https://assets.website-files.com/5fef5619b640934b33c2385e/6078ab3cfa1bca879adb93d1_Group%2070.svg" alt="" />
                </a>
                <nav className='nav-menu w-nav-menu'>
                    <a href="#about" className='nav-link w-nav-link'>About</a>
                    <a href="#services" className='nav-link w-nav-link'>Services</a>
                    <a href="#projects" className='nav-link w-nav-link'>Projects</a>
                    <a href="#blogs" className='nav-link w-nav-link'>Blogs</a>
                    <a href="/" className='nav-button w-inline-block'>
                        <div className="nav-button-flex">
                            <div className="nav-button-text">Book a call</div>
                            <div className="nav-button-arrow-wrapper"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg" loading="lazy" width="13" alt=""/></div>
                        </div>
                        </a>
                </nav>
           </div>

        </div>
    );
};

export default Nav;