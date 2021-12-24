import React, {useContext} from 'react';
import logo from '../../assets/images/Web.png';
import {Link} from 'react-router-dom';
import classes from './Header.module.css'
import {AuthContext} from '../../context/context';
import Button from '../Buttton/Button.jsx';
import {AppContext} from '../../context/appContext';

const Header = () => {
    const {isAuth, setIsAuth, setIsVisible} = useContext(AuthContext);

    function Login() {
        setIsVisible(true)
    }

    function Logout() {
        localStorage.removeItem('isAuth');
        setIsAuth(false)
    }

    const {links} = useContext(AppContext)


    return (
        <header className={classes.header}>
            <Link to={'/'} className={classes.headerLogo}>
                <img src={logo} alt="logo"/>
            </Link>

            <ul className={classes.navLinks}>
                {links.map((link) => {
                    return (
                        <li key={link.to}>
                            <Link className={classes.navLinks__link} to={link.to}>
                                {link.linkText}
                            </Link>
                        </li>
                    )
                })}
                <li>
                    {isAuth && <Button onClick={Logout}>Выйти</Button>}
                    {!isAuth && <Button onClick={Login}>Войти</Button>}
                </li>
            </ul>

        </header>
    );
};

export default Header;
