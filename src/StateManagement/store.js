import { createStore, combineReducers } from "redux";
import { graphReducer, arxivReducer, toastReducer } from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  startArxivIdWatcher,
  startPaperWatcher,
  startToastWatcher,
} from "./Watcher";

export const store = createStore(
  combineReducers({ graphReducer, arxivReducer, toastReducer }),
  // remove this in prod build
  composeWithDevTools()
);

startArxivIdWatcher();
startPaperWatcher();
startToastWatcher();
