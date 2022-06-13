import React from 'react';
import Header from '../components/Header/Header';
import classes from './Main.module.css';
import Greeting from '../components/Greeting/Greeting';
import TechStack from '../components/TechStack/TechStack';

const Main = () => {
    return (
        <main className={classes.container}>
            <Header/>
            <Greeting/>
            <TechStack/>
        </main>
    )
}

export default Main;