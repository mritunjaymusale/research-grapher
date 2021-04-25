import { DirectedGraph } from "graphology";

export function graphReducer(
  state = {
    graph: new DirectedGraph(),
    currently_selected_node: null,
    isUpdating: false,
  },
  action
) {
  switch (action.type) {
    case "GRAPH_UPDATE_STARTED":
      return {
        ...state,
        isUpdating: true,
      };
    case "UPDATE_GRAPH":
      return {
        ...state,
        graph: action.graph,
      };
    case "GRAPH_UPDATE_FINISHED":
      return {
        ...state,
        isUpdating: false,
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

export function toastReducer(state = { toast: "" }, action) {
  if (action.type === "SEND_TOAST") {
    return { ...state, toast: action.toast };
  }
  return state;
}
