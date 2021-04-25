import watch from "redux-watch";
import { fetchPaperDetailsFromAPI } from "../Components/APIHandler";
import { JSONGraphProcessor } from "../Components/Graph/GraphDataProcessor";
import { store } from "./store";
import M from "materialize-css";

export const startArxivIdWatcher = () => {
  // after id is changed update the paper
  let id_watcher = watch(store.getState, "arxivReducer.id");
  store.subscribe(
    id_watcher((newVal, oldVal, objectPath) => {
      if (newVal !== oldVal) {
        fetchPaperDetailsFromAPI(newVal).then((result) => {
          if (result === undefined) {
          } else if (result.abstract) {
            store.dispatch({
              type: "UPDATE_ARXIV_PAPER",
              paper: result,
            });
            store.dispatch({
              type: "SEND_TOAST",
              toast: "Loading paper please wait",
            });
          } else {
            store.dispatch({
              type: "SEND_TOAST",
              toast: "The paper ID seems appreas to be wrong",
            });
          }
        });
      }
    })
  );
};

export const startPaperWatcher = () => {
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
};

export const startToastWatcher = () => {
  // fires after toast is updated
  let toast_watcher = watch(store.getState, "toastReducer.toast");
  store.subscribe(
    toast_watcher((newVal, oldVal, objectPath) => {
      if (newVal !== oldVal) {
        M.toast({ html: newVal });
      }
    })
  );
};
