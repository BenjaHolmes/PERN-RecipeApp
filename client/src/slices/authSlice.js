import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
    "auth/register",
    async (authData) => {
        const response = axios.post("http://localhost:4000/auth/register", {
            username: authData.username,
            email: authData.email,
            password: authData.password
        }, { withCredentials: true });
        return (await response).data;
    }
)

export const logInUser = createAsyncThunk(
    'auth/logIn',
    async (authData) => {
        const response = axios.post("http://localhost:4000/auth/login", {
            username: authData.username,
            password: authData.password
        }, { withCredentials: true });
        return (await response).data;
        }
)

export const logOutUser = createAsyncThunk(
    'auth/logout',
    async () => {
        const response = axios.get("http://localhost:4000/auth/logout", 
        { withCredentials: true });
        return (await response).data;
    }
)

export const getUser = createAsyncThunk(
    'auth/getUser',
    async () => {
        const response = axios.get("http://localhost:4000/auth/getUser", 
        { withCredentials: true });
        return (await response).data;
    }
)

const initialState = {
    logInUsername: '',
    logInPassword: '',
    registerUsername: '',
    registerEmail: '',
    registerPassword: '',
    isAuthorised: false,
    user: {},
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogInUsername(state, action) {
            state.logInUsername = action.payload;
        },
        setLogInPassword(state, action) {
            state.logInPassword = action.payload;
        },
        setRegisterUsername(state, action) {
            state.registerUsername = action.payload;
        },
        setRegisterEmail(state, action) {
            state.registerEmail = action.payload;
        },
        setRegisterPassword(state, action) {
            state.registerPassword = action.payload;
        }
    }, extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isAuthorised = true;
            state.user = action.payload;
            state.registerEmail = '';
            state.registerUsername = '';
            state.registerPassword = '';
            state.loading = false;
        },
        [registerUser.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }, 
        [logInUser.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [logInUser.fulfilled]: (state, action) => {
            state.isAuthorised = true;
            state.user = action.payload;
            state.loading = false;
        },
        [logInUser.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }, 
        [getUser.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
        [getUser.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }, 
        [logOutUser.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [logOutUser.fulfilled]: (state, action) => {
            state.isAuthorised = false;
            state.user = {};
            state.loading = false;
        },
        [logOutUser.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
});

export const { 
    setLogInUsername, 
    setLogInPassword, 
    setRegisterUsername, 
    setRegisterEmail, 
    setRegisterPassword
} = authSlice.actions;

export const userIDSelector = state => state.auth.user.id;
export const usernameSelector = state => state.auth.user.username;
export const logInUsernameSelector = state => state.auth.logInUsername;
export const logInPasswordSelector = state => state.auth.logInPassword;
export const registerUsernameSelector = state => state.auth.registerUsername;
export const registerEmailSelector = state => state.auth.registerEmail;
export const registerPasswordSelector = state => state.auth.registerPassword;

export default authSlice.reducer;