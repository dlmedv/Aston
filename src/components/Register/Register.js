import "./Register.css";
import { Link } from "react-router-dom";

import { useState } from "react";

import logo from "../../images/logo.svg";

function Register() {
  const [buttonStatus, setButtonStatus] = useState(false);


  return (
    <main>
      <section className="auth">
        <Link to="/">
          <img className="auth__logo" src={logo} alt="логотип" />
        </Link>
        <h1 className="auth__title">Добро пожаловать!</h1>
        <form className="auth__form" noValidate>
          <div className="auth__form-wrapper">
            <label className="auth__form-label">Имя</label>
            <input
              className="auth__form-input"
              type="text"
              id="name-input"
              name="name"
              placeholder="Введите ваше имя"
              minLength="2"
              maxLength="30"
              required
            />
          </div>
          <span className="auth__form-error">ошибка</span>
          <div className="auth__form-wrapper">
            <label className="auth__form-label">E-mail</label>
            <input
              className="auth__form-input"
              type="email"
              id="email-input"
              name="email"
              minLength="5"
              maxLength="30"
              required
              placeholder="Введите ваш e-mail"
            />
          </div>
          <span className="auth__form-error">ошибка</span>
          <div className="auth__form-wrapper">
            <label className="auth__form-label">Пароль</label>
            <input
              className="auth__form-input"
              type="password"
              id="auth-input"
              name="password"
              minLength="8"
              maxLength="30"
              required
              placeholder="Введите ваш пароль"
            />
          </div>
          <span className="auth__form-error">ошибка</span>
          <span className="auth__form-error auth__form-error_reg">
          </span>
          <button
            className={
              buttonStatus
                ? "auth__button"
                : "auth__button auth__button_disabled"
            }
            type="submit"
            disabled={!buttonStatus}
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="auth__question-wrapper">
          <p className="auth__question"> Уже зарегистрированы?</p>
          <Link to="/signin" className="auth__question auth__question_link">
            Войти
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Register;
