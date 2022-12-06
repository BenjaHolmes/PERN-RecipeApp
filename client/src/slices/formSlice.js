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
        ingredients: [],
        method: []
    }
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
        }
    }, extraReducers: {
        [getAllIngredients.pending]: (state, action) => {
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
        [addIngredient.pending]: (state, action) => {
            state.loading = true;
            state.ingredientAddSuccess = 'loading';
            state.error = null;
        },
        [addIngredient.fulfilled]: (state, action) => {
            state.ingredientToAdd = '';
            state.ingredientAddSuccess = true;
            state.loading = false;            
        },
        [addIngredient.rejected]: (state, action) => {
            state.error = action.error.message;
            state.ingredientAddSuccess = false;
            state.loading = false;
        }
    }
});

export const { setNewIngredient, toggleForm } = formSlice.actions;

export const sortedIngredientListSelector = state => state.form.sortedIngredients;
export const newIngredientSelector = state => state.form.ingredientToAdd;
export const formOpenSelector = state => state.form.showForm;
export const ingredientAddSuccessSelector = state => state.form.ingredientAddSuccess;


export default formSlice.reducer;