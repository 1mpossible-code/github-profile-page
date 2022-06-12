import React from 'react';
import Header from '../components/Header/Header';
import classes from './Main.module.css';

const Main = () => {
    return (
        <main className={classes.container}>
            <Header/>
        </main>
    )
}

export default Main;