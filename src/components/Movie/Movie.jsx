import "./Movie.css";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movie() {
  const params = useParams();
  const films = useSelector((state) => state.filmSlice.films);
  const [film, setFilm] = useState({});

  useEffect(() => {
    if (films.length > 0) {
      setFilm(films.find((item) => item.id == params.id));
    }
  }, [films]);

  if (!films.length) {
    return <Preloader />;
  }

  return (
    <>
      <div className="movie">
        <div className="movie__wrapper">
          {Object.keys(film).length > 0 && (
            <img
              className="movie__img"
              src={`https://api.nomoreparties.co/${film.image.url}`}
              alt={film.nameRU}
            />
          )}
          <div className="movie__info">
            <h1 className="movie__name">{film.nameRU}</h1>
            <h2 className=" movie__name movie__name-en">{film.nameEN}</h2>
            <ul className="movie__about">
              О Фильме
              <li className="movie__item">Страна: {film.country}</li>
              <li className="movie__item">Режиссер: {film.director}</li>
              <li className="movie__item">Год производства: {film.year}</li>
              <li className="movie__item">Время: {film.duration}мин</li>
              <li className="movie__item"></li>
            </ul>
          </div>
        </div>
        <p className="movie__description">{film.description}</p>
      </div>
      <Footer />
    </>
  );
}

export default Movie;
