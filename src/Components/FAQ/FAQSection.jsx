import React, { useState } from 'react';
import './FAQSection.css'; 

const FAQSection = () => {
    const [selected, setselected] = useState(null);
    const toggle = (id) => {
        if(selected === id){
            return setselected(null)
        }

        return setselected(id)
    }

    const Left_FAQ = [
        {
            id: 1,
            FAQquestion: 'What type of projects do you take on?',
            FAQanswer: "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding.",
        },
        {
            id: 2,
            FAQquestion: 'What is your hourly rate?',
            FAQanswer: "I only charge hourly for my ongoing projects that need work on the regular. One-time projects are charged upfront to keep it transparent and clean! My hourly rate is $100.",
        },
        {
            id: 3,
            FAQquestion: 'What time-zone do you work in?',
            FAQanswer: "I work Pacific Standard Time, but I'm always ready to help out in emergencies, no matter the hour.",
            },
            {
                id: 4,
                FAQquestion: 'What is the typical timeline for a project?',
                FAQanswer: "Depends on the scope of the project, really. Some projects take less than a week. Some take months. The best way to find out is to get on a quick call with me, and discuss it. No strings attached!",
            }
    ]
    const Right_FAQ = [
        {
            id: 5,
            FAQquestion: 'How do you charge for projects ?',
            FAQanswer: "I quote a price upfront--so that you know exactly what you're paying and for what, and there are no surprises later. The exact cost of your project depends on the scope and requirements!",
        },
        {
            id: 6,
            FAQquestion: 'What does your design process look like?',
            FAQanswer: `I take a problem-forward approach. Whether we're iterating on an existing product or building a new one from scratch, how to solve the user's problem in the simplest way possible is my first concern. Send me an email to understand my process in depth!`,
        },
        {
            id: 7,
            FAQquestion: 'What metrics do you use to measure success?',
            FAQanswer: "The best metrics are customer adoption, happiness, task success, and engagement. There are a number of frameworks such as the System Usability Scale that help us understand product performance and I'm happy to help with that.",
            },
            {
                id: 8,
                FAQquestion: 'What if I need help after the project is complete?',
                FAQanswer: "I always make sure to help out my clients one month after the project ends, for free. For any help post that, we can work out an ongoing arrangement!",
            }
    ]
    return (
        <section>
            <div className="faq-section wf-section">
                <div className="wrapper faq-heading">
                    <div className="faq-subtext-wrapper">
                        <h6>FAQ</h6></div><div className="faq-heading-wrapper">
                        <h2 className="white">Frequently asked questions</h2>
                    </div>
                </div>
                <div className="wrapper faq-down">
                    <div className="faq-container">
                        <div className="faq-left">
                            {
                                Left_FAQ.map(item => 
                                    <div key={item.id} className="faq-item">
                                <div className="faq-question-and-arrow-wrapper" onClick={() => toggle(item.id)}>
                                    <div className="faq-question-wrapper">
                                        <div className="faq-question">{item.FAQquestion}</div>
                                    </div>
                                    <div className={`faq-icon-wrapper ${selected === item.id ? 'faq-icon-active' : ''}`}>
                                        <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.svg" loading="lazy" alt="" className="image contain" />
                                    </div>
                                </div>
                                <div className="faq-answer">
                                    <p className={`paragraph _18-px ${selected === item.id ? 'active' : 'd_hidden'}`}>{item.FAQanswer}</p>
                                </div>
                            </div>
                                    )
                            }
                        </div>
                        <div className="faq-right">
                        {
                            Right_FAQ.map(item => 
                                <div key={item.id} className="faq-item">
                            <div className="faq-question-and-arrow-wrapper" onClick={() => toggle(item.id)}>
                                <div className="faq-question-wrapper">
                                    <div className="faq-question">{item.FAQquestion}</div>
                                    </div><div className={`faq-icon-wrapper ${selected === item.id ? 'faq-icon-active' : ''}`}>
                                        <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.svg" loading="lazy" alt="" className="image contain"/></div></div><div className="faq-answer">
                            <p className={`paragraph _18-px ${selected === item.id ? 'active' : 'd_hidden'} `}>{item.FAQanswer}</p>
                            </div></div>
                                )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;