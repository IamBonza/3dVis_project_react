import React from 'react';
import {Link, useParams} from "react-router-dom";
import Button from './Buttton/Button';

const FullExample = ({dataBase, addToFav}) => {
    const {id} = useParams();

    return (
            <>
            {dataBase.filter(dataBaseItem => dataBaseItem.id === id).map((dataBaseElem) => {
               return (
                   <section key={dataBaseElem.id} className='full-example__container'>
                       <div className="buttonContainer">
                           <div><Link to='/examples'><Button>Назад</Button></Link></div>
                           <div><Button  onClick={()=> addToFav(dataBaseElem)} className='addToFavBtn'>
                               Добавить в избранное
                           </Button></div>
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