import React from 'react';
import RecipeCard from './recipeCard.js';
import Tick from './RecipeIcons/tick.png';
import './recipe.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, searchParameterSelector, setSearchParameter, recipesSelector } from '../../slices/recipesSlice';

const RecipeList = () => {
    const dispatch = useDispatch();
    const searchParameter = useSelector(searchParameterSelector);
    const recipes = useSelector(recipesSelector);
    useEffect(() => {
        // Refreshes Search Parameter when user reloads page
        dispatch(setSearchParameter('All Recipes'));
        dispatch(getRecipes());
    }, [dispatch])
    
    return (
        <div className='recipeListHolder'>
            <div className='sortBar'>
                <div className='barSection'>
                <p onClick={() => dispatch(setSearchParameter('All Recipes'))}> All Recipes </p>
                { searchParameter === 'All Recipes' ?
                <img src={Tick} alt='Checkmark Denoting Selected Filter Of Recipes Options'/>
                : '' }
                </div>
                <div className='barSection'>
                <p onClick={() => dispatch(setSearchParameter('Meat'))}> Meat </p>
                { searchParameter === 'Meat' ?
                <img src={Tick} alt='Checkmark Denoting Selected Filter Of Recipes Options'/>
                : '' }
                </div>
                <div className='barSection'>
                <p onClick={() => dispatch(setSearchParameter('Fish'))}> Fish </p>
                { searchParameter === 'Fish' ?
                <img src={Tick} alt='Checkmark Denoting Selected Filter Of Recipes Options'/>
                : '' }
                </div>
                <div className='barSection'>
                <p onClick={() => dispatch(setSearchParameter('Gluten Free'))}> Gluten Free </p>
                { searchParameter === 'Gluten Free' ?
                <img src={Tick} alt='Checkmark Denoting Selected Filter Of Recipes Options'/>
                : '' }
                </div>
                <div className='barSection'>
                <p onClick={() => dispatch(setSearchParameter('Alcohol'))}> Alcohol </p>
                { searchParameter === 'Alcohol' ?
                <img src={Tick} alt='Checkmark Denoting Selected Filter Of Recipes Options'/>
                : '' }
                </div>
                <div className='barSection'>
                <p onClick={() => dispatch(setSearchParameter('Vegan'))}> Vegan </p>
                { searchParameter === 'Vegan' ?
                <img src={Tick} alt='Checkmark Denoting Selected Filter Of Recipes Options'/>
                : '' }
                </div>
            </div>
            <main className='recipeCardHolder'>
                { recipes != null ? recipes.map((data, index) => 
                <RecipeCard key={index} name={data.name} numLikes={data.number_of_likes}
                numDislikes={data.number_of_dislikes} id={data.id} picId={data.picture_id} />) 
                : ''}
            </main>
        </div>
    );
}

export default RecipeList;
