import React from 'react';
import './ProjectSlider.css';
const ProjectSlider = () => {
    return (
        <div className='wrapper project-slider'>
            <div className='project-slider w-slider'>
                <div className="project-slider-mask w-slider-mask">
                    <div className="project-slide w-slide" role="group"><div className="w-dyn-list"><div role="list" className="w-dyn-items"><div role="listitem" className="w-dyn-item">
                        <a href="/" className="project-slide-link-block w-inline-block">
                        <div className="project-slider-image-wrapper">
                            <img src="https://assets.website-files.com/5ff05a7bd62f16808f485280/6077dc9bcd0f7a437038f60d_image_processing20200129-19798-1k8ponz%201-min.png" loading="lazy" alt="" className="image img-hover" />
                        </div>
                        <div className="project-slider-content"><div className="project-slider-tags-wrapper"><div className="project-slider-tag-text-wrapper"><h6 className="project-slider-tag-text">Branding</h6></div></div>
                        <div className="project-slider-heading-wrapper">
                            <h5 className="project-slider-heading">Soulful Rebrand</h5>
                        </div><div className="view-project-div">
                                <div className="text-block _18px">View Project</div>
                                <div className="view-project-arrow-wrapper">
                                    <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg" loading="lazy" alt="" className="view-project-arrow" /></div></div></div></a></div></div></div></div>
                                    <div className="project-slide w-slide" aria-label="2 of 5" role="group" aria-hidden="true">
                        <div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true">
                            <a href="/" className="project-slide-link-block w-inline-block" tabIndex="-1" aria-hidden="true"><div className="project-slider-image-wrapper" aria-hidden="true"><img src="https://assets.website-files.com/5ff05a7bd62f16808f485280/6077dcc78ec31466630c033f_image_processing20200129-19798-1k8ponz%202-min.png" loading="lazy" alt="" className="image img-hover" aria-hidden="true" />
                            </div>
                                <div className="project-slider-content" aria-hidden="true">
                                    <div className="project-slider-tags-wrapper" aria-hidden="true">
                                        <div className="project-slider-tag-text-wrapper" aria-hidden="true">
                                            <h6 className="project-slider-tag-text" aria-hidden="true">Product Design</h6>
                                        </div>
                                            </div>
                                    <div className="project-slider-heading-wrapper" aria-hidden="true">
                                        <h5 className="project-slider-heading" aria-hidden="true">Datadash Product design</h5>
                                    </div><div className="view-project-div" aria-hidden="true"><div className="text-block _18px" aria-hidden="true">View Project</div><div className="view-project-arrow-wrapper" aria-hidden="true">
                                        <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg" loading="lazy" alt="" className="view-project-arrow" aria-hidden="true" />
                                    </div></div></div></a></div></div></div></div>
                    <div className="project-slide w-slide" aria-label="3 of 5" role="group" aria-hidden="true">
                        <div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true">
                            <a href="/" className="project-slide-link-block w-inline-block" tabIndex="-1" aria-hidden="true">
                                <div className="project-slider-image-wrapper" aria-hidden="true">
                                    <img src="https://assets.website-files.com/5ff05a7bd62f16808f485280/6077dcd635f7f176db9fef1e_image_processing20200129-19798-1k8ponz%203-min.png" loading="lazy" alt="" className="image img-hover" aria-hidden="true" /></div><div className="project-slider-content" aria-hidden="true"><div className="project-slider-tags-wrapper" aria-hidden="true"><div className="project-slider-tag-text-wrapper" aria-hidden="true"><h6 className="project-slider-tag-text" aria-hidden="true">Web Design</h6></div></div><div className="project-slider-heading-wrapper" aria-hidden="true"><h5 className="project-slider-heading" aria-hidden="true">Maize Website Design </h5></div><div className="view-project-div" aria-hidden="true"><div className="text-block _18px" aria-hidden="true">View Project</div><div className="view-project-arrow-wrapper" aria-hidden="true"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg" loading="lazy" alt="" className="view-project-arrow" aria-hidden="true" />
                                    </div></div></div></a></div></div></div></div>

                                    {/* ------------------ button --------- */}
                            
                                    <div className="project-slider-left-arrow w-slider-arrow-left" role="button" tabIndex="0" aria-controls="w-slider-mask-0" aria-label="previous slide">
                                        <div className="project-slider-arrow-icon-wrapper">
                                        <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584b6f3b7d0fb04e725e_Vector-4.svg" loading="lazy" alt="" className="image contain"/>
                                        </div></div>
                                    <div className="project-slider-right-arrow w-slider-arrow-right" role="button" tabIndex="0" aria-controls="w-slider-mask-0" aria-label="next slide">
                                        <div className="project-slider-arrow-icon-wrapper">
                                            <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584a07453d08e05572b5_Vector-3.svg" loading="lazy" alt="" className="image contain"/>
                                        </div>
                                        </div>

                                        {/* ------------------ button end --------- */}
                                        
                </div>
            </div>
        </div>

    );
};

export default ProjectSlider;