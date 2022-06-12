import React from 'react';
import classes from './Header.module.css';
import SocialLinks from './SocialLinks/SocialLinks';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import classNames from 'classnames';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classNames(classes.logo, classes.navLinks)}>Logo</div>
            <div className={classes.nav}>
                <div className={classes.navLinks}>
                    <NavigationLinks/>
                </div>
                <div className={classes.navLinks}>
                    <SocialLinks />
                </div>
            </div>
        </header>
    );
};

export default Header;
