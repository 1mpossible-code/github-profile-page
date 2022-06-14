import React from 'react';
import CategoryTitle from '../../components/common/CategoryTitle/CategoryTitle';
import classes from './ProjectsPage.module.css';
import Projects from '../../components/Projects/Projects';
import ProjectList from '../../components/Projects/ProjectList/ProjectList';

const ProjectsPage = () => {
    return (
        <section className={classes.container}>
            <CategoryTitle title={'Projects'}/>
            <div className={classes.description}>
                Things I’ve built so far
            </div>
            <ProjectList/>
        </section>
    );
};

export default ProjectsPage;
