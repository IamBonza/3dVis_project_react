import React from 'react';
import {Link} from 'react-router-dom';
import classes from './ExampleCard.module.css'

const ExampleCard = ({dataBaseElem}) => {
    return (
        <Link to={`/examples/${dataBaseElem.id}`} className={classes.cardContainer}>
            <div key={dataBaseElem.id}>
                <img src={dataBaseElem.img} alt=""/>
                <h2>{dataBaseElem.title}</h2>
                <p>{dataBaseElem.description}</p>

            </div>
        </Link>
    );
};

export default ExampleCard;