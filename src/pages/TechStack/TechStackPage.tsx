import React from 'react';
import CategoryTitle from '../../components/common/CategoryTitle/CategoryTitle';
import classes from './TechStackPage.module.css';
import Technologies from '../../components/TechStack/Technologies/Technologies';

const TechStackPage = () => {
    return (
        <section className={classes.container}>
            <CategoryTitle title={'My Tech Stack'}/>
            <div className={classes.description}>
                Technologies I’ve been working with recently
            </div>
            <Technologies/>
        </section>
    );
};

export default TechStackPage;
