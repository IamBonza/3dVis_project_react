import React from 'react';
// import classes from './Button.css'
import classNames from 'classnames';
import './Button.css'

const Button = ({children, onClick, className, ...attrs}) => {


    const btnClasses = classNames('button', className)

    return (
        <button className={btnClasses} onClick={onClick} {...attrs}>
            {children}
        </button>
    );
};

export default Button;