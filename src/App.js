import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./index.css";
import ExamplesList from "./Components/ExamplesList";
import Header from "./Components/Header";
import Main from "./Components/Main";
import FullExample from "./Components/FullExample";
import LoginForm from "./Components/LoginForm/LoginForm";
import Calc from "./Components/Calc/Calc";
import FavoritesList from "./Components/Favorites/FavoritesList";

function App() {
  const [dataBase, setDataBase] = useState([
    {
      id: "1",
      img: "/images/1.jpeg",
      title: "Заголовок",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum",
    },
    {
      id: "2",
      img: "/images/2.jpeg",
      title: "Заголовок 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum",
    },
    {
      id: "3",
      img: "/images/1.jpeg",
      title: "Заголовок",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum",
    },
    {
      id: "4",
      img: "/images/2.jpeg",
      title: "Заголовок 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum",
    },
    {
      id: "5",
      img: "/images/1.jpeg",
      title: "Заголовок",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum",
    },
    {
      id: "6",
      img: "/images/1.jpeg",
      title: "Заголовок",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, debitis dolore earum",
    },
  ]);

  const [favorites, setFavorites] = useState([]);

  function addToFav(dataBaseElem) {
    const temp = [...favorites, dataBaseElem];
    setFavorites(temp);
  }

  function removeFromFav(id) {
    const temp = favorites.filter((item) => item.id !== id);
    console.log(temp);
    setFavorites(temp);
  }

  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/examples"
            exact
            element={<ExamplesList dataBase={dataBase} addToFav={addToFav} />}
          />
          <Route
            path="/examples/:id"
            element={<FullExample dataBase={dataBase} />}
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
        </Routes>
      </>
    </Router>
  );
}

export default App;
