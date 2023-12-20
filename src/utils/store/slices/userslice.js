import { createSlice } from "@reduxjs/toolkit";

import { deleteCookie } from "../cookie/cookie";

const user = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  name: user ? user.name : "",
  email: user ? user.email : "",
  loggetIn: JSON.parse(localStorage.getItem("loggedIn")) || false,
  savedFilms: JSON.parse(localStorage.getItem("savedFilms")) || [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearUserData: (state) => {
      localStorage.clear();
      deleteCookie("jwt");
      state.name = "";
      state.email = "";
      state.loggetIn = false;
      state.savedFilms = [];
    },
    setLoggetIn: (state) => {
      localStorage.setItem("loggedIn", JSON.stringify(!state.loggetIn));
      state.loggetIn = !state.loggetIn;
    },
    getSavedFilms: (state, action) => {
      // console.log(action.payload);
      localStorage.setItem("savedFilms", JSON.stringify(action.payload));
      return {...state, savedFilms : action.payload};
    },
  },
});

export default userSlice.reducer;
export const {
  getUserInfo,
  setLoggetIn,
  getSavedFilms,
  clearUserData,
  removeSavedFilm,
} = userSlice.actions;
