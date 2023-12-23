const preloaderStateFilm = () => {
  const filmState = {
    films: JSON.parse(localStorage.getItem("films")) || [],
    searchFilms: [],
    searchStr: JSON.parse(localStorage.getItem("search")) || [],
    history : JSON.parse(localStorage.getItem("searchedFilms")) || []
  };

  return filmState;
};
const user = JSON.parse(localStorage.getItem("userInfo"));

const preloaderStateUser = () => {
  const userState = {
    name: user ? user.name : "",
    email: user ? user.email : "",
    loggetIn: JSON.parse(localStorage.getItem("loggedIn")) || false,
    savedFilms: JSON.parse(localStorage.getItem("savedFilms")) || [],
  };
  return userState;
};

export { preloaderStateFilm, preloaderStateUser };
