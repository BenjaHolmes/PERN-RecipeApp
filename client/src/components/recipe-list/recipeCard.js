import React from 'react';
import img1 from './RecipeImgs/01.jpg';

const RecipeCard = () => {
    return (
        <div className='cardBox'>
            <img className='cardImg' src={img1} alt='Image of Food'/>
            <div className='cardData'>
                <p className='recipeTitle'> Spaghetti Bolognese </p>
            </div>
        </div>
    );
}

export default RecipeCard;
