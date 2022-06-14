import React from 'react';
import classes from './ProjectList.module.css';
import Card from './Card/Card';

const projects = [
    {
        image: 'https://via.placeholder.com/400/',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        preview: '',
        code: '',
    },
    {
        image: 'https://via.placeholder.com/400/',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        preview: '',
        code: '',
    },
    {
        image: 'https://via.placeholder.com/400/',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        preview: '',
        code: '',
    },
    {
        image: 'https://via.placeholder.com/400/',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        preview: '',
        code: '',
    },
    {
        image: 'https://via.placeholder.com/400/',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        preview: '',
        code: '',
    },
    {
        image: 'https://via.placeholder.com/400/',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        preview: '',
        code: '',
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
