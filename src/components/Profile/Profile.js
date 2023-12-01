import "./Profile.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Profile() {
  return (
    <main>
      <section className="profile">
        <div className="profile__wrapper">
          <h1 className="profile__title">{`Привет, ${undefined}!`}</h1>
          <form className="profile__form" noValidate>
            <div className="profile__form-row">
              <label className="profile__label">Имя</label>
              <input
                className="profile__input"
                id="name-input"
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                placeholder="Имя"
                required
              />
            </div>
            <span className="profile__error-text"></span>
            <div className="profile__form-row">
              <label className="profile__label">E-mail</label>
              <input
                className="profile__input"
                id="email-input"
                type="email"
                name="email"
                minLength="5"
                maxLength="30"
                placeholder="E-mail"
                required
              />
            </div>
            <span className="profile__error-text"></span>
            <div className="profile__buttons">
              <span className="profile__error-text profile__error-text_server"></span>
              <span className="profile__error-text profile__error-text_success"></span>
              <Link to="/history" className="profile__button">
                История поиска
              </Link>
              <Link to="/" className="profile__button profile__button_red">
                Выйти из аккаунта
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Profile;
