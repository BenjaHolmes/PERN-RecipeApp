import React from 'react';
import { getRecipeById,
    getRecipesIngredients, 
    chosenRecipeSelector, 
    chosenRecipeInfoSelector, 
    chosenRecipeIngredientsSelector } from '../../slices/recipesSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import like from '../memberArea/like.png';
import dislike from '../memberArea/dislike.png';
import { authenticationSelector } from '../../slices/authSlice';
import { getComments, mainCommentsSelector } from '../../slices/commentSlice';
import IngredientList from './ingredientList';
import Comment from '../comments/comment';
import './recipeDetailsPage.css';

const RecipeDetailsPage = () => {

    const dispatch = useDispatch();
    const recipeId = useSelector(chosenRecipeSelector);
    const recipeInfo = useSelector(chosenRecipeInfoSelector);
    const recipeIngredients = useSelector(chosenRecipeIngredientsSelector);
    const isAuthenticated = useSelector(authenticationSelector);
    const mainComments = useSelector(mainCommentsSelector);
    const imgPath = `/RecipeImgs/${recipeInfo.picture_id}.jpg`;

    useEffect(() => {
        dispatch(getRecipeById(recipeId));
        dispatch(getRecipesIngredients(recipeId));
        dispatch(getComments(recipeId));
        // window.scrollTo(0, 0);
    }, [dispatch, recipeId])

    return (
        <div className='recipeInfoBox'>
            <div className='topInfo'>
                <h1> {recipeInfo.name} </h1>
                <img src={imgPath} alt='' />
            </div>
            <div className='likeBox'>
                <div className='likes'>
                    <img src={like} alt="A Thumbs Up Icon for Likes" />
                    <p> Likes </p>
                    <p className='num'> {recipeInfo.number_of_likes} </p>
                </div> 
                <div className='dislikes'>
                    <img src={dislike} alt="A Thumbs Down Icon for Dislikes" />
                    <p> Dislikes </p>
                    <p className='num'> {recipeInfo.number_of_dislikes} </p>
                </div> 
            </div>
            {/* Retreiving Ingredient Data for selected recipe and then mapping the data to make a list */}
            <div className='ingredientInfo'>
                <h2> Ingredients </h2>
                <div className='ingredientList'>
                    {recipeIngredients != null ? 
                     recipeIngredients.map((ingredient, index) => <IngredientList key={index} 
                     name={ingredient.name} quantity={ingredient.quantity} /> )
                    : <p> Ingredients Couldn't be Loaded. Please Try Again. </p>}
                </div> 
            </div>
            <div className='methodInfo'>
                <h2> Method </h2>
                <div className='methodList'>
                    <ul>
                        <li>
                            {recipeInfo.step_1}
                        </li>
                        <li>
                            {recipeInfo.step_2}
                        </li>
                        <li>
                            {recipeInfo.step_3}
                        </li>
                        <li>
                            {recipeInfo.step_4}
                        </li>
                        <li>
                            {recipeInfo.step_5}
                        </li>
                        <li>
                            {recipeInfo.step_6}
                        </li>
                        <li>
                            {recipeInfo.step_7}
                        </li>
                        <li>
                            {recipeInfo.step_8}
                        </li>
                        <li>
                            {recipeInfo.step_9}
                        </li>
                        <li>
                            {recipeInfo.step_10}
                        </li>
                    </ul>
                </div>
                <div className='commentInfo'>
                    <h2> Comments </h2>
                    {/* Fetch Comment List and then Map over it */}
                    <div className='commentList'>
                        <div className='newCommentForm'>
                            { isAuthenticated === false ? 
                            <div>
                                <textarea disabled > </textarea>
                                <button disabled className='postComment'> Post Comment </button>
                                <p className='unAuthTxt'> Please Log in to Comment </p>
                            </div>
                            :
                            <div>
                                <textarea> Add a Comment.. </textarea>
                                <button className='postComment'> Post Comment </button>
                            </div>
                            }
                            { mainComments != null ? mainComments.map((comment, index) => {
                                return <Comment key={index} userId={comment.user_id} recipeId={comment.recipe_id}
                                body={comment.body} author={comment.author} id={comment.id} />
                            }) : '' }
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetailsPage;
