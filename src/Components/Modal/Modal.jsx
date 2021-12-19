import React, {useContext} from 'react';
import classes from './Modal.module.css'
import LoginForm from '../LoginForm/LoginForm';
import {AuthContext} from '../../context/context';

const Modal = () => {

    const {isVisible} = useContext(AuthContext)

    if (!isVisible) {
        return null
    }

    return (
        <div className={classes.modal}>
            <LoginForm/>
        </div>
    );
};

export default Modal;