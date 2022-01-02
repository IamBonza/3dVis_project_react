import React, {useState} from 'react';
import './InteriorStylesSlider.css'
import {interiorStyles} from './InteriorStyles'
import SliderBtn from './SliderBtn/SliderBtn';


const InteriorStylesSlider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        console.log('click')
        if (slideIndex !== interiorStyles.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === interiorStyles.length) {
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1) {
            setSlideIndex(interiorStyles.length)
        }
    }

    return (
        <div className={'slider-container'}>
            {interiorStyles.map((elem, index) => {
                return (
                    <div className={slideIndex === index + 1 ? 'slide active' : 'slide' }>
                        <p className={'slide-title'}>{elem.name}</p>
                        <img src={elem.img} key={elem.id} alt={elem.name} className={'slide-image'} />
                    </div>

                )
            })}
            <SliderBtn direction={'next'} moveSlide={nextSlide}/>
            <SliderBtn direction={'prev'} moveSlide={prevSlide}/>
        </div>
    );
};

export default InteriorStylesSlider;