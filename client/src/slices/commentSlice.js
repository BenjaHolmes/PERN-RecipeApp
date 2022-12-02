import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const addComment = createAsyncThunk
// const addSubComment = createAsyncThunk
// const deleteComment = createAsyncThunk
// const deleteSubComment = createAsyncThunk

export const getComments = createAsyncThunk(
    'comment/getComments',
    async (recipeid) => {
        const response = await axios.get(`http://localhost:4000/comments/${recipeid}`);
        return response.data;
    }
    )
    
export const getSubcomments = createAsyncThunk(
    'comment/getSubcomments',
    async (recipeid) => {
        const response = await axios.get(`http://localhost:4000/comments/sub/${recipeid}`);
        return response.data;
    }
)

const initialState = {
    newCommentBody: '',
    mainComments: [],
    subComments: [],
    loading: false,
    error: null
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        setNewCommentBody(state, action) {
            state.newCommentBody = action.payload;
        }
    }, extraReducers: {
        [getComments.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getComments.fulfilled]: (state, action) => {
            state.loading = false;
            state.mainComments = action.payload.map(comment => {
                return({
                    id: comment.comment_id,
                    user_id: comment.user_id,
                    recipe_id: comment.recipe_id,
                    body: comment.body,
                    author: comment.username
                })
            })
        },
        [getComments.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }, 
        [getSubcomments.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getSubcomments.fulfilled]: (state, action) => {
            state.loading = false;
            state.subComments = action.payload.map(subcomment => {
                return({
                    main_comment_id: subcomment.main_comment_id,
                    author: subcomment.username,
                    body: subcomment.body,
                    subcommentId: subcomment.id,
                    recipeId: subcomment.recipe_id
                })
            })
            
        },
        [getSubcomments.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
}});

export const { setNewCommentBody } = commentSlice.actions;

export const mainCommentsSelector = state => state.comment.mainComments;
export const subCommentsSelector = state => state.comment.subComments;


export default commentSlice.reducer;