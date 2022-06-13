import React from 'react';
import classes from './TechStack.module.css';
import Technologies from './Technologies/Technologies';
import Heading from '../common/Heading/Heading';

const TechStack = () => {
    return (
        <section className={classes.container}>
            <Heading title={'My Tech Stack'} description={'Technologies I’ve been working with recently'}/>
            <Technologies/>
        </section>
    );
};

export default TechStack;
