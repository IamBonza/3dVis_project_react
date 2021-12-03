import React from 'react';
import {useParams} from "react-router-dom";

const FullExample = (props) => {
    const {id} = useParams();

    return (
            <>

            {props.dataBase.filter(dataBaseItem => dataBaseItem.id === id).map((dataBaseElem) => {
               return (
                   <section key={dataBaseElem.id} className='full-example-container'>
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