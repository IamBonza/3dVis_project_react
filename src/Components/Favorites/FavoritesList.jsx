import React, {useContext} from 'react';
import classes from './Favorites.module.css'
import FavoriteCard from './FavoriteCard';
import {AppContext} from '../../context/appContext';

const FavoritesList = () => {

    const {favorites} = useContext(AppContext)

    return (
        <div className={classes.favoritesContainer}>

            <div className={classes.favoritesCardsContainer}>
                {favorites.length !== 0
                    ? favorites.map((favoritesElem) => {
                        return (
                            <FavoriteCard
                                key={favoritesElem.id}
                                favoritesElem={favoritesElem}
                            />
                        )
                        })
                    : <h1>В избранном пусто</h1>
                }
            </div>

        </div>
    );
};

export default FavoritesList;