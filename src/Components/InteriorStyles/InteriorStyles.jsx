import React, {useContext} from 'react';
import classes from './InteriorStyles.module.css';
import classNames from 'classnames';
import {AppContext} from '../../context/appContext';



const InteriorStyles = () => {

    const {styles} = useContext(AppContext)

    return (
        <div className={classes.sliderContainer}>

            {styles.map((style)=> {
                return (
                    <div className={classes.slide} style={{backgroundImage: style.img}}>
                        <h3>{style.name}</h3>
                    </div>
                )
            })}


        </div>
    );
};

export default InteriorStyles;