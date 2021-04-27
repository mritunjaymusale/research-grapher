import { createStore, combineReducers } from "redux";
import {
  graphReducer,
  arxivReducer,
  toastReducer,
  paperReducer,
  doiReducer,
} from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  startArxivIdWatcher,
  startPaperWatcher,
  startToastWatcher,
} from "./Watcher";

export const store = createStore(
  combineReducers({
    graphReducer,
    arxivReducer,
    toastReducer,
    paperReducer,
    doiReducer,
  }),
  // remove this in prod build
  composeWithDevTools()
);

startArxivIdWatcher();
startPaperWatcher();
startToastWatcher();
