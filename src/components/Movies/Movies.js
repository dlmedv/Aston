
import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

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
