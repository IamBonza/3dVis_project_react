import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({dataBaseElem}) => {
    return (
        <Link to={`/examples/${dataBaseElem.id}`} className="card-container">
            <div key={dataBaseElem.id}>
                <img src={dataBaseElem.img} alt=""/>
                <h2>{dataBaseElem.title}</h2>
                <p>{dataBaseElem.description}</p>

            </div>
        </Link>
    );
};

export default Card;