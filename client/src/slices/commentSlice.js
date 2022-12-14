import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


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
        
export const postComment = createAsyncThunk(
    'comment/postComment',
    async (data) => {
        const response = await axios.post(`http://localhost:4000/comments/post`, {
            comment: data.comment,
            recipe_id: data.recipe_id,
            user_id: data.user_id
        }, { withCredentials: true });
        return response.data;
    }
)

export const deleteComment = createAsyncThunk(
    'comment/deleteComment',
    async (commentId) => {
        const response = await axios.delete(`http://localhost:4000/comments/${commentId}`);
        return response.data;
    }
)

export const postSubcomment = createAsyncThunk(
    'comment/createSubcomment',
    async(data) => {
        const response = await axios.post(`http://localhost:4000/comments/sub`, {
            comment_body: data.comment_body,
            main_comment_id: data.main_comment_id,
            user_id: data.user_id,
            recipe_id: data.recipe_id
        });
        return response.data;
    }
)

export const deleteSubcomment = createAsyncThunk(
    'comment/deleteSubcomment',
    async(subCommentId) => {
        const response = await axios.delete(`http://localhost:4000/comments/sub/${subCommentId}`);
        return response.data;
    }
)
            
const initialState = {
    newCommentBody: '',
    newSubCommentBody: '',
    mainComments: [],
    subComments: [],
    idForDeletion: [],
    idForReply: '',
    loading: false,
    error: null
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        setNewCommentBody(state, action) {
            state.newCommentBody = action.payload;
        },
        setNewSubcommentBody(state, action) {
            state.newSubCommentBody = action.payload;
        },
        setCommentForDeletion(state, action) {
            state.idForDeletion = action.payload;
        },
        setIdForReply (state, action) {
            state.idForReply = action.payload;
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
                    user_id: subcomment.user_id,
                    body: subcomment.body,
                    subcommentId: subcomment.subcomment_id,
                    recipeId: subcomment.recipe_id
                })
            })
            
        },
        [getSubcomments.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }, 
        [postComment.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [postComment.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [postComment.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }, 
        [deleteComment.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [deleteComment.fulfilled]: (state, action) => {
            state.loading = false;
            let filteredComments = state.mainComments.filter(
                comments => comments.id !== state.idForDeletion);
            state.mainComments = filteredComments;            
        },
        [deleteComment.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }, 
        [postSubcomment.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [postSubcomment.fulfilled]: (state) => {
            state.loading = false;
        },
        [postSubcomment.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }, 
        [deleteSubcomment.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [deleteSubcomment.fulfilled]: (state) => {
            state.loading = false;
        },
        [deleteSubcomment.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
}});

export const { setNewCommentBody, setCommentForDeletion, setIdForReply, setNewSubcommentBody } = commentSlice.actions;

export const mainCommentsSelector = state => state.comment.mainComments;
export const subCommentsSelector = state => state.comment.subComments;
export const newCommentBodySelector = state => state.comment.newCommentBody;
export const idForReplySelector = state => state.comment.idForReply;
export const replyBodySelector = state => state.comment.newSubCommentBody

export default commentSlice.reducer;