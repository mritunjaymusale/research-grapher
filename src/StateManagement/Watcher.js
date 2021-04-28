import watch from "redux-watch";
import { fetchPaperDetailsFromAPI } from "../Components/APIHandler";
import { JSONGraphProcessor } from "../Components/Graph/GraphDataProcessor";
import { store } from "./store";
import M from "materialize-css";

export const startArxivIdWatcher = () => {
  // after id is changed update the paper
  let id_watcher = watch(store.getState, "paperReducer.id");
  store.subscribe(
    id_watcher((newVal, oldVal, objectPath) => {
      if (newVal !== oldVal) {
        loadPaperFromApi(newVal);
      }
    })
  );
};

export const startPaperWatcher = () => {
  // after paper is updated, update graph to include data of papers
  let paper_watcher = watch(store.getState, "paperReducer.paper");
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

function loadPaperFromApi(paperId) {
  fetchPaperDetailsFromAPI(paperId).then((result) => {
    if (result === undefined) {
    } else if (result.url) {
      store.dispatch({
        type: "SEND_TOAST",
        toast: "Loading paper please wait",
      });
      store.dispatch({
        type: "UPDATE_PAPER",
        paper: result,
      });
    } else if (result.error) {
      //  if the api doesn't have a paper with that id toss this prompt
      store.dispatch({
        type: "SEND_TOAST",
        toast: result.error,
      });
    } else {
      store.dispatch({
        type: "SEND_TOAST",
        toast: "The paper ID seems appreas to be wrong",
      });
    }
  });
}
