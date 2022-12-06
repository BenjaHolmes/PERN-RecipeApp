import React from 'react';
import './recipeDetailsPage.css';

const IngredientList = (props) => {
    return (
        <div>
            <div className='ingredientListItem'>
                <p> {props.name} </p>
                <p> {props.quantity} </p>
            </div>
            <hr className='ingredientDivider'/> 
        </div>
    );

}

export default IngredientList;
