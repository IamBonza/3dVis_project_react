import React, {useContext, useState} from 'react';
import './InteriorStyles.css'
import {AppContext} from '../../context/appContext';


const InteriorStyles = () => {

    const [activeId, setActiveId] = useState(3);


    function addActiveClass(id) {
        if (id === activeId) {
            return 'slide active'
        } else {
            return 'slide'
        }
    }

    const {InteriorStyles} = useContext(AppContext)

    return (
        <>
            <h2>Виды дизайна интерьеров</h2>
            <div className={'sliderContainer'}>

                {InteriorStyles.map((style) => {
                    return (
                        <div className={addActiveClass(style.id)}
                             style={{backgroundImage: style.img}}
                             onClick={(e) => setActiveId(style.id)}
                             key={style.id}
                        >
                            <h3>{style.name}</h3>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default InteriorStyles;