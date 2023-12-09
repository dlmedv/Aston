import { useSelector } from "react-redux";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ isSavedMoviesPage }) {
  const films = useSelector((state) => state.filmSlice.films);

  if (!films.length) {
    return <Preloader />;
  }

  return (
    <section className="movies-list">
      <ul className="movies-list__wrapper">
        {films.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            isSavedMoviesPage={isSavedMoviesPage}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
