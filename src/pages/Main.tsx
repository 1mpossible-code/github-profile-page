import React from 'react';
import Header from '../components/Header/Header';
import classes from './Main.module.css';
import Greeting from '../components/Greeting/Greeting';
import TechStack from '../components/TechStack/TechStack';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <main className={classes.container}>
            <Header/>
            <Greeting/>
            <TechStack/>
            <Projects/>
            <Footer/>
        </main>
    )
}

export default Main;