import React from 'react';
import classes from './Greeting.module.css'
import photo from '../../assets/avatar.jpg'

const Greeting = () => {
    return (
        <div className={classes.greeting}>
            <div className={classes.text}>
                <div>Hi 👋,</div>
                <div>My name is</div>
                <div className={classes.gradientText}>1mpossible-code</div>
                <div>And I am a web developer</div>
            </div>
            <div className={classes.imageWrapper}>
                <div className={classes.imageBorder}>
                    <img src={photo} alt="" className={classes.image}/>
                </div>
            </div>
        </div>
    );
};

export default Greeting;
