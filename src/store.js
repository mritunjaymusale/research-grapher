import { createStore, combineReducers } from "redux";
import watch from "redux-watch";
import { fetchPaperDetailsFromAPI } from "./Components/APIHandler";
import { JSONGraphProcessor } from "./Components/Graph/GraphDataProcessor";
import { graphReducer, arxivReducer } from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({ graphReducer, arxivReducer }),
  // remove this in prod build
  composeWithDevTools()
);

// after id is changed update the paper
let id_watcher = watch(store.getState, "arxivReducer.id");
store.subscribe(
  id_watcher((newVal, oldVal, objectPath) => {
    if (newVal !== oldVal) {
      fetchPaperDetailsFromAPI(newVal).then((result) => {
        store.dispatch({
          type: "UPDATE_ARXIV_PAPER",
          paper: result,
        });
      });
    }
  })
);

// after paper is updated, update graph to include data of papers
let paper_watcher = watch(store.getState, "arxivReducer.paper");
store.subscribe(
  paper_watcher((newVal, oldVal, objectPath) => {
    if (newVal !== oldVal) {
      const { citations, references, ...data } = newVal;
      JSONGraphProcessor.updateStoreGraph(data, citations, references);
    }
  })
);
