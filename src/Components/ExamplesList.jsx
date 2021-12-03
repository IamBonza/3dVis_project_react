import React from 'react';
import Card from "./Card";

const ExamplesList = (props) => {
    return (
        <div className='example-list-container'>
            {props.dataBase.map((dataBaseElem) => {
                return (
                        <Card key={dataBaseElem.id}
                              img={dataBaseElem.img}
                              title={dataBaseElem.title}
                              description={dataBaseElem.description}
                              id={dataBaseElem.id}
                              addToFav={() => props.addToFav(dataBaseElem)}/>
                )
            })}

        </div>
    );
};

export default ExamplesList;