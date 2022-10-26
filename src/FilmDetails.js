import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const FilmDetails = (props) => {
  let { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState([]);
  const [filmInfo, setFilmInfo] = useState([]);
  // const filmInfo = props.filmsListData.filter((film) => film.episode_id === +props.saveId);

  const getFilmInfo = async () => {
    const resp = await fetch(`https://swapi.dev/api/films/${id}`);
    const data = await resp.json();

    setFilmInfo(data);
    for (let character of data.characters) {
      fetch(`${character}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacterInfo((prevArray) => [...prevArray, data]);
        });
    }
  };
  useEffect(() => {
    getFilmInfo();
    // for (let character of filmInfo[0].characters) {
    //   fetch(`${character}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setCharacterInfo((prevArray) => [...prevArray, data]);
    //     });
    // }
  }, []);

  function infoAboutCharacter(event) {
    props.aboutCharacter(event.target.name, characterInfo);
  }

  return (
    <div>
      <h1>{filmInfo[0]?.title}</h1>
      <p className='paragraph'>
        episode number: {filmInfo[0]?.episode_id}
      </p>{' '}
      <br />
      <p>{filmInfo[0]?.opening_crawl}</p>
      <p>director: {filmInfo[0]?.director}</p>
      <ul>
        All episode {filmInfo[0]?.episode_id} Characters:
        {characterInfo.map((character, index) => {
          return (
            <li key={index} onClick={infoAboutCharacter}>
              <Link to='/character_details' name={character?.name}>
                {character?.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
