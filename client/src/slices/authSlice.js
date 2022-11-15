import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const registerUser = createAsyncThunk(
    'auth/register',
    async (authData) => {
        try {
            const data = {
                username: authData.username,
                email: authData.email,
                password: authData.password
            }
            const response = await fetch("http://localhost:4000/auth/register", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return response.json();
        
    } catch (err) {
        throw Error(err);
    }
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
}

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
            state.loading = false;
        },
        [registerUser.rejected]: (state, action) => {
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

export const logInUsernameSelector = state => state.auth.logInUsername;
export const logInPasswordSelector = state => state.auth.logInPassword;
export const registerUsernameSelector = state => state.auth.registerUsername;
export const registerEmailSelector = state => state.auth.registerEmail;
export const registerPasswordSelector = state => state.auth.registerPassword;

export default authSlice.reducer;