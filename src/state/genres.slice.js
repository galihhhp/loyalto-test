import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGenres = createAsyncThunk("genres", () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49"
    )
    .then((response) => {
      return response.data.genres;
    });
});

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getGenres.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export default genresSlice.reducer;
