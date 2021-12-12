import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
      <Link to={`/examples/${props.id}`} className="card-container">
               <div key={props.id} >
              <img src={props.img} alt="" />
              <h2>{props.title}</h2>
              <p>{props.description}</p>

               </div>
       </Link>
  );
};

export default Card;