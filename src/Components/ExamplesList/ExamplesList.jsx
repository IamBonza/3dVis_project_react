import React, {useContext} from 'react';
import classes from './ExamplesList.module.css'
import ExampleCard from '../ExampleCard/ExampleCard';
import {AppContext} from '../../context/appContext';

const ExamplesList = () => {

    const {dataBase, addToFav} = useContext(AppContext)

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