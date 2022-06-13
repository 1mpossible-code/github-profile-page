import React from 'react';
import classes from './Heading.module.css';

type OwnProps = {
    title: string;
    description: string;
}

const Heading: React.FC<OwnProps> = (props) => {
    return (
        <div>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.description}>{props.description}</div>

        </div>
    );
};

export default Heading;
