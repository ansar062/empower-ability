import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: false,
}

const postBlogSlice = createSlice({
    name: 'postblog',
    initialState,
    reducers:{
        postStart: (state) => {
            state.loading = true;
        },
        postSuccess: (state) => {
            state.loading = false;
            state.error = false;
        },
        postFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        
    }
});


export const {postStart, postFail, postSuccess} = postBlogSlice.actions;

export default postBlogSlice.reducer;