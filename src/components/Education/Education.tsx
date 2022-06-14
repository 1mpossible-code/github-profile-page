import React from 'react';
import CategoryTitle from '../common/CategoryTitle/CategoryTitle';
import classes from './Education.module.css';
import PlaceCard from '../common/PlaceCard/PlaceCard';

const Education = () => {
    return (
        <section className={classes.container}>
            <CategoryTitle title={'Education'}/>
            <div className={classes.wrapper}>
                <PlaceCard title={'Bachelor in Computer Science'} type={'Full Time'} office={'New York University'}
                           geo={'New York'} period={'Sep 2022 - Jun 2026'}/>
            </div>
        </section>
    );
};

export default Education;
