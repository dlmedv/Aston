import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [],
  searchFilms: [],
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    getFilms: (state, action) => {
      return { ...state, films: action.payload };
    },
    searchFilm: (state, action) => {
      return {
        ...state,
        searchFilms: state.films.filter(
          (item) =>
            item.nameRU.toLowerCase().includes(action.payload.toLowerCase()) ||
            item.nameEN.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    },
    nullSearchFilm: (state) => {
      return { ...state, searchFilms: [] };
    },
  },
});

export default filmSlice.reducer;
export const { getFilms, searchFilm, nullSearchFilm } = filmSlice.actions;
