import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    lightThemeOn: 'Light',
    menuOpen: false,
    logInOpen: false
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        themeToggle(state, action) {
            state.lightThemeOn = action.payload;
        },
        menuToggle(state) {
            state.menuOpen = !state.menuOpen;
        },
        logInToggle(state) {
            state.logInOpen = !state.logInOpen;
        }
    }
});

export const { themeToggle, menuToggle, logInToggle } = headerSlice.actions;
export const themeSelector = state => state.header.lightThemeOn;
export const menuSelector = state => state.header.menuOpen;
export const logInSelector = state => state.header.logInOpen;
export default headerSlice.reducer;