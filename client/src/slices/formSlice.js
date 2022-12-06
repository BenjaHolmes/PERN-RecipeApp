import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllIngredients = createAsyncThunk(
    'form/getAllIngredients',
    async() => {
        const response = await axios.get(`http://localhost:4000/ingredients`);
        return response.data;
    }
    )
    
    export const addIngredient = createAsyncThunk(
        'form/addIngredient',
        async(ingredientData) => {
            const response = await axios.post(`http://localhost:4000/ingredients`, {
                ingredientName: ingredientData.name
            });
            return response.data
    }
)

export const addNewRecipe = createAsyncThunk(
    'form/addRecipe',
    async(data) => {
        const response = await axios.post(`http://localhost:4000/recipes`, {
            name: data.name,
            created_by_user: data.userId,
        });
        return response.data;
    }
)

export const addNewRecipeIngredient = createAsyncThunk(
    'form/addRecipeIngredient',
    async(data) => {
        const response = await axios.post(`http://localhost:4000/recipes/ingredients`, {
            name: data.name,
            created_by_user: data.created_by_user,
            ingredient_id: data.ingredient_id,
            quantity: data.quantity
        });
        return response.data;
    }
)

export const addNewRecipeSteps = createAsyncThunk(
    'form/addSteps',
    async(data) => {
        const response = await axios.post(`http://localhost:4000/recipes/steps`, {
            name: data.name,
            created_by_user: data.created_by_user,
            step_1: data.step_1,
            step_2: data.step_2,
            step_3: data.step_3,
            step_4: data.step_4,
            step_5: data.step_5,
            step_6: data.step_6,
            step_7: data.step_7,
            step_8: data.step_8,
            step_9: data.step_9,
            step_10: data.step_10
        });
        return response.data;
    }
)

export const addNewRecipeAllergens = createAsyncThunk(
    'form/addAllergens',
    async(data) => {
        const response = await axios.post(`http://localhost:4000/recipes/allergens`, {
            name: data.name,
            created_by_user: data.created_by_user,
            meat: data.meat,
            fish: data.fish,
            alcohol: data.alcohol,
            gluten: data.gluten,
            vegan: data.vegan
        });
        return response.data;
    }
)

const initialState = {
    showForm: false,
    ingredients: [],
    sortedIngredients: [],
    ingredientToAdd: '',
    ingredientAddSuccess: false,
    recipeToAdd:  {
        name: '',
        fish: false,
        meat: false,
        gluten: false,
        vegan: false,
        alcohol: false,
        step_1: '',
        step_2: '',
        step_3: '',
        step_4: '',
        step_5: '',
        step_6: '',
        step_7: '',
        step_8: '',
        step_9: '',
        step_10: ''
    },
    recipeToAddIngredients: [{
        ingredient_id: '',
        quantity: ''
    }, {
        ingredient_id: '',
        quantity: ''
    }, {
        ingredient_id: '',
        quantity: ''
    }, {
        ingredient_id: '',
        quantity: ''
    }, {
        ingredient_id: '',
        quantity: ''
    }, {
        ingredient_id: '',
        quantity: ''
    }, {
        ingredient_id: '',
        quantity: ''
    }, {
        ingredient_id: '',
        quantity: ''
    }, {
        ingredient_id: '',
        quantity: ''
    }, {
        ingredient_id: '',
        quantity: ''
    }
    ], 
    loading: false,
    error: null
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setNewIngredient(state, action) {
            state.ingredientToAdd = action.payload;
        },
        toggleForm(state) {
            state.showForm = !state.showForm;
        },
        setRecipeName(state, action) {
            state.recipeToAdd.name = action.payload;
        },
        addToIngredients(state, action) {
            state.recipeToAddIngredients[action.payload.position].ingredient_id = action.payload.ingredient_id;
        },
        addToQuantity(state, action) {
            state.recipeToAddIngredients[action.payload.position].quantity = action.payload.quantity;
        },
        addMethodStep(state, action) {
            switch(action.payload.stepNum) {
                case 1:
                    state.recipeToAdd.step_1 = action.payload.stepBody;
                    break;
                case 2:
                    state.recipeToAdd.step_2 = action.payload.stepBody;
                    break;
                case 3:
                    state.recipeToAdd.step_3 = action.payload.stepBody;
                    break;
                case 4:
                    state.recipeToAdd.step_4 = action.payload.stepBody;
                    break;
                case 5:
                    state.recipeToAdd.step_5 = action.payload.stepBody;
                    break;
                case 6:
                    state.recipeToAdd.step_6 = action.payload.stepBody;
                    break;
                case 7:
                    state.recipeToAdd.step_7 = action.payload.stepBody;
                    break;
                case 8:
                    state.recipeToAdd.step_8 = action.payload.stepBody;
                    break;
                case 9:
                    state.recipeToAdd.step_9 = action.payload.stepBody;
                    break;
                case 10:
                    state.recipeToAdd.step_10 = action.payload.stepBody;
                    break;
                default:
                    state.error.message = 'Failed to add Step'
            }
        },
        toggleAllergen(state, action) {
            switch(action.payload) {
                case 'Meat':
                    state.recipeToAdd.meat = !state.recipeToAdd.meat;
                    break;
                case 'Fish':
                    state.recipeToAdd.fish = !state.recipeToAdd.fish;
                    break;
                case 'Alcohol':
                    state.recipeToAdd.alcohol = !state.recipeToAdd.alcohol;
                    break;
                case 'Gluten':
                    state.recipeToAdd.gluten = !state.recipeToAdd.gluten;
                    break;
                case 'Vegan':
                    state.recipeToAdd.vegan = !state.recipeToAdd.vegan;
                    break;
                default:
                    state.error.message = 'Failed to Toggle Allergy'
            }
        }
    }, extraReducers: {
        [getAllIngredients.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getAllIngredients.fulfilled]: (state, action) => {
            state.ingredients = action.payload;
            state.sortedIngredients = state.ingredients.sort(function(a, b) {
                if(a.name.toLowerCase() < b.name.toLowerCase()
                    ) return -1; 
                if (a.name.toLowerCase() > b.name.toLowerCase()
                    ) return 1;
                return 0;
            })
                       
            state.sortedIngredients.unshift({ id: null, name: 'None Selected'});
            state.loading = false;
        },
        [getAllIngredients.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [addIngredient.pending]: (state) => {
            state.loading = true;
            state.ingredientAddSuccess = 'loading';
            state.error = null;
        },
        [addIngredient.fulfilled]: (state) => {
            state.ingredientToAdd = '';
            state.ingredientAddSuccess = true;
            state.loading = false;            
        },
        [addIngredient.rejected]: (state, action) => {
            state.error = action.error.message;
            state.ingredientAddSuccess = false;
            state.loading = false;
        },
        [addNewRecipe.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [addNewRecipe.fulfilled]: (state, action) => {
            state.loading = false;            
        },
        [addNewRecipe.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [addNewRecipeIngredient.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [addNewRecipeIngredient.fulfilled]: (state, action) => {
            state.loading = false;            
        },
        [addNewRecipeIngredient.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [addNewRecipeSteps.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [addNewRecipeSteps.fulfilled]: (state, action) => {
            state.loading = false;            
        },
        [addNewRecipeSteps.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [addNewRecipeAllergens.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [addNewRecipeAllergens.fulfilled]: (state, action) => {
            state.loading = false;            
        },
        [addNewRecipeAllergens.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
});

export const { 
    setNewIngredient, 
    toggleForm, 
    setRecipeName, 
    addToIngredients, 
    addToQuantity, 
    addMethodStep,
    toggleAllergen
} = formSlice.actions;

export const sortedIngredientListSelector = state => state.form.sortedIngredients;
export const newIngredientSelector = state => state.form.ingredientToAdd;
export const formOpenSelector = state => state.form.showForm;
export const ingredientAddSuccessSelector = state => state.form.ingredientAddSuccess;

export const newRecipeNameSelector = state => state.form.recipeToAdd.name;
export const newRecipeIdSelector = state => state.form.recipeToAdd.newId;
export const newRecipeIngredientList = state => state.form.recipeToAddIngredients;
export const newRecipeSelector = state => state.form.recipeToAdd;


export default formSlice.reducer;