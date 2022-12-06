import React from 'react';
import './form.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNewRecipe, 
    newRecipeNameSelector,  
    newRecipeIngredientList,
    addNewRecipeIngredient,
    
} from '../../slices/formSlice';
import { userIDSelector } from '../../slices/authSlice';

const Form4Allergens = () => {
    const dispatch = useDispatch();
    const userId = useSelector(userIDSelector);
    const recipeName = useSelector(newRecipeNameSelector);
    const ingredientList = useSelector(newRecipeIngredientList)
    
    const createRecipe = () => {
        const initialData = {
            name: recipeName,
            userId: userId
        }
        console.log(initialData)
        
        // Filtering the chosen ingredients, incase some went unused.
        const filteredIngredients = ingredientList.filter((ingredient) => {
            return ingredient.ingredient_id && ingredient.quantity !== '';
        });

        // Then i map over the filtered list to send as many dispatches as there are ingredients
        const mapIngreds = () => {
            filteredIngredients.map((ingredient) => {
                return dispatch(addNewRecipeIngredient({
                    name: recipeName,
                    created_by_user: userId,
                    ingredient_id: ingredient.ingredient_id,
                    quantity: ingredient.quantity
                }))
            })
        }

        dispatch(addNewRecipe(initialData)).then(setTimeout(mapIngreds, 10000))
    }

    return (
        <div>
            <div className='titleHolder'>
                <h2 className='formTitle'> Please Check Applicable Boxes </h2> 
                <h3> Does Your Recipe.. </h3>
            </div>
            <div className='allergyListHolder'>
                <div className='checkHolder'>
                    <input type='checkbox' id='meatBox' />
                    <label> Contain Meat? </label>
                </div>
                <div className='checkHolder'>
                    <input type='checkbox' id='fishBox' />
                    <label> Contain Fish? </label>
                </div>
                <div className='checkHolder'>
                    <input type='checkbox' id='alchBox' />
                    <label> Contain Alcohol? </label>
                </div>
                <div className='checkHolder'>
                    <input type='checkbox' id='glutenBox' />
                    <label> Contain Gluten? </label>
                </div>
                <h3> And Finally.. </h3>
                <div className='checkHolder'>
                    <input type='checkbox' id='vegBox' />
                    <label> Is Your Recipe Vegan? </label>
                </div>
            </div>
            <div className='submitHolder'>
                <button onClick={createRecipe}> Click Here to Submit your New Recipe </button>
            </div>
        </div>
    );
}

export default Form4Allergens;
