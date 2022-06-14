import React from 'react';
import classes from './Footer.module.css';
import SocialLinks from '../Header/SocialLinks/SocialLinks';
import classNames from 'classnames';
import NavigationLinks from '../Header/NavigationLinks/NavigationLinks';
import Links from './Links/Links';
import {Link} from 'react-scroll'

const Footer = () => {
    return (
        <section className={classes.container}>
            <div className={classes.upper}>
                <div className={classes.logo}>
                    <Link to="header" smooth={true}>1mpossible-code</Link>
                </div>
                <div className={classes.nav}>
                    <Links tel="+48 516 495950" email="max.yemelianenko@gmail.com"></Links>
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
