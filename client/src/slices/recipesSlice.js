import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRecipes = createAsyncThunk(
    'recipes/getRecipes',
    async () => {
        const response = axios.get("http://localhost:4000/recipes")
        return (await response).data;
    }
)

 const initialState = {
    recipes: [],
    loading: false,
    error: null,
    searchParameter: 'All Recipes'
}

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes(state, action) {
            state.recipes = action.payload;
        },
        setSearchParameter(state, action) {
            state.searchParameter = action.payload;
        }
    }, extraReducers: {
        [getRecipes.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getRecipes.fulfilled]: (state, action) => {
            state.recipes = action.payload;
            state.loading = false;
        },
        [getRecipes.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
});

export const { setRecipes, setSearchParameter } = recipesSlice.actions;
export const recipesSelector = state => state.recipes.recipes;
export const searchParameterSelector = state => state.recipes.searchParameter;

export default recipesSlice.reducer;