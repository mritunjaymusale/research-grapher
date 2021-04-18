import { createStore,combineReducers } from "redux";
import { graphReducer } from "./Reducers";

export const store = createStore(combineReducers({graphReducer}));
