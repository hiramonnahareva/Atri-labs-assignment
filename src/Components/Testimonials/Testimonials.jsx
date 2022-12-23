import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section>
            <div className="wrapper testimonial-headings">
                <div className="testimonial-heading-subtext-wrapper">
                    <h6>Testimonials</h6>
                </div>
                <div className="testimonial-heading-wrapper">
                    <h2>Word on the street</h2>
                </div>
            </div>
            <div className="wrapper testimonial-down">
                <div className="testimonial-container">
                    <div className="testimonial-image-wrapper">
                        <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/604773c422dbe6174ff754e5_jake-nackos-IF9TK5Uy-KI-unsplash%2012-min.png" loading="lazy" alt="" className="image" />
                    </div>
                    <div className="testimonial-content">
                        <div className="testimonial-quote-icon-wrapper">
                            <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff6a53da27356854576b920_Group%2058.svg" loading="lazy" alt="" className="image contain" />
                        </div>
                        <div className="testimonial-content-text">
                            <h3 className="testimonial-content-text">This is unbelievable. After using Testiminial Generator my buisness skyrocketed!</h3>
                        </div>
                        <div className="testimonial-name-and-position-wrapper">
                            <div className="testimonial-name-wrapper">
                                <div className="text-block testimonial-name">Jennifer Musk</div>
                            <div className="text-block _18px">Project Manager@ Microsoft</div>
                            <div className='testimonial-arrow-container'>
                <div class="testimonial-arrow left w-slider-arrow-left" role="button" tabindex="0" aria-controls="w-slider-mask-1" aria-label="previous slide"><div class="testimonial-arrow-icon-wrapper"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584ac8595f0e43b2b567_Vector-1.svg" loading="lazy" alt="" class="image contain"/></div></div>
                <div class="testimonial-arrow right w-slider-arrow-right" role="button" tabindex="0" aria-controls="w-slider-mask-1" aria-label="next slide"><div class="testimonial-arrow-icon-wrapper"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584a5ceaed4f77de60cb_Vector.svg" loading="lazy" alt="" class="image contain"/></div></div>
                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;