import { Link } from "react-router-dom";
import "./FilmList.css";
// import aNewHope from "../images/film_posters/a_new_hope.jpg";

export const FilmList = (props) => {
  function getId(event) {
    props.saveId(event.target.id);
  }

  return (
    <ul className="film_list">
      {props.filmsListData.map((film) => (
        <li key={film.episode_id} className="list_item">
          <Link
            to="/film_details"
            id={film.episode_id}
            onClick={getId}
            className="film_li"
          >
            {film.title}
          </Link>

          <br />
          {film.director}
          <br />
          {film.release_date}
        </li>
      ))}
    </ul>
  );
};
