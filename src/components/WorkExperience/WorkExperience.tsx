import React from 'react';
import CategoryTitle from '../common/CategoryTitle/CategoryTitle';
import classes from './WorkExperience.module.css';
import PlaceCard from '../common/PlaceCard/PlaceCard';

const WorkExperience = () => {
    return (
        <section className={classes.container}>
            <CategoryTitle title={'Work Experience'}/>
            <div className={classes.wrapper}>
                <PlaceCard title={'Web Developer'} type={'Part Time'} office={'International Freelance Group'}
                           geo={'Ukraine'} period={'Jul 2020 - Nov 2021'}/>
            </div>
        </section>
    );
};

export default WorkExperience;
