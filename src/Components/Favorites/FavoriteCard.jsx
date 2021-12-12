import React from "react";
import { Link } from "react-router-dom";
import classes from "./Favorites.module.css";

const FavoriteCard = (props) => {
  return (
    <div key={props.id} className={classes.cardContainer}>
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Link to={`/examples/${props.id}`}>Подробнее</Link>
      <button onClick={() => props.removeFromFav(props.id)}>
        Удалить из избранного
      </button>
    </div>
  );
};

export default FavoriteCard;