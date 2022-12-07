import React from 'react';
import './form.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNewRecipe, 
    newRecipeNameSelector,  
    newRecipeIngredientList,
    addNewRecipeIngredient,
    toggleAllergen,
    newRecipeSelector,
    addNewRecipeSteps,
    addNewRecipeAllergens,
    toggleForm,
    
} from '../../slices/formSlice';
import setFormPage from '../../slices/memberAreaSlice';
import { userIDSelector } from '../../slices/authSlice';
import { getMembersRecipes } from '../../slices/memberAreaSlice';
import { useEffect } from 'react';
import { setBarPercent } from '../../slices/formSlice';

const Form4Allergens = () => {
    const dispatch = useDispatch();
    const userId = useSelector(userIDSelector);
    const recipeName = useSelector(newRecipeNameSelector);
    const ingredientList = useSelector(newRecipeIngredientList);
    const newRecipe = useSelector(newRecipeSelector);
    
    useEffect(() => {
        dispatch(setBarPercent(100))
    }, [dispatch]);

    const createRecipe = () => {
        const initialData = {
            name: recipeName,
            userId: userId
        }
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
        const stepData = {
            name: recipeName,
            created_by_user: userId,
            step_1: newRecipe.step_1,
            step_2: newRecipe.step_2,
            step_3: newRecipe.step_3,
            step_4: newRecipe.step_4,
            step_5: newRecipe.step_5,
            step_6: newRecipe.step_6,
            step_7: newRecipe.step_7,
            step_8: newRecipe.step_8,
            step_9: newRecipe.step_9,
            step_10: newRecipe.step_10
        }
        const allergenData = {
            name: recipeName,
            created_by_user: userId,
            meat: newRecipe.meat,
            fish: newRecipe.fish,
            alcohol: newRecipe.alcohol,
            gluten: newRecipe.gluten,
            vegan: newRecipe.vegan
        }

        const finalStep = () => {
            dispatch(toggleForm());
            dispatch(setFormPage(1));
            window.scrollTo(0,0);
        }

        dispatch(addNewRecipe(initialData))
        .then(setTimeout(mapIngreds, 1000))
        .then(() => dispatch(addNewRecipeSteps(stepData)))
        .then(() => dispatch(addNewRecipeAllergens(allergenData)))
        .then(() => dispatch(getMembersRecipes(userId)))
        .then(() => finalStep());
    }

    return (
        <div>
            <div className='titleHolder'>
                <h2 className='formTitle'> Please Check Applicable Boxes </h2> 
                <h3> Does Your Recipe.. </h3>
            </div>
            <div className='allergyListHolder'>
                <div className='checkHolder'>
                    <input type='checkbox' id='meatBox' 
                    onClick={() => dispatch(toggleAllergen('Meat'))}/>
                    <label> Contain Meat? </label>
                </div>
                <div className='checkHolder'>
                    <input type='checkbox' id='fishBox' 
                    onClick={() => dispatch(toggleAllergen('Fish'))}/>
                    <label> Contain Fish? </label>
                </div>
                <div className='checkHolder'>
                    <input type='checkbox' id='alchBox' 
                    onClick={() => dispatch(toggleAllergen('Alcohol'))}/>
                    <label> Contain Alcohol? </label>
                </div>
                <div className='checkHolder'>
                    <input type='checkbox' id='glutenBox' 
                    onClick={() => dispatch(toggleAllergen('Gluten'))}/>
                    <label> Contain Gluten? </label>
                </div>
                <h3> And Finally.. </h3>
                <div className='checkHolder'>
                    <input type='checkbox' id='vegBox' 
                    onClick={() => dispatch(toggleAllergen('Vegan'))}/>
                    <label> Is Your Recipe Vegan? </label>
                </div>
            </div>
            <div className='formWarnings'>
                { recipeName === '' ? 
                <p><span className='formX'>X</span>Please Choose a Recipe Name (Min 4 Characters)</p> : ''}
                { ingredientList[0].ingredient_id === '' || ingredientList[0].quantity === '' ?
                <p><span className='formX'>X</span> Please Add at least One Ingredient</p> : ''}
                { newRecipe.step_1 === '' ?
                <p><span className='formX'>X</span>Please Add Method Steps to Your Recipe (Min 1 Step)</p> : ''}
                { newRecipe.meat === true && newRecipe.vegan === true ? 
                <p><span className='formX'>X</span> A Recipe cannot both have Meat and be Vegan </p> : ''}
                { newRecipe.fish === true && newRecipe.vegan === true ? 
                <p><span className='formX'>X</span> A Recipe cannot both have Fish and be Vegan </p> : ''}
            </div>
            <div className='submitHolder'>
                { recipeName !== '' 
                && newRecipe.step_1 !== '' 
                && ingredientList[0].ingredient_id !== '' 
                && ingredientList[0].quantity !== '' ?
                <button onClick={createRecipe}> Click Here to Finalise and Submit your New Recipe </button>
                : '' }
            </div>
        </div>
    );
}

export default Form4Allergens;
