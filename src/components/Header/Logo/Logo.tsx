import React from 'react';
import classes from './Logo.module.css';
import {Link} from 'react-router-dom';

const Logo = () => {
    return (
        <div className={classes.logo}>
            <Link className="link" to={'/'}>1mpossible-code</Link>
        </div>
    );
};

export default Logo;
