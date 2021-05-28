import { configureStore } from "@reduxjs/toolkit";
import LoadedPaperSlice from "./LoadedPaperSlice";
import paperInputSliceReducer from "./paperInputSlice";
import {
  onLoadedPaperChanged,
  onPaperInputChange,
} from "./StateChangeListeners";

const ReduxStateChangeListener = require("redux-state-change-listener");

const store = configureStore({
  reducer: {
    paperInput: paperInputSliceReducer,
    loadedPaper: LoadedPaperSlice,
  },
});

const stateCallbackManager = new ReduxStateChangeListener(store);

stateCallbackManager.register((state) => state.paperInput, onPaperInputChange);
stateCallbackManager.register(
  (state) => state.loadedPaper,
  onLoadedPaperChanged
);

stateCallbackManager.start();

export default store;
