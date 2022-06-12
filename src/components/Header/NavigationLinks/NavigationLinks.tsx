import React from 'react';
import classes from './NavigationLinks.module.css'

const NavigationLinks = () => {
    return (
            <nav className={classes.nav}>
                <div className={classes.link}>Home</div>
                <div className={classes.link}>About</div>
                <div className={classes.link}>Tech Stack</div>
                <div className={classes.link}>Projects</div>
                <div className={classes.link}>Contact</div>
            </nav>
    );
};

export default NavigationLinks;
