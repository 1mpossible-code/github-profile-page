import React from 'react';
import Header from '../components/Header/Header';
import classes from './Main.module.css';
import Greeting from '../components/Greeting/Greeting';

const Main = () => {
    return (
        <main className={classes.container}>
            <Header/>
            <Greeting/>
        </main>
    )
}

export default Main;