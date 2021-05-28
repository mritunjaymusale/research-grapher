import { createSlice } from "@reduxjs/toolkit";
import { DirectedGraph } from "graphology";

export const initialState = {
  graph: new DirectedGraph(),
};

const GraphSlice = createSlice({
  name: "Graph",
  initialState,
  reducers: {
    updateGraph: (state, actions) => {
      return {
        ...state,
        graph: state.graph.import(actions.payload.graph),
      };
    },
  },
});

export const { updateGraph } = GraphSlice.actions;

export default GraphSlice.reducer;
