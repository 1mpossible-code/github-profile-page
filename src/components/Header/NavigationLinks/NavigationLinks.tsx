import React, {useEffect} from 'react';
import classes from './NavigationLinks.module.css'
import {Link, useLocation, useNavigate} from 'react-router-dom';

const NavigationLinks = () => {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        scroll()
    }, [location.hash]);

    const scroll = () => {
        switch (location.hash) {
            case '#top':
                document.getElementById('top')?.scrollIntoView({behavior: 'smooth'})
                navigate(location.pathname)
                break;
            case '#stack':
                document.getElementById('stack')?.scrollIntoView({behavior: 'smooth'})
                break;
            case '#projects':
                document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})
                break;
            default:
                navigate(location.pathname)
        }
    }

    return (
        <nav className={classes.nav}>
            <div className={classes.link}><Link onClick={scroll} to="/#top">Home</Link></div>
            <div className={classes.link}><Link onClick={scroll} to="/about#top">About</Link></div>
            <div className={classes.link}><Link onClick={scroll} to="/#stack">Tech Stack</Link></div>
            <div className={classes.link}><Link onClick={scroll} to="/#projects">Projects</Link></div>
            <div className={classes.link}><Link onClick={scroll} to="/contact#top">Contact</Link></div>
        </nav>
    );
};

export default NavigationLinks;
