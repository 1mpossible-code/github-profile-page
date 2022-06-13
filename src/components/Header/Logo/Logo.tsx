import React from 'react';
import classNames from 'classnames';
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classNames(classes.logo, classes.navLinks)}>1mpossible-code</div>
    );
};

export default Logo;
