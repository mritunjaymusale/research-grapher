import { DirectedGraph } from "graphology";

export function graphReducer(state = { graph: new DirectedGraph() }, action) {
  switch (action.type) {
    case "updateGraph":
      return {
        ...state,
        graph: action.payload,
      };
    default:
      return state;
  }
}
