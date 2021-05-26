import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  paperId: "",
  paperType: "",
};

const paperInputSlice = createSlice({
  name: "paperInfo",
  initialState,
  reducers: {
    addPaper(state, action) {
      const paperId = action.payload.paperId;
      const paperType = action.payload.paperType;
      return {
        ...state,
        paperId: paperId,
        paperType: paperType,
      };
    },
  },
});

export const { addPaper } = paperInputSlice.actions;

export default paperInputSlice.reducer;
