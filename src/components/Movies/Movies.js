import { useSelector } from "react-redux";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import "./Movies.css";

function Movies() {
  return (
    <>
      <main>
        <section className="movies">
          <SearchForm />
          <MoviesCardList isSavedMoviesPage={false} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
