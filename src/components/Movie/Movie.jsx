import "./Movie.css";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { getSavedFilms } from "../../utils/store/slices/userslice";
import {
  useSavedMoviesMutation,
  useDeleteMoviesMutation,
} from "../../utils/store/query/user";

import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movie() {
  const params = useParams();
  const films = useSelector((state) => state.filmSlice.films);
  const [saveMovie] = useSavedMoviesMutation();
  const [removeMovie] = useDeleteMoviesMutation();
  const [film, setFilm] = useState({ image: "", nameRU: "" });
  const user = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [isAddFilm, setIsAddFilm] = useState(true);
  const loggedIn = useSelector((state) => state.userSlice.loggetIn);

  function actionSavedFilms() {
    saveMovie(film).then(() => {
      dispatch(getSavedFilms(user.savedFilms.concat(film)));
      setIsAddFilm(false);
    });
  }

  function handleRemoveFilms() {
    removeMovie({ id: film.id }).then(() => {
      dispatch(
        getSavedFilms(user.savedFilms.filter((item) => item.id !== film.id))
      );
      setIsAddFilm(true);
    });
  }

  useEffect(() => {
    if (films.length > 0) {
      setFilm(films.find((item) => item.id == params.id));
    }
  }, [films]);

  useEffect(() => {
    if (film && user.savedFilms) {
      setIsAddFilm(!user.savedFilms.find((item) => item.id === film.id));
    }
  }, [film]);

  if (!films.length) {
    return <Preloader />;
  }

  return (
    <>
      {film && (
        <div className="movie">
          <div className="movie__wrapper">
            <img
              className="movie__img"
              src={`https://api.nomoreparties.co/${film.image.url}`}
              alt={film.nameRU}
            />
            <div className="movie__info">
              <h1 className="movie__name">{film.nameRU}</h1>
              <h2 className=" movie__name movie__name-en">{film.nameEN}</h2>
              <ul className="movie__about">
                О Фильме
                <li className="movie__item">Страна: {film.country}</li>
                <li className="movie__item">Режиссер: {film.director}</li>
                <li className="movie__item">Год производства: {film.year}</li>
                <li className="movie__item">Время: {film.duration}мин</li>
              </ul>
            </div>
          </div>
          <p className="movie__description">{film.description}</p>
          {isAddFilm && loggedIn ? (
            <button onClick={actionSavedFilms} className="movie__button">
              Сохранить фильм
            </button>
          ) : (
            <button
              onClick={handleRemoveFilms}
              className="movie__button"
            >
              Удалить фильм
            </button>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default Movie;
