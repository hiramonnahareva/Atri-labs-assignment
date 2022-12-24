import React from 'react';
import './Services.css';

const Services = () => {
    const service_category = [
        {
            id: 1,
            headingText: 'What I can do for you',
            img: 'https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584362e74acfa6b75398_Group%2051.svg',
            paragraph: "Faster, better products that your users love. Here's all the services I provide:",
            category_1: 'Design Strategy',
            category_2: 'Web and Mobile App Design',
            category_3: 'Front-end Development'

        },
        {
            id: 2,
            headingText: "Applications I'm fluent in",
            img: 'https://assets.website-files.com/5fef5619b640934b33c2385e/5fef5843b6409375f7c23f2b_Group%2017.svg',
            paragraph: "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
            category_1: 'Sketch',
            category_2: 'Webflow',
            category_3: 'Figma'

        },
        {
            id: 3,
            headingText: 'What you can expect',
            img: 'https://assets.website-files.com/5fef5619b640934b33c2385e/5fef58435ceaed068dde60ca_Group%2016.svg',
            paragraph: 'I design products that are more than pretty. I make them shippable and usable.',
            category_1: 'Clean and functional',
            category_2: 'Device and user friendly',
            category_3: 'Efficient and maintainable'

        },
    ]
    return (
        <div id="Services" className="services-section wf-section">
            <div className="wrapper services">
                <div className="service-heading-and-subtext-wrapper">
                    <div className="services-sub-text-wrapper">
                        <h6>Services</h6>
                    </div>
                    <div className="service-heading-wrapper">
                        <h2>Design that solves problems, one product at a time.</h2>
                    </div>
                </div>
                <div className="services-grid">             
                    {
                        service_category.map(item => 
                            <div key={item.id} className="service-wrapper">
                        <div className="service-item-icon-wrapper">
                            <img src={item.img} loading="lazy" alt="" className="image contain"
                            />
                        </div><div className="service-item-heading-wrapper" >
                            <h5>{item.headingText}</h5>
                        </div>
                        <div className="service-item-paragraph-wrapper" >
                            <p className="paragraph _16px">{item.paragraph}</p>
                        </div>
                        <div className="service-pointer-wrapper"><div className="service-pointer-item">
                            <div className="service-pointer">
                                <div className="service-bullet-point">
                                </div>
                                <div className="service-pointer-trigger-text-wrapper">
                                    <div className="service-pointer-trigger-text">{item.category_1}</div>
                                </div>
                            </div>
                        </div>
                            <div className="service-pointer-item">
                                <div className="service-pointer">
                                    <div className="service-bullet-point">
                                    </div>
                                    <div className="service-pointer-trigger-text-wrapper">
                                        <div className="service-pointer-trigger-text">{item.category_2}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-pointer-item">
                                <div className="service-pointer">
                                    <div className="service-bullet-point">
                                    </div>
                                    <div className="service-pointer-trigger-text-wrapper">
                                        <div className="service-pointer-trigger-text">{item.category_3}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            )}
                </div>
            </div>
        </div>
    );
};

export default Services;