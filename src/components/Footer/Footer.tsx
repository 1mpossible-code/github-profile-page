import React from 'react';
import classes from './Footer.module.css';
import SocialLinks from '../Header/SocialLinks/SocialLinks';
import classNames from 'classnames';
import NavigationLinks from '../Header/NavigationLinks/NavigationLinks';
import Links from './Links/Links';

const Footer = () => {
    return (
        <section className={classes.container}>
            <div className={classes.upper}>
                <div className={classes.logo}>1mpossible-code</div>
                <div className={classes.nav}>
                    <Links tel="+91 12345 09876" email="info@example.com"></Links>
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
