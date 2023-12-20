import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "./MoviesCard.css";
import { useSelector, useDispatch } from "react-redux";

import { getSavedFilms } from "../../utils/store/slices/userslice";

import {
  useSavedMoviesMutation,
  useDeleteMoviesMutation,
} from "../../utils/store/query/user";

function MoviesCard({ movie, isSavedMoviesPage }) {
  const navigate = useNavigate();
  const [saveMovie] = useSavedMoviesMutation();
  const [deleteMovie] = useDeleteMoviesMutation();
  const [isSaved, setIsSaved] = useState(false);
  const user = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  function clickMore() {
    navigate(`/movies/${isSavedMoviesPage ? movie.movieId : movie.id}`);
  }

  useEffect(() => {
    setIsSaved(!!user.savedFilms.find((item) => item.movieId === movie.id));
  }, []);

  async function handleSave() {
    try {
      if (isSaved) {
        await deleteMovie({ id: movie.id });
        dispatch(
          getSavedFilms(
            user.savedFilms.filter((item) => item.movieId !== movie.movieId)
          )
        );
      } else {
        await saveMovie(movie);
        dispatch(getSavedFilms(user.savedFilms.concat(movie)));
      }
      setIsSaved(!isSaved);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete() {
    try {
      await deleteMovie({ id: movie.movieId });
      dispatch(
        getSavedFilms(
          user.savedFilms.filter((item) => item.movieId !== movie.movieId)
        )
      );
      setIsSaved(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__time">
          {Math.floor(movie.duration / 60)}ч{" "}
          {movie.duration - 60 * Math.floor(movie.duration / 60)}м
        </p>
        {isSavedMoviesPage ? (
          <button
            onClick={handleDelete}
            className="movies-card__button movies-card__button_delete"
            type="button"
          ></button>
        ) : (
          <button
            onClick={handleSave}
            className={`movies-card__button ${
              isSaved ? "movies-card__button_active" : ""
            }`}
            type="button"
          ></button>
        )}
        <button className="movies-card__more" type="button" onClick={clickMore}>
          Подробнее...
        </button>
      </div>
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies-card__link"
      >
        <img
          className="movies-card__poster"
          src={
            movie.image.url
              ? `https://api.nomoreparties.co/${movie.image.url}`
              : movie.image
          }
          alt={`Постер ${movie.nameRU}`}
        />
      </a>
    </li>
  );
}

export default MoviesCard;
