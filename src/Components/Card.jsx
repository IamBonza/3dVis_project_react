import React from 'react';
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div key={props.id} className='card-container'>
            <img src={props.img} alt=""/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Link to={`/examples/${props.id}`}>Подробнее</Link>
            <button className='buttonCard' onClick={props.addToFav}>Добавить в избранное</button>
        </div>
    );
};

export default Card;