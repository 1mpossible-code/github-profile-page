import React from 'react';
import classes from './Footer.module.css';
import SocialLinks from '../Header/SocialLinks/SocialLinks';
import classNames from 'classnames';
import NavigationLinks from '../Header/NavigationLinks/NavigationLinks';
import Links from './Links/Links';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <section className={classes.container}>
            <div className={classes.upper}>
                <div className={classes.logo}>
                    <Link to="/#top">1mpossible-code</Link>
                </div>
                <div className={classes.nav}>
                    <Links tel={`${process.env.REACT_APP_TEL}`} email={`${process.env.REACT_APP_EMAIL}`}></Links>
                    <div className={classNames(classes.link, classes.socialLinks)}>
                        <SocialLinks/>
                    </div>
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.navLinks}>
                    <NavigationLinks/>
                </div>
            </div>
        </section>
    );
};

export default Footer;
