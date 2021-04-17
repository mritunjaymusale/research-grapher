import { createStore } from "redux";
import { graphReducer } from "./Reducer";

export const store = createStore(graphReducer);
