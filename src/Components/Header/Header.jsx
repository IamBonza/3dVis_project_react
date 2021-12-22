import React, { useContext } from 'react';
import logo from '../../assets/images/Web.png';
import { Link } from 'react-router-dom';
import classes from './Header.module.css'
import {AuthContext} from "../../context/context";
import Button from '../Buttton/Button.jsx';

const Header = () => {
    const {isAuth, setIsAuth, setIsVisible} = useContext(AuthContext);
    function LoginLogout() {
        if (isAuth) {
            localStorage.removeItem('isAuth');
            setIsAuth(false)
        } else {
            setIsVisible(true)
        }
    }


    return (
        <header className={classes.header}>
            <Link to={'/'} className={classes.headerLogo}><img src={logo} alt='logo' /></Link>
            <ul className={classes.navLinks}>
                <li>
                    <Link className={classes.navLinks__link} to='/'>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link className={classes.navLinks__link} to='/examples'>
                        Примеры работ
                    </Link>
                </li>
                <li>
                    <Link className={classes.navLinks__link} to='/favorites'>
                        Избранное
                    </Link>
                </li>
                <li>
                    <Link className={classes.navLinks__link} to='/calc'>
                        Рассчет стоимости
                    </Link>
                </li>
                <li>
                    <Button onClick={LoginLogout}>{isAuth ? 'Выйти' : 'Войти'}</Button>
                </li>
            </ul>
        </header>
    );
};

export default Header;
