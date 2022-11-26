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

const MemberArea = () => {
    const username = useSelector(usernameSelector);
    const dispatch = useDispatch();
    const userId = parseInt(useSelector(userIDSelector));
    const membersRecipes = useSelector(membersRecipesSelector);

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
            <h3> Your Recipes </h3>
            <div className='statisticsBox'>
                <div className='previousRecipesBox'>
                    { membersRecipes.length > 0 ? membersRecipes.map((recipe, index) => 
                    <MemberRecipe key={index} id={recipe.id} name={recipe.name}
                    numLikes={recipe.number_of_likes} numDislikes={recipe.number_of_dislikes} />) : 
                    <p> No Recipes Found. Create One Below! </p> }
                </div>
                <div className='likeStats'>
                    <h3> Your Recipes Have {totalLikes} Likes </h3>
                    <img src={like} alt='A Thumbs Up Icon for Likes' />
                    <h3> Your Recipes Have {totalDislikes} Dislikes </h3>
                    <img src={dislike} alt='A Thumbs Down Icon for Dislikes'/>
                </div>
            </div>
            <div className='recipeBuildBox'>
                <h2> Create a New Recipe </h2>
            </div>
        </div>
    );
}

export default MemberArea;
