import React from 'react';
import classes from './NavigationLinks.module.css'
import {Link} from 'react-router-dom';

const NavigationLinks = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.link}><Link className="link" to="/">Home</Link></div>
            <div className={classes.link}><Link className="link" to="/about">About</Link></div>
            <div className={classes.link}><Link className="link" to="/stack">Tech Stack</Link></div>
            <div className={classes.link}><Link className="link" to="/projects">Projects</Link></div>
            <div className={classes.link}><Link className="link" to="/contact">Contact</Link></div>
        </nav>
    );
};

export default NavigationLinks;
