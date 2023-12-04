import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { getFilms } from "../../utils/store/slices/filmslice";

import { moviesApi } from "../../utils/MoviesApi/MoviesApi";

function MoviesCardList({ isSavedMoviesPage }) {
  const films = useSelector((state) => state.filmSlice.films);
  const dispatch = useDispatch();

  useEffect(() => {
    moviesApi.getFilms().then((films) => dispatch(getFilms(films)));
  }, []);

  // отображение ошибок
  if (!films.length) {
    return <p className="movies-list__error">Ничего не найдено.</p>;
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
