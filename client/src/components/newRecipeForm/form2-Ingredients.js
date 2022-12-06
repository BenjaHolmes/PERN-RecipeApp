import React from 'react';
import './form.css';
import { useSelector, useDispatch } from 'react-redux';
import { sortedIngredientListSelector, 
    setNewIngredient, 
    newIngredientSelector, 
    addIngredient,
    getAllIngredients,
    ingredientAddSuccessSelector
} from '../../slices/formSlice';
import tick from '../recipe-list/RecipeIcons/tick.png';


const Form2Ingredients = () => {
    const options = useSelector(sortedIngredientListSelector);
    const newIngredient = useSelector(newIngredientSelector);
    const additionSuccess = useSelector(ingredientAddSuccessSelector);
    const dispatch = useDispatch();

    const handleNewIngredient = () => {
        const data = {
            name: newIngredient
        }
        dispatch(addIngredient(data)).then(() => dispatch(getAllIngredients()));        
    }

    return (
        <div>
            <div className='titleHolder'>
            <h2 className='formTitle'> Choose the Ingredients </h2>
        </div>
        <div className='ingredientsInputHolder'>
            <select name='ingredients' id='ingredientList' key='ingredient1'> 
                { options.map((ingredient, index) => {
                    return <option key={index} multiple={false} value={ingredient.name}> {ingredient.name} </option>
                })}    
            </select>
            <select name='ingredients' id='ingredientList' key='ingredient2'> 
                { options.map((ingredient, index) => {
                    return <option key={index} multiple={false} value={ingredient.name}> {ingredient.name} </option>
                })}    
            </select>
            <select name='ingredients' id='ingredientList' key='ingredient3'> 
                { options.map((ingredient, index) => {
                    return <option key={index} multiple={false} value={ingredient.name}> {ingredient.name} </option>
                })}    
            </select>
            <select name='ingredients' id='ingredientList' key='ingredient4'> 
                { options.map((ingredient, index) => {
                    return <option key={index} multiple={false} value={ingredient.name}> {ingredient.name} </option>
                })}    
            </select>
            <select name='ingredients' id='ingredientList' key='ingredient5'> 
                { options.map((ingredient, index) => {
                    return <option key={index} multiple={false} value={ingredient.name}> {ingredient.name} </option>
                })}    
            </select>
            <select name='ingredients' id='ingredientList' key='ingredient6'> 
                { options.map((ingredient, index) => {
                    return <option key={index} multiple={false} value={ingredient.name}> {ingredient.name} </option>
                })}    
            </select>
            <select name='ingredients' id='ingredientList' key='ingredient7'> 
                { options.map((ingredient, index) => {
                    return <option key={index} multiple={false} value={ingredient.name}> {ingredient.name} </option>
                })}    
            </select>
            <select name='ingredients' id='ingredientList' key='ingredient8'> 
                { options.map((ingredient, index) => {
                    return <option key={index} multiple={false} value={ingredient.name}> {ingredient.name} </option>
                })}    
            </select>
            <select name='ingredients' id='ingredientList' key='ingredient9'> 
                { options.map((ingredient, index) => {
                    return <option key={index} multiple={false} value={ingredient.name}> {ingredient.name} </option>
                })}    
            </select>
            <select name='ingredients' id='ingredientList' key='ingredient10'> 
                { options.map((ingredient, index) => {
                    return <option key={index} multiple={false} value={ingredient.name}> {ingredient.name} </option>
                })}    
            </select>
        </div>
        <div className='addNewIngredient'>
            <h4> Dont see the Ingredient you need? Submit it Below to add it to our List </h4>
            <input type='text' placeholder='Ingredient Name' 
            onChange={e => dispatch(setNewIngredient(e.target.value))}/> 
            <button onClick={handleNewIngredient}> Add New Ingredient </button>
            { additionSuccess === 'loading' ? <h4> Attempting to Add Ingredient </h4> : '' }
            { additionSuccess === true ? 
                <div className='successDiv'> 
                    <img  src={tick} alt='Tick indicating successful ingredient addition'/> 
                    <h4> Ingredient Added Successfully </h4> 
                </div> : '' }
        </div>
        </div>
    );
}

export default Form2Ingredients;
