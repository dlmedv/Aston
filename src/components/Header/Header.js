import { Route, Routes, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getFilms } from "../../utils/store/slices/filmslice";
import { moviesApi } from "../../utils/MoviesApi/MoviesApi";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header({ loggedIn }) {
  const dispatch = useDispatch();

  useEffect(() => {
    moviesApi.getFilms().then((films) => dispatch(getFilms(films)));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <header className="header">
            <Link to="/">
              <img className="header__logo" src={logo} alt="логотип" />
            </Link>
            {loggedIn ? (
              <nav className="header__info">
                <Link to="/movies" className="header__link header__link_gray">
                  Фильмы
                </Link>
                <Link
                  to="/saved-movies"
                  className="header__link header__link_gray"
                >
                  Сохраненные фильмы
                </Link>
                <Link to="/profile" className="header__link-account">
                  <p className="header__link header__link_gray">Аккаунт </p>
                  <div className="header__link-icon"></div>
                </Link>
              </nav>
            ) : (
              <nav className="header__info">
                <Link
                  to="/signup"
                  className=" header__link header__link_sign-up"
                >
                  Регистрация
                </Link>
                <Link
                  to="/signin"
                  className=" header__link header__link_sign-in"
                >
                  Войти
                </Link>
              </nav>
            )}
          </header>
        }
      />
      <Route
        path="/movies"
        element={
          <header className="header header_gray">
            <Link to="/">
              <img className="header__logo" src={logo} alt="логотип" />
            </Link>
            <nav className="header__info">
              <Link to="/movies" className="header__link header__link_gray">
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className="header__link header__link_gray"
              >
                Сохраненные фильмы
              </Link>
              <Link to="/profile" className="header__link-account">
                <p className="header__link header__link_gray">Аккаунт </p>
                <div className="header__link-icon"></div>
              </Link>
            </nav>
          </header>
        }
      />
      <Route
        path="/saved-movies"
        element={
          <header className="header header_gray">
            <Link to="/">
              <img className="header__logo" src={logo} alt="логотип" />
            </Link>
            <nav className="header__info">
              <Link to="/movies" className="header__link header__link_gray">
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className="header__link header__link_gray"
              >
                Сохраненные фильмы
              </Link>
              <Link to="/profile" className="header__link-account">
                <p className="header__link header__link_gray">Аккаунт </p>
                <div className="header__link-icon"></div>
              </Link>
            </nav>
          </header>
        }
      />
      <Route
        path="/profile"
        element={
          <header className="header header_gray">
            <Link to="/">
              <img className="header__logo" src={logo} alt="логотип" />
            </Link>
            <nav className="header__info">
              <Link to="/movies" className="header__link header__link_gray">
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className="header__link header__link_gray"
              >
                Сохраненные фильмы
              </Link>
              <Link to="/profile" className="header__link-account">
                <p className="header__link header__link_gray">Аккаунт </p>
                <div className="header__link-icon"></div>
              </Link>
            </nav>
          </header>
        }
      />
      <Route
        path="/history"
        element={
          <header className="header header_gray">
            <Link to="/">
              <img className="header__logo" src={logo} alt="логотип" />
            </Link>
            <nav className="header__info">
              <Link to="/movies" className="header__link header__link_gray">
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className="header__link header__link_gray"
              >
                Сохраненные фильмы
              </Link>
              <Link to="/profile" className="header__link-account">
                <p className="header__link header__link_gray">Аккаунт </p>
                <div className="header__link-icon"></div>
              </Link>
            </nav>
          </header>
        }
      />
      <Route
        path="movies/:movieId"
        element={
          <header className="header header_gray">
            <Link to="/">
              <img className="header__logo" src={logo} alt="логотип" />
            </Link>
            <nav className="header__info">
              <Link to="/movies" className="header__link header__link_gray">
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className="header__link header__link_gray"
              >
                Сохраненные фильмы
              </Link>
              <Link to="/profile" className="header__link-account">
                <p className="header__link header__link_gray">Аккаунт </p>
                <div className="header__link-icon"></div>
              </Link>
            </nav>
          </header>
        }
      />
      <Route path="/signin" element={null} />
      <Route path="/signup" element={null} />
    </Routes>
  );
}

export default Header;
