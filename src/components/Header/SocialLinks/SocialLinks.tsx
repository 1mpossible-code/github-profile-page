import React from 'react';
import {GithubFilled, LinkedinFilled, TwitterCircleFilled} from '@ant-design/icons';
import classes from './SocialLinks.module.css';

const SocialLinks = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.link}><a href="https://github.com/1mpossible-code/"><GithubFilled/></a></div>
            <div className={classes.link}><a href="https://twitter.com/1mpossiblemax"><TwitterCircleFilled/></a></div>
            <div className={classes.link}><a
                href="https://www.linkedin.com/in/maksym-yemelianenko-622431183"><LinkedinFilled/></a></div>
        </div>
    );
};

export default SocialLinks;
