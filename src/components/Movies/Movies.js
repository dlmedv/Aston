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
          <MoviesCardList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
