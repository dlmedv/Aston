import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import { moviesApi } from "./query/movies";
import { userApi } from "./query/user";
import filmSlice from "./slices/filmslice";
import userSlice from "./slices/userslice";

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
      userApi.middleware
    );
  },
});

setupListeners(store.dispatch);
export default store;
