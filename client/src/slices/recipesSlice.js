import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRecipes = createAsyncThunk(
    'recipes/getRecipes',
    async () => {
        const response = await axios.get("http://localhost:4000/recipes/all");
        return response.data;
    }
);

export const getRecipeById = createAsyncThunk(
    'recipes/getRecipeById',
    async (id) => {
        const response = await axios.get(`http://localhost:4000/recipes/${id}`);
        return response.data;
    }
);

export const getRecipesIngredients = createAsyncThunk(
    'recipes/getRecipesIngredients',
    async (id) => {
        const response = await axios.get(`http://localhost:4000/ingredients/${id}`);
        return response.data;
    }
);

 const initialState = {
    recipes: [],
    // Second Recipe State holds the sorted list, so that we maintain the full list in the first piece of state.
    recipesToSort: [],
    chosenRecipeId: 0,
    chosenRecipe: [{
        id: 0,
        name: '',
        number_of_likes: 0,
        number_of_dislikes: 0,
        created_by_user: 0,
        picture_id: 0,
        recipe_id: 0,
        contains_meat: false,
        contains_fish: false,
        contains_alcohol: false,
        contains_gluten: false,
        is_vegan: false,
        step_1: '',
        step_2: '',
        step_3: '',
        step_4: '',
        step_5: '',
        step_6: '',
        step_7: '',
        step_8: '',
        step_9: '',
        step_10: '',
    }],
    chosenRecipeIngredients: [],
    searchParameter: 'All Recipes',
    loading: false,
    error: null
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
            };
        },
        setChosenRecipe(state, action) {
            state.chosenRecipeId = action.payload;
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
        }, 
        [getRecipeById.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getRecipeById.fulfilled]: (state, action) => {
            state.chosenRecipe = action.payload[0];
            state.loading = false;
        },
        [getRecipeById.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }, 
        [getRecipesIngredients.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getRecipesIngredients.fulfilled]: (state, action) => {
            state.chosenRecipeIngredients = action.payload;
            state.loading = false;
        },
        [getRecipesIngredients.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
});

export const { setRecipes, setSearchParameter, setChosenRecipe } = recipesSlice.actions;
export const recipesSelector = state => state.recipes.recipesToSort;
export const searchParameterSelector = state => state.recipes.searchParameter;
export const chosenRecipeSelector = state => state.recipes.chosenRecipeId;
export const chosenRecipeInfoSelector = state => state.recipes.chosenRecipe;
export const chosenRecipeIngredientsSelector = state => state.recipes.chosenRecipeIngredients;

export default recipesSlice.reducer;