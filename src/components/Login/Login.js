import "./Login.css";
import { Link } from "react-router-dom";

import { useState } from "react";

import logo from "../../images/logo.svg";


function Login() {
  const [buttonStatus, setButtonStatus] = useState(false);

  
  return (
    <main>
      <section className="auth">
        <Link to="/">
          <img className="auth__logo" src={logo} alt="логотип" />
        </Link>
        <h1 className="auth__title">Рады видеть!</h1>
        <form className="auth__form" noValidate>
          <div className="auth__form-wrapper">
            <label className="auth__form-label">E-mail</label>
            <input
              className="auth__form-input"
              type="email"
              minLength="5"
              maxLength="30"
              required
              name="email"
              placeholder="Введите ваш e-mail"
            />
          </div>
          <span className="auth__form-error">ошибка</span>
          <div className="auth__form-wrapper">
            <label className="auth__form-label">Пароль</label>
            <input
              className="auth__form-input"
              type="password"
              minLength="8"
              maxLength="30"
              required
              name="password"
              placeholder="Введите ваш пароль"
              autoComplete="on"
            />
          </div>
          <span className="auth__form-error">ошибка</span>
          <span className="auth__form-error auth__form-error_log">
          </span>
          <button
            className={
              buttonStatus
                ? "auth__button auth__button_margin"
                : "auth__button auth__button_margin auth__button_disabled"
            }
            type="submit"
            disabled={!buttonStatus}
          >
            Войти
          </button>
        </form>
        <div className="auth__question-wrapper">
          <p className="auth__question">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="auth__question auth__question_link">
            Регистрация
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Login;
