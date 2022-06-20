import React from 'react';
import classes from './Links.module.css';

type OwnProps = {
    tel: string;
    email: string;
}

const Links: React.FC<OwnProps> = (props) => {
    return (
        <>
            <div className={classes.link}><a href={`tel:${props.tel}`}>{props.tel}</a></div>
            <div className={classes.link}><a href={`mailto:${props.email}`}>{props.email}</a>
            </div>
        </>
    );
};

export default Links;
