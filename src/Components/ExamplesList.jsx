import React from 'react';
import Card from './Card';

const ExamplesList = ({dataBase, addToFav}) => {
    return (
        <div className="example-list-container">
            {dataBase.map((dataBaseElem) => {
                return (
                    <Card key={dataBaseElem.id}
                          dataBaseElem={dataBaseElem}
                          addToFav={() => addToFav(dataBaseElem)}/>
                )
            })}

        </div>
    );
};

export default ExamplesList;