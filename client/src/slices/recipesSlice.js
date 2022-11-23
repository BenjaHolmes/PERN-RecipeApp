import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRecipes = createAsyncThunk(
    'recipes/getRecipes',
    async () => {
        const response = await axios.get("http://localhost:4000/recipes/all");
        return response.data;
    }
)

 const initialState = {
    recipes: [],
    // Think i will need a second state for sorted recipes to
    // make the Sortby Bar work without deleting all recipes
    recipesToSort: [],
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
            state.recipesToSort = [...state.recipes];
            switch(state.searchParameter) {
                case 'All Recipes':
                    state.recipesToSort = [...state.recipes];
                    break;
                case 'Meat':
                    const meatRecipes = state.recipesToSort.filter(recipes => recipes.contains_meat === true);
                    state.recipesToSort = meatRecipes;
                    break;
                case 'Fish':
                    const fishRecipes = state.recipesToSort.filter(recipes => recipes.contains_fish === true);
                    state.recipesToSort = fishRecipes;
                    break;
                case 'Gluten Free':
                    const gfRecipes = state.recipesToSort.filter(recipes => recipes.contains_gluten === false);
                    state.recipesToSort = gfRecipes;
                    break;
                case 'Alcohol':
                    const alcoholRecipes = state.recipesToSort.filter(recipes => recipes.contains_alcohol === true);
                    state.recipesToSort = alcoholRecipes;
                    break;
                case 'Vegan':
                    const veganRecipes = state.recipesToSort.filter(recipes => recipes.is_vegan === true);
                    state.recipesToSort = veganRecipes;
                    break;
                default:
                    state.recipesToSort = [...state.recipes];

            }
        }
    }, extraReducers: {
        [getRecipes.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getRecipes.fulfilled]: (state, action) => {
            state.recipes = action.payload;
            state.recipesToSort = action.payload;
            state.loading = false;
        },
        [getRecipes.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
});

export const { setRecipes, setSearchParameter } = recipesSlice.actions;
export const recipesSelector = state => state.recipes.recipesToSort;
export const searchParameterSelector = state => state.recipes.searchParameter;

export default recipesSlice.reducer;