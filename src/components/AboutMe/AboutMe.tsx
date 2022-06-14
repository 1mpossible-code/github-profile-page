import React from 'react';
import CategoryTitle from '../common/CategoryTitle/CategoryTitle';
import classes from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <section className={classes.container}>
            <CategoryTitle title={'About Me'}/>
            <div className={classes.description}>
                Self-motivated, diverse, and fast-learning full-stack developer with 3 years experience in programming.
                I have developed different projects on various levels starting with chatbots and parsers and ending with
                APIs and UIs for SPA. Have a great experience in team-working and team-building. Currently, I am a
                mentor for a group of people, whom I try to make programmers with a strong understanding of architecture
                principles and clean coding.
            </div>
        </section>
    );
};

export default AboutMe;
