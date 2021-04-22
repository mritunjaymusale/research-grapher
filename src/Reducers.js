import { DirectedGraph } from "graphology";

export function graphReducer(
  state = { graph: new DirectedGraph(), currently_selected_node: null },
  action
) {
  switch (action.type) {
    case "UPDATE_GRAPH":
      return {
        ...state,
        graph: action.graph,
      };
    case "UPDATE_CURRENTLY_SELECTED_NODE":
      return {
        ...state,
        currently_selected_node: action.node,
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
