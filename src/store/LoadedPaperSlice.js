import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  paper: null,
  success: false,
  isLoading: false,
};

const LoadedPaperSlice = createSlice({
  name: "LoadedPaper",
  initialState,
  reducers: {
    updatePaper: (state, actions) => {
      return {
        ...state,
        paper: actions.payload.paper,
        success: actions.payload.success,
        isLoading: actions.payload.isLoading,
      };
    },
  },
});

export const { updatePaper } = LoadedPaperSlice.actions;

export default LoadedPaperSlice.reducer;
