import React from 'react';
import classes from './Projects.module.css';
import Heading from '../common/Heading/Heading';
import ProjectList from './ProjectList/ProjectList';

const Projects = () => {
    return (
        <section className={classes.container} id="projects">
            <Heading title={'Projects'} description={'Things I’ve built so far'} centered={true}/>
            <ProjectList/>
        </section>
    );
};

export default Projects;
