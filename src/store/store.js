import { configureStore } from '@reduxjs/toolkit'
import LoadPaperSlice from './LoadPaperSlice'
import paperInputSliceReducer from './paperInputSlice'
import { onPaperInputChange } from './StateListeners';


const ReduxStateChangeListener = require('redux-state-change-listener');



const store = configureStore({
    reducer: {
        paperInput: paperInputSliceReducer,
        loadPaper: LoadPaperSlice
    },
})

const stateCallbackManager = new ReduxStateChangeListener(store);



stateCallbackManager.register(state => state.paperInput, onPaperInputChange);

stateCallbackManager.start();

export default store
