import React from 'react';
import { getRecipeById, chosenRecipeSelector, chosenRecipeInfoSelector } from '../../slices/recipesSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import like from '../memberArea/like.png';
import dislike from '../memberArea/dislike.png';
import './recipeDetailsPage.css';

const RecipeDetailsPage = () => {
    const dispatch = useDispatch();
    const recipeId = useSelector(chosenRecipeSelector);
    const recipeInfo = useSelector(chosenRecipeInfoSelector);
    const imgPath = `/RecipeImgs/${recipeInfo.picture_id}.jpg`;
    useEffect(() => {
        dispatch(getRecipeById(recipeId));
        window.scrollTo(0, 0);
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
                    <img src={dislike} alt="A Thumbs Up Icon for Dislikes" />
                    <p> Dislikes </p>
                    <p className='num'> {recipeInfo.number_of_dislikes} </p>
                </div> 
            </div>
            <div className='ingredientInfo'>
                {/* Fetch Ingredient List and then Map over it */}
                <h2> Ingredients </h2>
                <div className='ingredientList'>
                <ul>
                    <li>
                        Bread
                    </li>
                    <li>
                        Tomatoes
                    </li>
                </ul>
                </div> 
            </div>
            <div className='methodInfo'>
                <h2> Method </h2>
                <div className='methodList'>
                    {/* Fetch Method List and then Map over it */}
                    <ul>
                        <li>
                            Boil Water
                        </li>
                        <li>
                            Preheat Oven
                        </li>
                    </ul>
                </div>
                <div className='commentInfo'>
                    <h2> Comments </h2>
                    {/* Fetch Comment List and then Map over it */}
                    <div className='commentList'>
                    <ul>
                        <li>
                            Loved it!
                        </li>
                        <li>
                            Too Hard for Me!
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetailsPage;
