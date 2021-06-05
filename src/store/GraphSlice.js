import { createSlice } from "@reduxjs/toolkit";
import { DirectedGraph } from "graphology";

export const initialState = {
  graph: new DirectedGraph(),
  selectedNode: null,
};

const GraphSlice = createSlice({
  name: "Graph",
  initialState,
  reducers: {
    updateGraph: (state, actions) => {
      return {
        ...state,
        graph: actions.payload.graph,
      };
    },
    changeSelectedNode: (state, actions) => {
      return {
        ...state,
        selectedNode: actions.payload.node,
      };
    },
  },
});

export const { updateGraph, changeSelectedNode } = GraphSlice.actions;

export default GraphSlice.reducer;
