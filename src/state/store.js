import { configureStore } from "@reduxjs/toolkit";
import genres from "state/genres.slice";
import moviePerPage from "./movie.slice";

const store = configureStore({
  reducer: {
    genres,
    moviePerPage,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
