import "./Profile.css";
import { Link } from "react-router-dom";


function Profile() {

  return (
    <main>
      <section className="profile">
        <div className="profile__wrapper">
          <h1 className="profile__title">Привет,{}!</h1>
          <div className="profile__form">
            <div className="profile__form-row">
              <h2 className="profile__label">E-mail</h2>
              <p className="profile__email">{}</p>
            </div>
            <div className="profile__buttons">
              <Link to="/history" className="profile__button">
                История поиска
              </Link>
              <Link to="/" className="profile__button profile__button_red">
                Выйти из аккаунта
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
