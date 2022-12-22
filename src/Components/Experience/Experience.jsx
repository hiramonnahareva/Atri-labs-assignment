import React from 'react';
import './Experience.css';

const Experience = () => {
    const left_Experience = [
        {
            id: 1,
            headingText: 'Stanford University',
            timePeriod: '2013-2015',
            textBlock: 'MSc (Human Computer Interaction)'
        },
        {
            id: 2,
            headingText: 'MIT Summer School',
            timePeriod: '2013-2014',
            textBlock: 'UX Training Bootcamp'
        },
        {
            id: 3,
            headingText: 'California State University',
            timePeriod: '2009-2012',
            textBlock: 'BSc in Software Engineering'
        },
    ]
    const Right_Experience = [
        {
            id: 1,
            img: 'https://assets.website-files.com/5fef5619b640934b33c2385e/6087cab3a74dfa369ea2e92a_Group%2084.svg',
            headingText: 'SpaceFleet',
            timePeriod: 'April 2019 - Current',
            textBlock: 'Senior Product Designer'
        },
        {
            id: 2,
            img: 'https://assets.website-files.com/5fef5619b640934b33c2385e/6087cab3f70370b7efe8c560_Group%2085.svg',
            headingText: 'MusicMash',
            timePeriod: 'April 2016 - May 2017',
            textBlock: 'Information Architect'
        },
        {
            id: 3,
            headingText: 'Kingdom',
            img: 'https://assets.website-files.com/5fef5619b640934b33c2385e/6087cab33450e64d2fa55138_Group%2086.svg',
            timePeriod: 'April 2016 - May 2017',
            textBlock: 'UI Designer'
        },
    ]
    return (
        <section>
            <div className="wrapper experience">
                <div className="experience-left-wrapper">
                    <div className="experience-heading-wrapper">
                    <h3>📚 &nbsp;Education</h3>
                    </div>
                    <div className="experience-items-container">

                        {
                            left_Experience.map(item => 
                                <a href="/" className="experience-item-wrapper w-inline-block">
                        <div class="experience-item-heading-and-subheading-wrapper">
                            <div class="experience-item-heading-wrapper">
                            <h5 class="experience-item-heading-text">{item.headingText}</h5>
                            </div><div class="experience-item-subheading-wrapper">
                                <div class="text-block _16px">{item.textBlock}</div></div></div>
                        <div class="experience-arrow-and-time-period-wrapper"><div class="experience-time-period-wrapper"><div class="text-block _16px">• {item. timePeriod}</div></div><div class="experience-arrow-wrapper">
                            <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef5843523345463e5a1851_arrow-right-up-line%206.svg" loading="lazy" alt="" class="image contain"/>
                            </div></div>
                        <div class="experience-grey-bottom-border"><div class="experience-black-bottom-border"></div></div>
                        </a>
                                )
                        }
                        
                    </div>
                </div>
                <div className="experience-right-wrapper">
                <div className="experience-heading-wrapper">
                    <h3>💼 &nbsp; Work Experience</h3>
                    </div>
                    <div className="experience-items-container">

{
    Right_Experience.map(item => 
        <a href="/" className="experience-item-wrapper w-inline-block">
            <div class="experience-icon-and-details-wrapper">
                <div class="experience-icon-wrapper">
                    <img src={item.img} loading="lazy" alt="" class="image contain"/></div><div class="experience-details-container"><div class="experience-item-heading-and-fulltime-wrapper"><div class="experience-item-heading-wrapper work-experience"><h5 class="experience-item-heading-text">{item.headingText}</h5></div><div class="experience-item-fulltime-wrapper"></div></div>
                    <div class="experience-item-subheading-wrapper"><div class="text-block _16px">{item.textBlock}</div></div></div></div>
            <div class="experience-arrow-and-time-period-wrapper"><div class="experience-time-period-wrapper work-experience"><div class="text-block _16px">• {item.timePeriod}</div></div><div class="experience-arrow-wrapper"><img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef5843523345463e5a1851_arrow-right-up-line%206.svg" loading="lazy" alt="" class="image contain"/></div></div>
            <div class="experience-grey-bottom-border"><div class="experience-black-bottom-border"></div></div>
</a>
        )
}

</div>
                </div>
            </div>
        </section>
    );
};

export default Experience;