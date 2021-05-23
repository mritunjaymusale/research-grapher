import { createSlice } from '@reduxjs/toolkit'


export const initialState = {
    paper: null,
    success: false,
    isLoading: false
}




const LoadPaperSlice = createSlice({
    name: 'loadPaper',
    initialState,
    reducers: {
        loadPaper: (state, actions) => {

            return {
                ...state,
                paper: actions.payload.paper,
                success: actions.payload.success,
                isLoading: actions.payload.isLoading

            }
        }
    },

})

export const { loadPaper } = LoadPaperSlice.actions


export default LoadPaperSlice.reducer