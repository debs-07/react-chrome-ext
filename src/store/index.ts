import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,
  },
});

export default store;
