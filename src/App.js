import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./index.css";
import ExamplesList from "./Components/ExamplesList";
import Header from "./Components/Header";
import Main from "./Components/Main";
import FullExample from "./Components/FullExample";
import LoginForm from "./Components/LoginForm/LoginForm";
import Calc from "./Components/Calc/Calc";
import FavoritesList from "./Components/Favorites/FavoritesList";
import {AuthContext} from './context/context';
import {examples} from "./databases/examples";

function App() {
  const [dataBase, setDataBase] = useState(examples);

  const [favorites, setFavorites] = useState([]);

  function addToFav(dataBaseElem) {

    const temp = favorites.find((item)=> item === dataBaseElem)
        if(temp) {
            return
        }else {
            setFavorites([...favorites, dataBaseElem]);
        }


  }

  function removeFromFav(id) {
    const temp = favorites.filter((item) => item.id !== id);
    setFavorites(temp);
  }

  const [isAuth , setIsAuth]  = useState(false)

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true)
    }
  }, [])

  return (
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
      }}>

        <Router>

            <Header />
            {isAuth
                ?
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
                :
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route
                      path="/examples"
                      exact
                      element={<ExamplesList dataBase={dataBase}  addToFav={addToFav}/>}
                  />
                  <Route
                      path="/examples/:id"
                      element={<FullExample dataBase={dataBase} addToFav={addToFav}/>}
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
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="*" element={<Navigate to='/login' />} />
                </Routes>
                }

        </Router>
      </AuthContext.Provider>
  );
}

export default App;
