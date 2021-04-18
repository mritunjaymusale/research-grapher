import { DirectedGraph } from "graphology";

export function graphReducer(state = { graph: new DirectedGraph() }, action) {
  switch (action.type) {
    case "UPDATE_GRAPH":
      return {
        ...state,
        graph: action.graph,
      };
    default:
      return state;
  }
}

export function arxivReducer(
  state = {
    id: "",
    paper: false,
  },
  action
) {
  switch (action.type) {
    case "UPDATE_ARXIV_ID":
      return {
        ...state,
        id: action.newId,
      };
    case "UPDATE_ARXIV_PAPER":
      return {
        ...state,
        paper: action.paper,
      };

    default:
      return state;
  }
}

