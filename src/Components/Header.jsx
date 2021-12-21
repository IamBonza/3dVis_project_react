import React, { useContext } from 'react';
import logo from '../assets/images/Web.png';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from "../context/context";
import Button from './Buttton/Button';

const Header = () => {
  const navigate = useNavigate;
  const {isAuth, setIsAuth, isVisible, setIsVisible} = useContext(AuthContext);
  function LoginLogout() {
    if (isAuth) {
      localStorage.removeItem('isAuth');
      setIsAuth(false)
    } else {
      setIsVisible(true)
    }
  }
  const headerStyle = {
    color: 'black',
    textDecoration: 'none',
  };

  return (
    <header className='header'>
      <Link to={'/'} className={'headerLogo'}><img src={logo} alt='logo' /></Link>
      <ul className='nav-links'>
        <li>
          <Link style={headerStyle} to='/'>
            Главная
          </Link>
        </li>
        <li>
          <Link style={headerStyle} to='/examples'>
            Примеры работ
          </Link>
        </li>
        <li>
          <Link style={headerStyle} to='/favorites'>
            Избранное
          </Link>
        </li>
        <li>
          <Link style={headerStyle} to='/calc'>
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
