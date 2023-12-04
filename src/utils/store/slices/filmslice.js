import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [],
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    getFilms: (state, action) => {
      // action.payload - параметр переданный в метод
      return { ...state, films : action.payload };
    },
  },
});

export default filmSlice.reducer;
export const { getFilms } = filmSlice.actions;
