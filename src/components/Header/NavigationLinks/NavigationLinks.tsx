import React, {useEffect, useState} from 'react';
import classes from './NavigationLinks.module.css'
import {Link, useLocation} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll'

const NavigationLinks = () => {

    const location = useLocation()
    const [isScrolling, setIsScrolling] = useState(location.pathname == '/');

    useEffect(() => {
        if (location.pathname == '/') {
            setIsScrolling(true)
        } else {
            setIsScrolling(false)
        }
    }, [location]);

    return (
        <nav className={classes.nav}>
            <div className={classes.link}>
                {isScrolling ?
                    <Scroll to={'header'} smooth={true}>Home</Scroll>
                    :
                    <Link className="link" to="/">Home</Link>
                }

            </div>
            <div className={classes.link}><Link className="link" to="/about">About</Link></div>
            <div className={classes.link}><Scroll to={'stack'} smooth={true}>Tech Stack</Scroll></div>
            <div className={classes.link}><Scroll to={'projects'} smooth={true}>Projects</Scroll></div>
            <div className={classes.link}><Link className="link" to="/contact">Contact</Link></div>
        </nav>
    );
};

export default NavigationLinks;
