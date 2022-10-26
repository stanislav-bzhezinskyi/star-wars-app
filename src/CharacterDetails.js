import { useEffect, useState } from "react";

export const CharacterDetails = ({ aboutCharacter }) => {
  const [homeworld, setHomeworld] = useState(aboutCharacter[0].homeworld);
  console.log(homeworld);

useEffect(() => {
  fetch(`${aboutCharacter[0].homeworld}`)
  .then((response) => response.json())
  .then((data) => {
    setHomeworld(data);
  });
}, [])


  return (
    <div className="character_card">
      <h1 className="character_name">{aboutCharacter[0].name}</h1>
      <div className="character_info">
        <p>birth year: {aboutCharacter[0].birth_year}</p>
        <p>gender: {aboutCharacter[0].gender}</p>
        <p>height: {aboutCharacter[0].height}</p>
        <p>mass: {aboutCharacter[0].mass}</p>
        <p>hair color: {aboutCharacter[0].hair_color}</p>
        <p>skin color: {aboutCharacter[0].skin_color}</p>
        <p>eye color: {aboutCharacter[0].eye_color}</p>
         {<p>homeworld: {homeworld.name}</p>}
        <p>{homeworld.name} diameter: {homeworld.diameter}</p>
        <p>{homeworld.name} population: {homeworld.population} individuals </p>
      </div>
    </div>
  );
};
