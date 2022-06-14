import React from 'react';
import classes from './ContactPage.module.css';

const ContactPage = () => {

    const handleEmailClick = () => {
        window.location.href = `mailto:max.yemelianenko@gmail.com`
    }

    return (
        <section className={classes.container}>
            <div className={classes.text}>
                For any questions please mail me:
            </div>
            <div className={classes.email} onClick={handleEmailClick}>max.yemelianenko@gmail.com</div>
        </section>
    );
};

export default ContactPage;
