import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
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

export default SavedMovies;
