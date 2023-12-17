import "./App.css";
import { useDispatch } from "react-redux";

import { Route, Routes, useNavigate } from "react-router";
import { lazy, Suspense, useEffect } from "react";

import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import { useGetDataUserQuery } from "../../utils/store/query/user";
import { getUserInfo } from "../../utils/store/slices/userslice";

const Main = lazy(() => import("../Main/Main"));
const Movies = lazy(() => import("../Movies/Movies"));
const Movie = lazy(() => import("../Movie/Movie"));
const SavedMovies = lazy(() => import("../SavedMovies/SavedMovies"));
const Profile = lazy(() => import("../Profile/Profile"));
const Register = lazy(() => import("../Register/Register"));
const Login = lazy(() => import("../Login/Login"));
const NotFound = lazy(() => import("../NotFound/NotFound"));

function App() {
  const { data, loader, error } = useGetDataUserQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error && !loader) {
      dispatch(getUserInfo(data));
    } else if (error) {
      navigate("/");
      localStorage.clear();
    }
  }, [data, error]);

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
