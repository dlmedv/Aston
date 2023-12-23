const userMiddleware = (store) => (next) => (action) => {
  if (action.type === "user/setLoggetIn") {
    localStorage.setItem("loggedIn", JSON.stringify(true));
  }
  if (action.type === "user/setLogOut") {
    localStorage.setItem("loggedIn", JSON.stringify(false));
  }
  if (action.type === "user/getSavedFilms") {
    localStorage.setItem("savedFilms", JSON.stringify(action.payload));
  }
  if (action.type === "user/getUserInfo") {
    localStorage.setItem("userInfo", JSON.stringify(action.payload));
  }
  if (action.type === "film/getFilms") {
    localStorage.setItem("films", JSON.stringify(action.payload));
  }
  if (action.type === "film/searchFilm") {
    localStorage.setItem("search", JSON.stringify(action.payload));
  }
  if (action.type === "film/setSearchedFilms") {
    localStorage.setItem("searchedFilms", JSON.stringify(action.payload));
  }
  return next(action);
};

export default userMiddleware;
