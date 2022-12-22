import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import Trusted from '../../Components/Trusted/Trusted';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Trusted/>
            <Services/>
        </div>
    );
};

export default Home;