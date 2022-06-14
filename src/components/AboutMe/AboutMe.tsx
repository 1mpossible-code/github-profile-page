import React from 'react';
import CategoryTitle from '../common/CategoryTitle/CategoryTitle';
import classes from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <section className={classes.container}>
            <CategoryTitle title={'About Me'}
                           description={'The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.'}/>
        </section>
    );
};

export default AboutMe;
