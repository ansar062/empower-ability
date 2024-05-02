import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logoutUser: (state) => {
            state.loading = false;
            state.currentUser = null;
        }
    }
});


export const {signInFailure, signInStart, signInSuccess, logoutUser} = authSlice.actions;

export default authSlice.reducer;