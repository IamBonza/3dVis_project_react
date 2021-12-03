import React from 'react';
import classes from './Favorites.module.css'
import FavoriteCard from "./FavoriteCard";

const FavoritesList = ({favorites, removeFromFav}) => {
    return (
        <div className={classes.favoritesContainer}>

            <div className={classes.favoritesCardsContainer}>
                {favorites.length !== 0
                    ? favorites.map((favoritesElem, index) => {
                            return (
                                <FavoriteCard
                                    key={index}
                                    img={favoritesElem.img}
                                    title={favoritesElem.title}
                                    description={favoritesElem.description}
                                    id={favoritesElem.id}
                                    removeFromFav={removeFromFav}
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