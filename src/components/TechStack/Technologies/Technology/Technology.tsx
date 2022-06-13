import React from 'react';
import classes from './Technology.module.css';

type OwnProps = {
    src: string
}

const Technology: React.FC<OwnProps> = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.imageWrapper}>
                <img className={classes.image}
                     src={props.src}
                     alt=""/>
            </div>
        </div>
    );
};

export default Technology;
