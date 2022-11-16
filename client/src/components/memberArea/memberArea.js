import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usernameSelector, logOutUser } from '../../slices/authSlice';
import './memberArea.css';
import like from './like.png';
import dislike from './dislike.png';
import MemberRecipe from './memberRecipe';

const MemberArea = () => {
    const username = useSelector(usernameSelector);
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOutUser);
    }
    return (
        <div className='memberContainer'>
            <div className='welcomeBox'> 
                <h1> Welcome Back {username} </h1>
                <button onClick={handleLogOut}> Log Out </button>
            </div>
            <h3> Your Recipes </h3>
            <div className='statisticsBox'>
                <div className='previousRecipesBox'>
                    <MemberRecipe />
                    <MemberRecipe />
                    <MemberRecipe />
                    <MemberRecipe />
                    <MemberRecipe />
                    <MemberRecipe />
                    <MemberRecipe />
                </div>
                <div className='likeBox'>
                    <h3> Your Recipes Have 0 Likes </h3>
                    <img src={like} />
                    <h3> Your Recipes Have 0 Dislikes </h3>
                    <img src={dislike} />
                </div>
            </div>
            <div className='RecipeBuildBox'>
                <p> Recipe Build Box </p>
            </div>
        </div>
    );
}

export default MemberArea;
