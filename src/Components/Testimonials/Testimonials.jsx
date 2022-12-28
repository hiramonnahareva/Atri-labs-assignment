import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const Testimonial_data = [
        {
            img: 'https://assets.website-files.com/5fef5619b640934b33c2385e/604773c422dbe6174ff754e5_jake-nackos-IF9TK5Uy-KI-unsplash%2012-min.png',
            content_text: 'This is unbelievable. After using Testiminial Generator my buisness skyrocketed!',
            testimonial_name: 'Jennifer Musk',
            text_block: 'Project Manager@ Microsoft',

        },
        {
            img: 'https://assets.website-files.com/5fef5619b640934b33c2385e/604788d804dfe4ec1de7bb97_image-1-compressed.jpg',
            content_text: "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.",
            testimonial_name: 'John Frankin',
            text_block: 'Founder, Double Bunch',

        }
    ]
    const [current, setCurrent] = useState(0);
    const length = Testimonial_data.length;
    const previous = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    if(!Array.isArray(Testimonial_data) || Testimonial_data.length <= 0){
        return null;
    }
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
                {
                    
                        Testimonial_data.map((item, index) => 
                        
                            index === current &&  <div key={index} className="testimonial-container">
                            <div className="testimonial-image-wrapper">
                              <img src={item.img} loading="lazy" alt="" className={index === current ? "image active-img" : ""} />
                            </div>     
                            <div className="testimonial-content">
                                <div className="testimonial-quote-icon-wrapper">
                                 <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff6a53da27356854576b920_Group%2058.svg" loading="lazy" alt="" className="image contain" />
                                </div>
                                <div className="testimonial-content-text">
                                 <h3 className="testimonial-content-text">{item.content_text}</h3>
                                </div>
                                <div className="testimonial-name-and-position-wrapper">
                                    <div className="testimonial-name-wrapper">
                                     <div className="text-block testimonial-name">{item.testimonial_name}</div>
                                     <div className="text-block _18px">{item.text_block}</div>
                                        
                                    
                                </div>
                                </div>
                            </div>
                        
                        </div>
                        
                       
                      
                       
                        )
                    
                }
            
               
                            <div className='testimonial-arrow-container'>
                <div className="testimonial-arrow left w-slider-arrow-left" onClick={previous}><div className="testimonial-arrow-icon-wrapper"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584ac8595f0e43b2b567_Vector-1.svg" loading="lazy" alt="" className="image contain"/></div></div>
                <div className="testimonial-arrow right w-slider-arrow-right" onClick={next}><div className="testimonial-arrow-icon-wrapper"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584a5ceaed4f77de60cb_Vector.svg" loading="lazy" alt="" className="image contain"/></div></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;