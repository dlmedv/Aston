import "./MoviesCard.css";
import photo from "../../images/zaglush.jpeg";

function MoviesCard() {
  const movie = {
    nameRU: "Роллинг Стоунз» в изгнании",
    duration: 61,
    trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
    image: photo,
  };

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__time">
          {Math.floor(movie.duration / 60)}ч{" "}
          {movie.duration - 60 * Math.floor(movie.duration / 60)}м
        </p>
        <button
          className="movies-card__button movies-card__button_active"
          type="button"
        ></button>
      </div>
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies-card__link"
      >
        <img
          className="movies-card__poster"
          src={movie.image}
          alt={`Постер ${movie.nameRU}`}
        />
      </a>
    </li>
  );
}

export default MoviesCard;
