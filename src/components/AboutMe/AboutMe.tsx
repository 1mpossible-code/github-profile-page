import React from 'react';
import CategoryTitle from '../common/CategoryTitle/CategoryTitle';
import classes from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <section className={classes.container}>
            <CategoryTitle title={'About Me'}/>
            <div className={classes.description}>{process.env.REACT_APP_ABOUT_ME}</div>
        </section>
    );
};

export default AboutMe;
