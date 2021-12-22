import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Header from './Components/Header/Header';
import {AuthContext} from './context/context';
import {AppContext} from './context/appContext';
import {examples} from './databases/examples';
import {styles} from './databases/stylesDb';
import AppRouter from './Components/AppRouter/AppRouter';
import Modal from './Components/Modal/Modal';

function App() {
    const [dataBase] = useState(examples);

    const [favorites, setFavorites] = useState([]);

    function addToFav(dataBaseElem) {

        const temp = favorites.find((item) => item === dataBaseElem)
        if (temp) {
            return
        } else {
            setFavorites([...favorites, dataBaseElem]);
        }


    }

    function removeFromFav(id) {
        const temp = favorites.filter((item) => item.id !== id);
        setFavorites(temp);
    }

    const [isAuth, setIsAuth] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('isAuth')) {
            setIsAuth(true)
        }
    }, [])

    return (
        <div className={'App'}>
            <AppContext.Provider value={{dataBase, addToFav, removeFromFav, favorites, styles}}>
                <AuthContext.Provider value={{isAuth, setIsAuth, isVisible, setIsVisible}}>
                    <Router>
                        <Header/>
                        <AppRouter/>
                        <Modal/>
                    </Router>
                </AuthContext.Provider>
            </AppContext.Provider>
        </div>
    );
}

export default App;
