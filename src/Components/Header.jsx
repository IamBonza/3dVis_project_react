import React from 'react';
import logo from '../assets/images/Web.png'
import {Link} from "react-router-dom";

const Header = () => {

    const headerStyle = {
        color: 'black',
        textDecoration: 'none'
    }
    return (
        <header className='header'>
            <img src={logo} alt=""/>
            <ul className='nav-links' >

                    <li><Link style={headerStyle} to='/'>Главная</Link></li>
                    <li><Link style={headerStyle} to='/examples'>Примеры работ</Link></li>
                    <li><Link style={headerStyle} to='/favorites'>Избранное</Link></li>
                    <li><Link style={headerStyle} to='/calc'>Рассчет стоимости</Link></li>
                    <li><Link style={headerStyle} to='/login'>Войти</Link></li>

            </ul>

        </header>
    );
};

export default Header;