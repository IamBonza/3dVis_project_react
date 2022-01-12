import React, {useContext, useRef} from 'react';
import classes from './Modal.module.css'
import LoginForm from '../LoginForm/LoginForm';
import {AuthContext} from '../../context/context';

const Modal = () => {

    const {isVisible, setIsVisible} = useContext(AuthContext)

    const handleClick = (e) => {
        if (!e.nativeEvent.path.includes(loginFromRef.current)) {
            setIsVisible(false)
        }
    }

    const loginFromRef = useRef();

    if (!isVisible) {
        return null
    }

    return (
        <div className={classes.modal} onClick={handleClick}>
            <LoginForm loginFromRef={loginFromRef}/>
        </div>
    );
};

export default Modal;