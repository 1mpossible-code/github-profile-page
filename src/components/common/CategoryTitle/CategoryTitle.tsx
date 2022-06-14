import React from 'react';
import classes from './CategoryTitle.module.css';

type OwnProps = {
    title: string;
    description: string;
    centered?: boolean;
}

const CategoryTitle: React.FC<OwnProps> = (props) => {
    return (
        <div style={{textAlign: props.centered ? 'center' : 'inherit'}}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.description}>{props.description}</div>
        </div>
    );
};

export default CategoryTitle;
