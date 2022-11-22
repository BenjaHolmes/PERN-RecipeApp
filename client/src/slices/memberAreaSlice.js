import { createSlice } from '@reduxjs/toolkit';


 const initialState = {
    showPopup: false,
    idForDeletion: '',
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
}

const memberAreaSlice = createSlice({
    name: 'memberArea',
    initialState,
    reducers: {
        togglePopup(state) {
            state.showPopup = !state.showPopup;
        },
        setItemForDeletion(state, action) {
            state.idForDeletion = action.payload;
        },
        // logInToggle(state) {
        //     state.logInOpen = !state.logInOpen;
        // }
    }
});

export const { togglePopup, setItemForDeletion } = memberAreaSlice.actions;
// export const themeSelector = state => state.header.lightThemeOn;
// export const menuSelector = state => state.header.menuOpen;
// export const logInSelector = state => state.header.logInOpen;
export default memberAreaSlice.reducer;