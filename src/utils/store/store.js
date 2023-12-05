import { configureStore } from "@reduxjs/toolkit";

import filmSlice from "./slices/filmslice";

const store = configureStore({
  reducer: {
    filmSlice,
  },
});

export default store;
