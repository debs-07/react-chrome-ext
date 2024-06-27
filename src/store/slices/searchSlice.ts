import { createSlice } from "@reduxjs/toolkit";
import { QuerySearchType } from "../../types";

const initialState = {
  querySearch: {
    enabled: false,
    value: "",
  } as QuerySearchType,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    updateToggle: (state) => {
      state.querySearch.enabled = !state.querySearch.enabled;
    },
    updateQuery: (state, action) => {
      state.querySearch.value = action.payload;
    },
  },
});

export const { updateToggle, updateQuery } = searchSlice.actions;

export default searchSlice.reducer;
