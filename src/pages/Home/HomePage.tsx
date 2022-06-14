import React from 'react';
import Greeting from '../../components/Greeting/Greeting';
import TechStack from '../../components/TechStack/TechStack';
import Projects from '../../components/Projects/Projects';

const HomePage = () => {
    return (
        <>
            <Greeting/>
            <TechStack/>
            <Projects/>
        </>
    );
};

export default HomePage;
