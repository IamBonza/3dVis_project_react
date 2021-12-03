import React from 'react';
import classes from './LoginForm.module.css';


const LoginForm = () => {
    return (
        <div className={classes.formWrapper}>
            <form action="POST" className={classes.form}>
                <h1 className={classes.form__title}>Вход</h1>
                <div className={classes.inputBlock}>
                    <label htmlFor="input-email" className={classes.inputBlock__title}>Email</label>
                    <input type="email" name="email" id="input-email" className={classes.inputBlock__input}
                           placeholder="Введите email" />
                </div>
                <div className={classes.inputBlock}>
                    <label htmlFor="input-password" className={classes.inputBlock__title}>Пароль</label>
                    <input type="password" name="password" id="input-password" className={classes.inputBlock__input}
                           placeholder="Введите пароль" />
                </div>
                <div className={classes.checkboxBlock}>
                    <input type="checkbox" name="checkbox" id="input-checkbox" className={classes.checkboxBlock__checkbox} />
                        <div className={classes.checkboxBlock__checkboxCustom}></div>
                        <label htmlFor="input-checkbox" className={classes.checkboxBlock__title}>Я согласен получать обновления
                            на почту</label>
                </div>
                <button type="submit" className={classes.form__button}>Войти</button>
            </form>
        </div>
    )
};

export default LoginForm;