import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getArticles = createAsyncThunk (
    'article/getArticles',
    async () => {
        const response = await axios.get(`http://localhost:4000/articles`);
        return response.data;
    }
)

const initialState = {
    articles: [],
    loading: false,
    error: false
}

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: {
        [getArticles.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getArticles.fulfilled]: (state, action) => {
            state.articles = action.payload;
            state.loading = false;
        },
        [getArticles.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
});

// export const { } = articleSlice.actions;

export const articleSelector = state => state.article.articles;

export default articleSlice.reducer;