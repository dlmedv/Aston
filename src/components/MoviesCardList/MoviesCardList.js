import { useState, useEffect } from "react";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="movies-list">
      <ul className="movies-list__wrapper">
        <MoviesCard />
      </ul>
      <button className="movies-list__button" type="button">
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
