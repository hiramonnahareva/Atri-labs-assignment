import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
    const Blog_item = [
        {
            id: 1,
            headingText: 'Design tips for designers, that cover everything you need',
            date: 'April 16, 2021',
            time: '6 mins',
        },
        {
            id: 2,
            headingText: 'How to build rapport with your web design clients',
            date: 'April 16, 2021',
            time: '5 mins'
        },
        {
            id: 3,
            headingText: 'Top 6 free website mockup tools 2021',
            date: 'April 16, 2021',
            time: '5 mins'
        },
        {
            id: 4,
            headingText: 'Logo design trends to avoid in 2021',
            date: 'April 16, 2021',
            time: '7 mins'
        },
        {
            id: 5,
            headingText: '22 best UI design tools',
            date: 'April 16, 2021',
            time: '7 mins'
        },
    ]
    return (
        <section className='blog-section wf-section'>
            <div className="wrapper blog-homepage">
                <div className="blog-heading-and-subtext-wrapper"><div className="blog-subtext-wrapper">
                    <h6>Blogs</h6>
                    </div><div className="blog-heading-wrapper">
                        <h2 className="white blogs">Latest Blogs</h2>
                    </div>
                    <a href="/blog" className="blog-item-read-the-article-wrapper w-inline-block">
                        <div className="blog-item-read-the-article-text-wrapper">
                            <div className="text-block _18px white">View all</div>
                        </div>
                        <div className="blog-item-arrow-wrapper">
                            <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584aacad011eafeb61bc_Vector-2.svg" loading="lazy" alt="" />
                        </div>
                    </a>
                </div>
                {/*  */}
                <div className="blog-content-wrapper">
                    <div className="w-dyn-list">
                        <div className="w-dyn-items">
                            {
                                Blog_item.map(item =>
                                    <div key={item.id} className="w-dyn-item"><a href="/" className="blog-section-blog-item-wrapper w-inline-block">
                                        <div className="blog-item-date-and-time-wrapper">
                                            <div className="blog-item-date-wrapper">
                                                <div className="text-block _14px white">{item.date}</div>
                                            </div>
                                            <div className="blog-item-dot"></div>
                                            <div className="blog-item-time-wrapper">
                                                <div className="text-block _14px white">{item.time}</div>
                                            </div>
                                        </div>
                                        <div className="blog-item-heading-wrapper">
                                            <h4 className="white">{item.headingText}</h4></div><div className="blog-item-read-the-article-wrapper">
                                            <div className="blog-item-read-the-article-text-wrapper"><div className="text-block _18px white">Read the article</div></div><div className="blog-item-arrow-wrapper">
                                                <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584aacad011eafeb61bc_Vector-2.svg" loading="lazy" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;