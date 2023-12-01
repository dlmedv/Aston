import "./App.css";
import { useState } from "react";

import { Route, Routes } from "react-router";

import Main from "../Main/Main";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // стейт проверки статуса пользователя

  return (
    <div className="app">
      <div className="app__container">
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
