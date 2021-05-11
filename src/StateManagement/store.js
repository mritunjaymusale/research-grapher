import { createStore, combineReducers } from "redux";
import { graphReducer, toastReducer, paperReducer } from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  startArxivIdWatcher,
  startPaperWatcher,
  startToastWatcher,
} from "./Watcher";

export const store = createStore(
  combineReducers({
    graphReducer,

    toastReducer,
    paperReducer,
  }),
  // remove this in prod build
  composeWithDevTools()
);

startArxivIdWatcher();
startPaperWatcher();
startToastWatcher();