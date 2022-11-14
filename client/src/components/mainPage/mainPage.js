import React from 'react';
import RecipeList from '../recipe-list/recipeList';
import ArticleList from '../article-list/articleList';

const MainPage = () => {
    return (
        <div className='content-container'>
            <RecipeList /> 
            <ArticleList />
        </div>
    );
}

export default MainPage;
