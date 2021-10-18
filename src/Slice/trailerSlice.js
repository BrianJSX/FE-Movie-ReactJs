import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  idTrailer: null,
};

const name = "Trailers";

export const trailerSlice = createSlice({
  name,
  initialState,
  reducers: {
    openTrailer: (state, action) => {
      state.isOpen = action.payload;
    },
    closeTrailer: (state, action) => {
      state.isOpen = action.payload;
    },
    setTrailerId: (state, action) => {
      state.idTrailer = action.payload;
    },
  },
});

export const { openTrailer, setTrailerId, closeTrailer } = trailerSlice.actions;

export default trailerSlice.reducer;
