import React from 'react';
import './recipeDetailsPage.css';

const IngredientList = (props) => {
    return (
        <div className='ingredientListItem'>
            <p> {props.name} </p>
            <p> ---- </p>
            <p> {props.quantity} </p>
        </div>
    );
}

export default IngredientList;
