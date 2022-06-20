import React from 'react';
import Header from '../components/Header/Header';
import classes from './Main.module.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Home/HomePage';
import AboutPage from './About/AboutPage';
import ProjectsPage from './Projects/ProjectsPage';
import TechStackPage from './TechStack/TechStackPage';
import ContactPage from './Contact/ContactPage';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <main className={classes.container}>
            <div className={classes.top} id="top"></div>
            <HashRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/stack" element={<TechStackPage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
                <Footer/>
            </HashRouter>
        </main>
    )
}

export default Main;