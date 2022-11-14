import React from 'react';
import RecipeCard from './recipeCard.js';
import './recipe.css';

const RecipeList = () => {
    return (
        <main className='recipeListHolder'>
            <RecipeCard />
            <RecipeCard />
        </main>
    );
}

export default RecipeList;
