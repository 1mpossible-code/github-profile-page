import React from 'react';
import {GithubFilled, LinkedinFilled, TwitterCircleFilled} from '@ant-design/icons';
import classes from './SocialLinks.module.css';

const SocialLinks = () => {
    const handleGithubClick = () => {
        window.location.href = 'https://github.com/1mpossible-code/github-profile-page'
    };

    const handleTwitterClick = () => {
        window.location.href = 'https://twitter.com/1mpossiblemax'
    };

    const handleLinkedInClick = () => {
        window.location.href = 'https://www.linkedin.com/in/maksym-yemelianenko-622431183'
    };

    return (
        <div className={classes.nav}>
            <div className={classes.link} onClick={handleGithubClick}><GithubFilled/></div>
            <div className={classes.link} onClick={handleTwitterClick}><TwitterCircleFilled/></div>
            <div className={classes.link} onClick={handleLinkedInClick}><LinkedinFilled/></div>
        </div>
    );
};

export default SocialLinks;
