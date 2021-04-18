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
    isLoading: true,
    paperDetails: false,
  },
  action
) {
  switch (action.type) {
    case "updateId":
      return {
        ...state,
        id: action.arxivId,
      };

    default:
      return state;
  }
}

export const dataFetchReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case "finishedLoading":
      return {
        ...state,
        isloading: false,
      };
    case "startLoading":
      return {
        ...state,
        isloading: true,
      };

    default:
      return state;
  }
};
