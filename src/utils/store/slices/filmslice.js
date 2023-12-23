import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    getFilms: (state, action) => {
      state.films = action.payload;
    },
    searchFilm: (state, action) => {
      state.searchFilms = state.films.filter(
        (item) =>
          item.nameRU.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.nameEN.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    nullSearchFilm: (state) => {
      state.searchFilms = [];
    },
    setSearchStr: (state, action) => {
      state.searchStr = action.payload;
    },
    setSearchedFilms: (state, action) => {
      state.history = action.payload;
    },
  },
});

export default filmSlice.reducer;
export const {
  getFilms,
  searchFilm,
  nullSearchFilm,
  setSearchStr,
  setSearchedFilms,
} = filmSlice.actions;
