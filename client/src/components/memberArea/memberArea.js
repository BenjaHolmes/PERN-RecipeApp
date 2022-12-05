import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usernameSelector, logOutUser } from '../../slices/authSlice';
import { getMembersRecipes, membersRecipesSelector } from '../../slices/memberAreaSlice';
import './memberArea.css';
import like from './like.png';
import dislike from './dislike.png';
import MemberRecipe from './memberRecipe';
import { userIDSelector } from '../../slices/authSlice';
import { toggleForm, formOpenSelector } from '../../slices/formSlice';
import NewRecipeForm from '../newRecipeForm/newRecipeForm';

const MemberArea = () => {
    const username = useSelector(usernameSelector);
    const dispatch = useDispatch();
    const userId = parseInt(useSelector(userIDSelector));
    const membersRecipes = useSelector(membersRecipesSelector);
    const formOpen = useSelector(formOpenSelector);

    useEffect(() => {
         dispatch(getMembersRecipes((userId)));
    }, [dispatch, userId]);

    const handleLogOut = () => {
        dispatch(logOutUser());
    }
    
    let totalLikes = 0;
    let totalDislikes = 0
    membersRecipes.forEach(recipe => {
        totalLikes += recipe.number_of_likes;
        totalDislikes += recipe.number_of_dislikes;
    })

    return (
        <div className='memberContainer'>
            <div className='welcomeBox'> 
                <h1> Welcome Back {username} </h1>
                <button onClick={handleLogOut}> Log Out </button>
            </div>
            <h3 className='recipesTitle'> Manage Your Recipes </h3>
                <div className='prevRecipeTitles'> 
                    <p >Recipe ID</p>
                    <p>Name</p> 
                    <p >Likes</p>
                    <p >Dislikes</p>
                </div>
            <div className='statisticsBox'>
                <div className='previousRecipesBox'>
                    { membersRecipes.length > 0 ? membersRecipes.map((recipe, index) => 
                    <MemberRecipe key={index} id={recipe.id} name={recipe.name}
                    numLikes={recipe.number_of_likes} numDislikes={recipe.number_of_dislikes} />) : 
                    <p className='noRecipeText'> No Recipes Found. Create One Below! </p> }
                </div>
                <div className='likeStats'>
                    <img src={like} alt='A Thumbs Up Icon for Likes' />
                    <h3> Your Recipes Have </h3> <br/>
                    <span className='likeNum'>{totalLikes}</span> <br />
                    <h3> Likes </h3>
                    <hr className='likeDivider' />
                    <img src={dislike} alt='A Thumbs Down Icon for Dislikes'/>
                    <h3> Your Recipes Have </h3> <br />
                    <span className='likeNum'>{totalDislikes}</span> <br />
                    <h3> Dislikes </h3>
                </div>
            </div>
            <div className='recipeBuildBox'>
                <h3 onClick={() => dispatch(toggleForm())}> Or Click Here to Create a New Recipe </h3>
                { formOpen === true ? 
                <NewRecipeForm /> : '' }
            </div>
        </div>
    );
}

export default MemberArea;
