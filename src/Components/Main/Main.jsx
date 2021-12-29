import React from 'react';
import classes from './Main.module.css'
import InteriorStyles from '../InteriorStyles/InteriorStyles';

const Main = () => {
    return (
        <div className={classes.mainContainer}>
            <h1>Главная страница о 3D-визуализации</h1>
            {/*<InteriorStyles/>*/}
        </div>
    );
};

export default Main;