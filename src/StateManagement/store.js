import { createStore, combineReducers } from "redux";
import { graphReducer, arxivReducer } from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { startArxivIdWatcher, startPaperWatcher } from "./Watcher";

export const store = createStore(
  combineReducers({ graphReducer, arxivReducer }),
  // remove this in prod build
  composeWithDevTools()
);

startArxivIdWatcher();
startPaperWatcher();
