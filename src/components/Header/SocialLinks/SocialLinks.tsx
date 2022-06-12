import React from 'react';
import {GithubFilled, LinkedinFilled, TwitterCircleFilled} from "@ant-design/icons";
import classes from './SocialLinks.module.css';

const SocialLinks = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.link}><GithubFilled/></div>
            <div className={classes.link}><TwitterCircleFilled/></div>
            <div className={classes.link}><LinkedinFilled style={{fontSize: '30px'}}/></div>
        </div>
    );
};

export default SocialLinks;
