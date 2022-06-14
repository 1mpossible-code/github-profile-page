import React from 'react';
import classes from './Header.module.css';
import SocialLinks from './SocialLinks/SocialLinks';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import Logo from './Logo/Logo';

const Header = () => {
    return (
        <header className={classes.header}>
            <Logo/>
            <div className={classes.nav}>
                <div className={classes.navLinks}>
                    <NavigationLinks/>
                </div>
                <div>
                    <SocialLinks/>
                </div>
            </div>
        </header>
    );
};

export default Header;
