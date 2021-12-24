import React from 'react';
import {Link} from 'react-router-dom';
import classes from './ExampleCard.module.css'

const ExampleCard = ({dataBaseElem}) => {

    const {id, img, title, description} = dataBaseElem

    return (
        <Link to={`/examples/${id}`} className={classes.cardContainer}>
            <div key={id}>
                <img src={img} alt=""/>
                <h2>{title}</h2>
                <p>{description}</p>

            </div>
        </Link>
    );
};

export default ExampleCard;