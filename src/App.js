import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { FilmList } from "./FilmList/FilmsList";
import { FilmDetails } from "./FilmDetails";
import { CharacterDetails } from "./CharacterDetails";
import logo from './images/logo/Star-Wars-Emblem.png'
import './App.css';

function App() {
  const [type, setType] = useState("films");
  const [filmsList, setFilmsList] = useState([]);
  const [filmDetail, setFilmDetail] = useState();
  const [character, setCharacter] = useState();

  function characterInformation(params, characters) {
    const filteredCharacter = characters.filter((item) => item.name === params);
    setCharacter(filteredCharacter);
  }

  function saveId(params) {
    setFilmDetail(params);
  }

  useEffect(() => {
    fetch(`https://swapi.dev/api/${type}/`)
      .then((response) => response.json())
      .then((data) => {
        setFilmsList(data.results);
      });
  }, [type]);

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/"><img className="logo" src={logo} alt="starWars" ></img></Link>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<FilmList filmsListData={filmsList} saveId={saveId} />}
          />
          <Route
            path="/film_details"
            element={
              <FilmDetails
                filmsListData={filmsList}
                saveId={filmDetail}
                aboutCharacter={characterInformation}
              />
            }
          />
          <Route
            path="/character_details"
            element={
              <CharacterDetails
                filmsListData={filmsList}
                aboutCharacter={character}
              />
            }
          />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
