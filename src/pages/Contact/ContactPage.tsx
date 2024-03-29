import React from 'react';
import classes from './ContactPage.module.css';

const ContactPage = () => {

    const email = process.env.REACT_APP_EMAIL;

    return (
        <section className={classes.container}>
            <div className={classes.text}>
                For any questions please mail me:
            </div>
            <div className={classes.email}><a className="link" href={`mailto:${email}`}>{email}</a></div>
        </section>
    );
};

export default ContactPage;
