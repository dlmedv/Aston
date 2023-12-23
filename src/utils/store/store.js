import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { preloaderStateFilm, preloaderStateUser } from "./preloaderState";
import { moviesApi } from "./query/movies";
import { userApi } from "./query/user";
import filmSlice from "./slices/filmslice";
import userSlice from "./slices/userslice";
import userMiddleware from "./middleware/userMiddleware.js";

const store = configureStore({
  reducer: {
    filmSlice,
    userSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  preloadedState: {
    filmSlice: preloaderStateFilm(),
    userSlice: preloaderStateUser(),
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      moviesApi.middleware,
      userApi.middleware,
      userMiddleware
    );
  },
});

setupListeners(store.dispatch);
export default store;
