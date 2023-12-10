import { useNavigate } from "react-router";
import "./MoviesCard.css";

function MoviesCard({ movie, isSavedMoviesPage }) {
  const navigate = useNavigate();

  function clickMore() {
    navigate(`/movies/${movie.id}`);
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
            className="movies-card__button movies-card__button_delete"
            type="button"
          ></button>
        ) : (
          <button
            className={"movies-card__button movies-card__button_active"}
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
