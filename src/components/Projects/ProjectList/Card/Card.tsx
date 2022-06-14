import React from 'react';
import classes from './Card.module.css';
import {GithubOutlined, LinkOutlined} from '@ant-design/icons';

type OwnProps = {
    image: string;
    title: string;
    description: string;
    stack: string[];
    preview: string | null;
    code: string;
}

const Card: React.FC<OwnProps> = (props) => {

    const handlePreviewClick = () => {
        if (props.preview) {
            window.location.href = props.preview
        }
    }

    const handleCodeClick = () => {
        if (props.code) {
            window.location.href = props.code
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={props.image} alt=""/>
            </div>
            <div className={classes.content}>
                <h3 className={classes.title}>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.stack}>Tech stack: {props.stack.map(
                    (technology, idx) => <span className={classes.technology} key={idx}>
                        {technology}
                        {props.stack.length != idx + 1 && ', '}
                    </span>
                )}</div>
                <div className={classes.links}>
                    <div className={classes.link} onClick={handlePreviewClick}>
                        <span className={classes.icon}><LinkOutlined/></span>
                        <span className={classes.text}>Live Preview</span>
                    </div>
                    <div className={classes.link} onClick={handleCodeClick}>
                        <span className={classes.icon}><GithubOutlined/></span>
                        <span className={classes.text}>View Code</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
