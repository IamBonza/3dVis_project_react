import React from 'react';
import {Link, useParams} from "react-router-dom";

const FullExample = ({dataBase, addToFav}) => {
    const {id} = useParams();

    return (
            <>
            {dataBase.filter(dataBaseItem => dataBaseItem.id === id).map((dataBaseElem) => {
               return (
                   <section key={dataBaseElem.id} className='full-example-container'>
                       <div className="buttonContainer">
                           <div><Link to='/examples'><button>Назад</button></Link></div>
                           <div><button className="buttonCard" onClick={()=> addToFav(dataBaseElem)}>
                               Добавить в избранное
                           </button></div>
                       </div>
                       <h2>{dataBaseElem.title}</h2>
                       <img src={dataBaseElem.img} alt=""/>
                       <p>{dataBaseElem.descriptionFull}</p>
                   </section>
               )

            })}
            </>

    );
};

export default FullExample;