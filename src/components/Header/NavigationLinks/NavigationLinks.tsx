import React from 'react';
import classes from './NavigationLinks.module.css'
import {Link} from 'react-scroll';

const NavigationLinks = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.link}><Link to="header" smooth={true}>Home</Link></div>
            <div className={classes.link}>About</div>
            <div className={classes.link}>Tech Stack</div>
            <div className={classes.link}>Projects</div>
            <div className={classes.link}>Contact</div>
        </nav>
    );
};

export default NavigationLinks;
