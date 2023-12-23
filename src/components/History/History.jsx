import "./History.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {
  setSearchStr,
  setSearchedFilms,
} from "../../utils/store/slices/filmslice";

function History() {
  const searchFilms = useSelector((state) => state.filmSlice.history);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function setSearch(film) {
    dispatch(setSearchStr(film));
    navigate("/movies/");
  }

  function delHistory(film) {
    dispatch(
      setSearchedFilms([...searchFilms.filter((item) => item !== film)])
    );
  }

  return (
    <main>
      <section className="history">
        <h1 className="history__title"> История поиска</h1>
        <ul className="history__items">
          {searchFilms.map((film, index) => (
            <li className="history__item" key={index}>
              <div
                onClick={() => setSearch(film)}
                type="button"
                className="history__name"
              >
                {film}
              </div>
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
