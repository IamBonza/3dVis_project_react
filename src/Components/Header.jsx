import React, { useEffect } from "react";
import logo from "../assets/images/Web.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate;
  function LoginLogout() {
    if (localStorage.getItem("isAuth")) {
      localStorage.removeItem("isAuth");
    } else {
      navigate("/login");
    }
  }
  const headerStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <ul className="nav-links">
        <li>
          <Link style={headerStyle} to="/">
            Главная
          </Link>
        </li>
        <li>
          <Link style={headerStyle} to="/examples">
            Примеры работ
          </Link>
        </li>
        <li>
          <Link style={headerStyle} to="/favorites">
            Избранное
          </Link>
        </li>
        <li>
          <Link style={headerStyle} to="/calc">
            Рассчет стоимости
          </Link>
        </li>
        <li>
          <Link style={headerStyle} to="/login" onClick={LoginLogout}>
            {localStorage.getItem("isAuth") ? "Выйти" : "Войти"}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
