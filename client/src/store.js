import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './slices/headerSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
        auth: authReducer
            }
});