import { createSlice } from "@reduxjs/toolkit";
import { SearchResultListType } from "../../types";

const initialState = {
  history: [] as SearchResultListType[],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    initializeDataFromChromestore: (state, action) => {
      state.history = action.payload;
    },
    clearDataFromChromeStore: (state) => {
      state.history = [];
    },
  },
});

export const { initializeDataFromChromestore, clearDataFromChromeStore } =
  moviesSlice.actions;

export default moviesSlice.reducer;
