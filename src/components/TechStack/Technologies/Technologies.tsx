import React from 'react';
import classes from './Technologies.module.css';
import html from '../../../assets/logos/html.png'
import css from '../../../assets/logos/css.png'
import js from '../../../assets/logos/js.png'
import react from '../../../assets/logos/react.png'
import redux from '../../../assets/logos/redux.png'
import bootstrap from '../../../assets/logos/bootstrap.png'
import jest from '../../../assets/logos/jest.png'
import typescript from '../../../assets/logos/typescript.png'
import git from '../../../assets/logos/git.png'
import storybook from '../../../assets/logos/storybook.png'
import nextjs from '../../../assets/logos/nextjs.png'
import github from '../../../assets/logos/github.png'
import Technology from './Technology/Technology';

const technologies = [html, css, js, react, redux, bootstrap, jest, typescript, git, storybook, nextjs, github]

const Technologies = () => {
    return (
        <div className={classes.container}>
            {
                technologies.map(
                    (image, idx) => (
                        <div className={classes.technology}>
                            <Technology src={image} key={idx}/>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default Technologies;
