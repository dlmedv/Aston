import "./Profile.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.userSlice);
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <main>
      <section className="profile">
        <div className="profile__wrapper">
          <h1 className="profile__title">Привет,{user.name}!</h1>
          <div className="profile__form">
            <div className="profile__form-row">
              <h2 className="profile__label">E-mail</h2>
              <p className="profile__email">{user.email}</p>
            </div>
            <div className="profile__buttons">
              <Link to="/history" className="profile__button">
                История поиска
              </Link>
              <Link
                to="/"
                onClick={logOut}
                className="profile__button profile__button_red"
              >
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
