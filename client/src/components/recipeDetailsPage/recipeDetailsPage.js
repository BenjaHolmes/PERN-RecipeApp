import React from 'react';
import { getRecipeById,
    getRecipesIngredients, 
    chosenRecipeSelector, 
    chosenRecipeInfoSelector, 
    chosenRecipeIngredientsSelector,
    setChosenRecipe, 
    likeDislike,
    // setLikeDislike 
} from '../../slices/recipesSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticationSelector, userIDSelector } from '../../slices/authSlice';
import { getComments, mainCommentsSelector } from '../../slices/commentSlice';
import { setNewCommentBody, newCommentBodySelector, postComment } from '../../slices/commentSlice';
import { getSubcomments } from '../../slices/commentSlice';
import { getUser } from '../../slices/authSlice';
import { useParams } from 'react-router-dom';
import IngredientList from './ingredientList';
import Comment from '../comments/comment';
import like from '../memberArea/like.png';
import dislike from '../memberArea/dislike.png';
import Meat from '../recipe-list/RecipeIcons/meatIcon.png';
import Fish from '../recipe-list/RecipeIcons/fishIcon.png';
import Alcohol from '../recipe-list/RecipeIcons/wineIcon.png';
import Gluten from '../recipe-list/RecipeIcons/glutenIcon.png';
import Vegan from '../recipe-list/RecipeIcons/vegetarianIcon.png';
import Tick from '../recipe-list/RecipeIcons/tick.png';
import Cross from '../recipe-list/RecipeIcons/close.png';

import './recipeDetailsPage.css';

const RecipeDetailsPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const recipeId = useSelector(chosenRecipeSelector);
    const recipeInfo = useSelector(chosenRecipeInfoSelector);
    const recipeIngredients = useSelector(chosenRecipeIngredientsSelector);
    const isAuthenticated = useSelector(authenticationSelector);
    const mainComments = useSelector(mainCommentsSelector);
    const newCommentBody = useSelector(newCommentBodySelector);
    const userID = useSelector(userIDSelector)
    const imgPath = `/RecipeImgs/${recipeInfo.picture_id}.jpg`;

    useEffect(() => {
        dispatch(getRecipeById(params.id));
        dispatch(getRecipesIngredients(params.id));
        dispatch(getComments(params.id));
        dispatch(getSubcomments(params.id));
        dispatch(setChosenRecipe(params.id))
        // Need to check if a user is logged in so that they can leave a comment
        dispatch(getUser());
        window.scrollTo(0, 0);
    }, [dispatch, params.id])
    

    const handleCommentPost = () => {
        const data = {
            comment: newCommentBody,
            recipe_id: recipeId,
            user_id: userID
        }
        dispatch(postComment(data)).then(() => dispatch(getComments(params.id)));
    }

    const handleLikeDislike = (type) => {
        const data = {
            id: recipeId,
            likeType: type
        }
        dispatch(likeDislike(data));
    }

    return (
        <div className='recipeInfoBox'>
            <div className='topInfo'>
                <h1> {recipeInfo.name} </h1>
                <img src={imgPath} alt='' />
            </div>
            <div className='likeBox'>
                <div className='likes'>
                    <img src={like} alt="A Thumbs Up Icon for Likes" 
                    onClick={() => handleLikeDislike('like')}/>
                    <p> Likes </p>
                    <p className='num'> {recipeInfo.number_of_likes} </p>
                </div> 
                <div className='dislikes'>
                    <img src={dislike} alt="A Thumbs Down Icon for Dislikes" 
                    onClick={() => handleLikeDislike('dislike')}/>
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
                <h2 className='allergyTitle'>Allergy Info</h2> 
            <div className='allergyIconList'>
                <div>
                    <img src={Meat} className='icon' alt='Meat Icon'/>
                    { recipeInfo.contains_meat === true ?
                    <img src={Tick} className='tick' alt='Recipe Contains Meat'/> :  
                    <img src={Cross} className='cross' alt='Recipe Doesnt Contain Meat'/>  
                    }
                </div>
                <div>
                    <img src={Fish} className='icon' alt='Fish Icon'/>
                    { recipeInfo.contains_fish === true ?
                    <img src={Tick} className='tick' alt='Recipe Contains Fish' /> :  
                    <img src={Cross} className='cross' alt='Recipe Doesnt Contain Meat'/>  
                    }
                </div>
                <div>
                    <img src={Alcohol} className='icon' alt='Alcohol Icon'/>
                    { recipeInfo.contains_alcohol === true ?
                    <img src={Tick} className='tick' alt='Recipe Contains Alcohol'/> :  
                    <img src={Cross} className='cross' alt='Recipe Doesnt Contain Alcohol'/>  
                    }
                </div>
                <div>
                    <img src={Gluten} className='icon' alt='Wheat Icon'/>
                    { recipeInfo.contains_gluten === true ?
                    <img src={Tick} className='tick' alt='Recipe Contains Gluten'/> :  
                    <img src={Cross} className='cross' alt='Recipe Doesnt Contain Gluten'/>  
                    }
                </div>
                <div>
                    <img src={Vegan} className='icon' alt='Vegan Icon' />
                    { recipeInfo.is_vegan === true ?
                    <img src={Tick} className='tick' alt='Recipe is Vegan'/> :  
                    <img src={Cross} className='cross' alt='Recipe isnt Vegan'/>  
                    }
                </div>
            </div>
            {/* Method List */}
            <div className='methodInfo'>
                <h2> Method </h2>
                <div className='methodList'>
                        { recipeInfo.step_1 !== '' ?
                        <div>
                            <p>
                                {recipeInfo.step_1}
                            </p>
                            <hr className='ingredientDivider'/> 
                        </div> 
                        : '' } 
                        { recipeInfo.step_2 !== '' ?
                        <div>
                            <p>
                                {recipeInfo.step_2}
                            </p>
                            <hr className='ingredientDivider'/> 
                        </div> 
                        : '' } 
                        { recipeInfo.step_3 !== '' ?
                        <div>
                            <p>
                                {recipeInfo.step_3}
                            </p>
                            <hr className='ingredientDivider'/> 
                        </div> 
                        : '' } 
                        { recipeInfo.step_4 !== '' ?
                        <div>
                            <p>
                                {recipeInfo.step_4}
                            </p>
                            <hr className='ingredientDivider'/> 
                        </div> 
                        : '' } 
                        { recipeInfo.step_5 !== '' ?
                        <div>
                            <p>
                                {recipeInfo.step_5}
                            </p>
                            <hr className='ingredientDivider'/> 
                        </div> 
                        : '' } 
                        { recipeInfo.step_6 !== '' ?
                        <div>
                            <p>
                                {recipeInfo.step_6}
                            </p>
                            <hr className='ingredientDivider'/> 
                        </div> 
                        : '' } 
                        { recipeInfo.step_7 !== '' ?
                        <div>
                            <p>
                                {recipeInfo.step_7}
                            </p>
                            <hr className='ingredientDivider'/> 
                        </div> 
                        : '' }  
                        { recipeInfo.step_8 !== '' ?
                        <div>
                            <p>
                                {recipeInfo.step_8}
                            </p>
                            <hr className='ingredientDivider'/> 
                        </div> 
                        : '' } 
                        { recipeInfo.step_9 !== '' ?
                        <div>
                            <p>
                                {recipeInfo.step_9}
                            </p>
                            <hr className='ingredientDivider'/> 
                        </div> 
                        : '' } 
                        { recipeInfo.step_10 !== '' ?
                        <div>
                            <p>
                                {recipeInfo.step_10}
                            </p>
                            <hr className='ingredientDivider'/> 
                        </div> 
                        : '' } 
                    
                </div>
                <div className='commentInfo'>
                    <h2> Comments </h2>
                    {/* Fetch Comment List and then Map over it */}
                    <div className='commentList'>
                        <div className='newCommentForm'>
                            { isAuthenticated === false ? 
                            <div>
                                <textarea disabled type='text' placeholder='Add a Comment..' /> 
                                <button disabled className='postComment'> Post Comment </button>
                                <p className='unAuthTxt'> Please Log in to Comment </p>
                            </div>
                            :
                            <div>
                                <textarea className='newCommentTextarea' onChange={e => dispatch(setNewCommentBody(e.target.value)) } 
                                type='text' placeholder='Add a Comment..' maxLength={255}/> 
                                <button className='postComment' onClick={handleCommentPost}> Post Comment </button>
                            </div>
                            }
                            { mainComments != null ? mainComments.map((comment, index) => {
                                return <Comment key={index} userId={comment.user_id} recipeId={comment.recipe_id}
                                body={comment.body} author={comment.author} id={comment.id} />
                            }) : '' }
                        </div>
                        <div className='bottomSpacer'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetailsPage;
