import "./App.css";

import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";

const Main = lazy(() => import("../Main/Main"));
const Movies = lazy(() => import("../Movies/Movies"));
const Movie = lazy(() => import("../Movie/Movie"));
const SavedMovies = lazy(() => import("../SavedMovies/SavedMovies"));
const Profile = lazy(() => import("../Profile/Profile"));
const Register = lazy(() => import("../Register/Register"));
const Login = lazy(() => import("../Login/Login"));
const NotFound = lazy(() => import("../NotFound/NotFound"));

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
