import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import classes from './Favorites.module.css';
import {AppContext} from '../../context/appContext';

const FavoriteCard = ({favoritesElem}) => {

    const {removeFromFav} = useContext(AppContext)
    const {id, img, title, description} = favoritesElem

    return (
        <div key={id} className={classes.cardContainer}>
            <img src={img} alt=""/>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/examples/${id}`}>Подробнее</Link>
            <button onClick={() => removeFromFav(id)}>
                Удалить из избранного
            </button>
        </div>
    );
};

export default FavoriteCard;