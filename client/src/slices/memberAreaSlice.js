import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMembersRecipes = createAsyncThunk(
    'memberArea/getMembersRecipes',
    async (id) => {
        const response = await axios.get(`http://localhost:4000/members/${id}`);
        return response.data;
    }
)
export const deleteMembersRecipe = createAsyncThunk(
    'memberArea/deleteMembersRecipe',
    async (id) => {
        const response = await axios.delete(`http://localhost:4000/members/${id}`);
        return response.data;
    }
)

const initialState = {
    idForDeletion: '',
    membersRecipes: [],
    formPage: 1,
    
}

const memberAreaSlice = createSlice({
    name: 'memberArea',
    initialState,
    reducers: {
        setItemForDeletion(state, action) {
            state.idForDeletion = action.payload;
        },
        incrementFormPage(state) {
            state.formPage++
        },
        decrementFormPage(state) {
            state.formPage--
        },
        setFormPage(state, action) {
            state.formPage = action.payload;
        }
    }, extraReducers: {
        [getMembersRecipes.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getMembersRecipes.fulfilled]: (state, action) => {
            state.membersRecipes = action.payload;            
            state.loading = false;
        },
        [getMembersRecipes.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }, [deleteMembersRecipe.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [deleteMembersRecipe.fulfilled]: (state) => {
            let filteredMembersRecipes = state.membersRecipes.filter(
                recipe => recipe.id !== state.idForDeletion);
            state.membersRecipes = filteredMembersRecipes;
            state.idForDeletion = null;          
            state.loading = false;
        },
        [deleteMembersRecipe.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
});

export const { togglePopup, 
    setItemForDeletion, 
    incrementFormPage, 
    decrementFormPage, 
    setFormPage } = memberAreaSlice.actions;
export const membersRecipesSelector = state => state.memberArea.membersRecipes;
export const idForDeletionSelector = state => state.memberArea.idForDeletion;
export const formPageSelector = state => state.memberArea.formPage;

export default memberAreaSlice.reducer;