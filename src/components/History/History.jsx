import "./History.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

import { setSearchStr } from "../../utils/store/slices/filmslice";

function History() {
  const [searchFilms, setSearchFilms] = useState(
    JSON.parse(localStorage.getItem("searchedFilms")) || []
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function setSearch(film) {
    dispatch(setSearchStr(film));
    navigate("/movies/");
  }

  function delHistory(film) {
    const arrSearch = JSON.parse(localStorage.getItem("searchedFilms")) || [];
    arrSearch.splice(arrSearch.indexOf(film), 1);
    localStorage.setItem("searchedFilms", JSON.stringify(arrSearch));
    setSearchFilms(arrSearch);
  }

  return (
    <main>
      <section className="history">
        <h1 className="history__title"> История поиска</h1>
        <ul className="history__items">
          {searchFilms.map((film, index) => (
            <li className="history__item" key={index}>
              <a
                onClick={() => setSearch(film)}
                href=" "
                className="history__name"
              >
                {film}
              </a>
              <button
                onClick={() => delHistory(film)}
                className="history__delete"
                type="button"
              ></button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default History;
