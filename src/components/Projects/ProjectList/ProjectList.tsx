import React from 'react';
import classes from './ProjectList.module.css';
import Card from './Card/Card';
import githubProfilePageImage from '../../../assets/projects/github-profile-page.png'
import avariceImage from '../../../assets/projects/bg1.jpeg'
import frameworkImage from '../../../assets/projects/bg2.jpeg'
import todoImage from '../../../assets/projects/bg3.jpeg'

const projects = [
    {
        image: githubProfilePageImage,
        title: 'Profile Page',
        description: 'This project was written in React with TypeScript. The main purpose of website is representing me, my skills, projects, and contact information.',
        stack: ['React', 'TypeScript', 'AntDesign'],
        preview: '',
        code: 'https://github.com/1mpossible-code/github-profile-page',
    },
    {
        image: 'https://raw.githubusercontent.com/1mpossible-code/jwt-authorization/master/assets/example.gif',
        title: 'JWT Authorization',
        description: 'This project I wrote to learn deeply how JWT authorization works. I use this project every time, when I need to implement user authorization through API.',
        stack: ['Express.js', 'JavaScript', 'JWT'],
        preview: '',
        code: 'https://github.com/1mpossible-code/jwt-authorization',
    },
    {
        image: avariceImage,
        title: 'Avarice',
        description: 'This was my first big programming project, which implements telegram shop with simple logic. It works on mix of procedure and functional programming.',
        stack: ['Python', 'SQLite', 'Telegram'],
        preview: '',
        code: 'https://github.com/1mpossible-code/avarice',
    },
    {
        image: 'https://raw.githubusercontent.com/1mpossible-code/tweety/master/storage/tweety.gif',
        title: 'Tweety',
        description: 'Twitter Clone written on PHP using Laravel as a full-stack framework (Backend and UI). The project was created as for educational purposes in studying Laravel.',
        stack: ['Laravel', 'PHP', 'Tailwind', 'Docker'],
        preview: '',
        code: 'https://github.com/1mpossible-code/tweety',
    },
    {
        image: frameworkImage,
        title: 'PHP MVC Framework',
        description: 'This is working framework for PHP, which was created for me to better understand the concepts and mechanisms of real backend frameworks.',
        stack: ['PHP', 'MariaDB', 'Docker'],
        preview: '',
        code: 'https://github.com/1mpossible-code/php-mvc-framework',
    },
    {
        image: todoImage,
        title: 'Simple TODO App',
        description: 'This is a very simple TODO App, which was created in order to learn VueJS and its state management system Vuex. It has its own API written with Express.js.',
        stack: ['VueJS', 'JavaScript', 'Vuex', 'Docker'],
        preview: '',
        code: 'https://github.com/1mpossible-code/simple-todo-front',
    },
]

const ProjectList = () => {
    return (
        <div className={classes.container}>
            {projects.map(
                (project, idx) => (
                    <div className={classes.wrapper} key={idx}>
                        <Card {...project} />
                    </div>
                )
            )}
        </div>
    );
};

export default ProjectList;
