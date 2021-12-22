import React, {useContext} from 'react';
import classes from './InteriorStyles.module.css';
import classNames from 'classnames';
import {AppContext} from '../../context/appContext';



const InteriorStyles = () => {

    function addClass(e) {
        console.log(e.target)

    }

    const {styles} = useContext(AppContext)

    return (
        <div className={classes.sliderContainer}>

            {styles.map((style, index)=> {

                if (index === 3) {
                    return (
                        <div className = {classNames(classes.slide, classes.active)} style={{backgroundImage: style.img}} onClick={addClass} key={index}>
                            <h3>{style.name}</h3>
                        </div>
                    )
                }

                return (
                    <div className={classes.slide} style={{backgroundImage: style.img}} onClick={addClass} key={index}>
                        <h3>{style.name}</h3>
                    </div>
                )
            })}


        </div>
    );
};

export default InteriorStyles;