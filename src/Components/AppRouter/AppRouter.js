import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Main from '../Main/Main';
import ExamplesList from '../ExamplesList/ExamplesList';
import FullExample from '../FullExample/FullExample';
import FavoritesList from '../Favorites/FavoritesList';
import Calc from '../Calc/Calc';
import LoginForm from '../LoginForm/LoginForm';
import {AppContext} from '../../context/appContext';


const AppRouter = () => {

    const {dataBase, addToFav, removeFromFav, favorites } = useContext(AppContext)

    return (
        <>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route
                        path="/examples"
                        exact
                        element={<ExamplesList dataBase={dataBase} addToFav={addToFav}/>}
                    />
                    <Route
                        path="/examples/:id"
                        element={<FullExample dataBase={dataBase} addToFav={addToFav} />}
                    />
                    <Route
                        path="/favorites"
                        exact
                        element={
                            <FavoritesList
                                favorites={favorites}
                                removeFromFav={removeFromFav}
                            />
                        }
                    />
                    <Route path="/calc" element={<Calc />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="*" element={<Navigate to='/login' />} />
                </Routes>
        </>
    );
};

export default AppRouter;