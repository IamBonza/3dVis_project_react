import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import {AuthContext} from './context/context';
import {AppContext} from './context/appContext';
import {examples} from './databases/examples';
import {InteriorStyles} from './databases/stylesDb';
import {routes} from './databases/routes';
import {links} from './databases/links';
import AppRouter from './Components/AppRouter/AppRouter';
import Header from './Components/Header/Header';
import Modal from './Components/Modal/Modal';

function App() {
    const [dataBase] = useState(() => examples);
    const [favorites, setFavorites] = useState([]);
    const [isAuth, setIsAuth] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    function addToFav(dataBaseElem) {
        const temp = favorites.find((item) => item === dataBaseElem)
        if (!temp) {
            setFavorites(prevState => [...prevState, dataBaseElem]);

        }
    }

    function removeFromFav(id) {
        const temp = favorites.filter((item) => item.id !== id);
        setFavorites(temp);
    }

    useEffect(() => {
        if (localStorage.getItem('isAuth')) {
            setIsAuth(true)
        }
    }, [])

    return (

        <AppContext.Provider value={{dataBase, addToFav, removeFromFav, favorites, InteriorStyles, routes, links}}>
            <AuthContext.Provider value={{isAuth, setIsAuth, isVisible, setIsVisible}}>
                <div className={'App'}>
                    <Router>
                        <Header/>
                        <AppRouter/>
                        <Modal/>
                    </Router>
                </div>
            </AuthContext.Provider>
        </AppContext.Provider>

    );
}

export default App;
