import React from 'react';
import ExampleCard from './ExampleCard/ExampleCard';

const ExamplesList = ({dataBase, addToFav}) => {
    return (
        <div className="example-list-container">
            {dataBase.map((dataBaseElem) => {
                return (
                    <ExampleCard key={dataBaseElem.id}
                          dataBaseElem={dataBaseElem}
                          addToFav={() => addToFav(dataBaseElem)}/>
                )
            })}

        </div>
    );
};

export default ExamplesList;