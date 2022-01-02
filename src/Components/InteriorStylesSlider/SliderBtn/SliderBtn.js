import React from 'react';
import './SliderBtn.css'
import leftArrow from '../svg/left-arrow.svg'
import rightArrow from '../svg/right-arrow.svg'

const SliderBtn = ({direction, moveSlide}) => {
    return (
        <button className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'} onClick={moveSlide}>
            <img src={direction === 'next' ? rightArrow : leftArrow} alt={''} className={'btn-image'}/>
        </button>

    );
};

export default SliderBtn;