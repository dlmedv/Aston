import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import { moviesApi } from "./query/movies";
import { userApi } from "./query/user";
import filmSlice from "./slices/filmslice";
import userSlice from "./slices/userslice";
import loginLoggerMiddleware from "./middleware/loginLoggerMiddleware";

const store = configureStore({
  reducer: {
    filmSlice,
    userSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      moviesApi.middleware,
      userApi.middleware,
      loginLoggerMiddleware
    );
  },
});

setupListeners(store.dispatch);
export default store;
