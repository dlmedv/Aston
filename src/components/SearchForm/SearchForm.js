import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <form className="search-form__form" noValidate>
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          required
        />
        <button type="submit" className="search-form__button">
          Найти
        </button>
      </form>
      <span className="search-form__error"></span>
    </div>
  );
}

export default SearchForm;
