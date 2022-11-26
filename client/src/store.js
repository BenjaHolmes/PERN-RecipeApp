import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './slices/headerSlice';
import authReducer from './slices/authSlice';
import recipesReducer from './slices/recipesSlice';
import memberAreaReducer from './slices/memberAreaSlice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
        auth: authReducer,
        recipes: recipesReducer,
        memberArea: memberAreaReducer
            }
});