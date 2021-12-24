import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import classes from './FullExample.module.css'
import Button from '../Buttton/Button';
import {AppContext} from '../../context/appContext';

const FullExample = () => {
    const {id} = useParams();
    const {dataBase, addToFav} = useContext(AppContext)

    const result = dataBase.filter(dataBaseItem => dataBaseItem.id === id)

    return (
        <>
            {result.map((dataBaseElem) => {
                return (
                    <section key={dataBaseElem.id} className={classes.fullExample__container}>
                        <div className={classes.buttonContainer}>
                            <Link to='/examples'>
                                <Button>Назад</Button>
                            </Link>
                            <Button  onClick={()=> addToFav(dataBaseElem)} className='addToFavBtn'>
                                Добавить в избранное
                            </Button>
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