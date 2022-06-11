import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <div>Custom logo</div>
            </div>
            <div className={classes.nav}>
                <div className={classes.navItem}>
                    <span>About</span>
                </div>
                <div className={classes.navItem}>
                    <span>Projects</span>
                </div>
                <div className={classes.navItem}>
                    <span>Links</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
