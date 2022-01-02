import React from 'react';
import classes from './Main.module.css'
import InteriorStylesSlider from '../InteriorStylesSlider/InteriorStylesSlider';

const Main = () => {
    return (
        <div className={classes.mainContainer}>
            <h1>Главная страница о 3D-визуализации</h1>
            <InteriorStylesSlider/>
        </div>
    );
};

export default Main;