import React from 'react';
import classes from './TechStack.module.css';
import Technologies from './Technologies/Technologies';

const TechStack = () => {
    return (
        <section className={classes.container}>
            <div className={classes.label}>My Tech Stack</div>
            <div className={classes.underLabel}>Technologies I’ve been working with recently</div>
            <Technologies/>
        </section>
    );
};

export default TechStack;
