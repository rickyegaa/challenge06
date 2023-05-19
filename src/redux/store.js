import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../redux/reducers/searchRedux";
import allReducer from "../redux/reducers/allRedux";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    all: allReducer,
  },
});
