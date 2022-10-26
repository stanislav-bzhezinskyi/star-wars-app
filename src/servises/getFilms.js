export const getFilms = async () => {
  const resp = await fetch(`https://swapi.dev/api/films/`);
  const data = await resp.json();

  return data.results;
};
