import React from 'react';
import classes from './ExamplesList.module.css'
import ExampleCard from '../ExampleCard/ExampleCard';

const ExamplesList = ({dataBase, addToFav}) => {
    return (
        <div className={classes.exampleListContainer}>
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