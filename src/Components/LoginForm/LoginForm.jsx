import React from "react";
import classes from "./LoginForm.module.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { usersList } from "../../databases/users";
import {AuthContext} from "../../context/context";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const {setIsAuth, setIsVisible} = useContext(AuthContext)
  const navigate = useNavigate();



  const submitFormHandler = (event) => {
    event.preventDefault();
    // Проверка введенных данных =>
    const nameCheck = usersList.find((item) => item.name === name);
    const passwordCheck = usersList.find((item) => item.password === password);
    if (nameCheck) {
      if (passwordCheck) {
        localStorage.setItem("isAuth", "true");
        setIsAuth(true)
        setIsVisible(false)
        // navigate("/");
      } else {
        alert("Пароль введен не верно");
      }
    } else {
      alert("Такого пользователя не существует");
    }
  };

  const closeHandler = () => {
    setIsVisible(false)
  }

  return (
    <div className={classes.formWrapper}>
      <form action="POST" className={classes.form} onSubmit={submitFormHandler}>
        <h1 className={classes.form__title}>Вход</h1>
        <div className={classes.inputBlock}>
          <label htmlFor="input-email" className={classes.inputBlock__title}>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="input-email"
            className={classes.inputBlock__input}
            placeholder="Введите логин"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={classes.inputBlock}>
          <label htmlFor="input-password" className={classes.inputBlock__title}>
            Пароль
          </label>
          <input
            type="password"
            name="password"
            id="input-password"
            className={classes.inputBlock__input}
            placeholder="Введите пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className={classes.checkboxBlock}>
          <input
            type="checkbox"
            name="checkbox"
            id="input-checkbox"
            className={classes.checkboxBlock__checkbox}
          />
          <div className={classes.checkboxBlock__checkboxCustom}></div>
          <label
            htmlFor="input-checkbox"
            className={classes.checkboxBlock__title}
          >
            Я согласен получать обновления на почту
          </label>
        </div>
        <button type="submit" className={classes.form__button}>
          Войти
        </button>
        <div className={classes.closeBtn} onClick={closeHandler}>X</div>
      </form>
    </div>
  );
};

export default LoginForm;
