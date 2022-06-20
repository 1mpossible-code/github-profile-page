import React, {useState} from 'react';
import classes from './Header.module.css';
import SocialLinks from './SocialLinks/SocialLinks';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import Logo from './Logo/Logo';
import {CloseOutlined, MenuOutlined} from '@ant-design/icons';
import classNames from 'classnames';

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu((prevState) => !prevState)
    }

    return (
        <header className={classes.header} id="header">
            <Logo/>
            <div onClick={toggleMobileMenu} className={classes.menu}>
                {
                    mobileMenu ? <CloseOutlined/> : <MenuOutlined/>
                }
            </div>
            <div className={classNames(mobileMenu && classes.active, classes.nav)} onClick={toggleMobileMenu}>
                <div className={classes.navLinks}>
                    <NavigationLinks/>
                </div>
                <div>
                    <SocialLinks/>
                </div>
            </div>
        </header>
    );
};

export default Header;
