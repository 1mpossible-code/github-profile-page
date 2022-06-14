import React from 'react';
import classes from './Links.module.css';

type OwnProps = {
    tel: string;
    email: string;
}

const Links: React.FC<OwnProps> = (props) => {

    const handleTelClick = () => {
        window.location.href = `tel:${props.tel}`
    }

    const handleEmailClick = () => {
        window.location.href = `mailto:${props.email}`
    }

    return (
        <>
            <div className={classes.link} onClick={handleTelClick}>{props.tel}</div>
            <div className={classes.link} onClick={handleEmailClick}>{props.email}</div>
        </>
    );
};

export default Links;
