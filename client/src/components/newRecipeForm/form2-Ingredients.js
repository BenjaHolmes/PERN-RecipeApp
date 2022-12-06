import React from 'react';
import './form.css';
import { useSelector, useDispatch } from 'react-redux';
import { sortedIngredientListSelector, 
    setNewIngredient, 
    newIngredientSelector, 
    addIngredient,
    getAllIngredients,
    ingredientAddSuccessSelector,
    addToIngredients,
    addToQuantity
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
            <div>
                <select name='ingredients' id='ingredient1' key='ingredient1' 
                onChange={(e) => dispatch(addToIngredients({ ingredient_id: e.target.value, position: 0 }))}> 
                    { options.map((ingredient, index) => {
                        return <option key={index} multiple={false} value={ingredient.id}> {ingredient.name} </option>
                    })}    
                </select>
                <input className='quantityInput' id='amount1' placeholder='Input the Quantity of this Ingredient' 
                onChange={(e) => dispatch(addToQuantity({ quantity: e.target.value, position: 0 }))}/>
            </div>
            <div>
                <select name='ingredients' id='ingredient2' key='ingredient2' 
                onChange={(e) => dispatch(addToIngredients({ ingredient_id: e.target.value, position: 1 }))}> 
                    { options.map((ingredient, index) => {
                        return <option key={index} multiple={false} value={ingredient.id}> {ingredient.name} </option>
                    })}    
                </select>
                <input className='quantityInput' id='amount2' placeholder='Input the Quantity of this Ingredient' 
                onChange={(e) => dispatch(addToQuantity({ quantity: e.target.value, position: 1 }))}/>     
            </div>
            <div>
                <select name='ingredients' id='ingredient3' key='ingredient3' 
                onChange={(e) => dispatch(addToIngredients({ ingredient_id: e.target.value, position: 2 }))}> 
                    { options.map((ingredient, index) => {
                        return <option key={index} multiple={false} value={ingredient.id}> {ingredient.name} </option>
                    })}    
                </select>
                <input className='quantityInput' id='amount3' placeholder='Input the Quantity of this Ingredient' 
                onChange={(e) => dispatch(addToQuantity({ quantity: e.target.value, position: 2 }))}/>
            </div>
            <div>
                <select name='ingredients' id='ingredient4' key='ingredient4' 
                onChange={(e) => dispatch(addToIngredients({ ingredient_id: e.target.value, position: 3 }))}> 
                    { options.map((ingredient, index) => {
                        return <option key={index} multiple={false} value={ingredient.id}> {ingredient.name} </option>
                    })}    
                </select>
                <input className='quantityInput' id='amount4' placeholder='Input the Quantity of this Ingredient' 
                onChange={(e) => dispatch(addToQuantity({ quantity: e.target.value, position: 3 }))}/>
            </div>
            <div>
                <select name='ingredients' id='ingredient5' key='ingredient5' 
                onChange={(e) => dispatch(addToIngredients({ ingredient_id: e.target.value, position: 4 }))}> 
                    { options.map((ingredient, index) => {
                        return <option key={index} multiple={false} value={ingredient.id}> {ingredient.name} </option>
                    })}    
                </select>
                <input className='quantityInput' id='amount5' placeholder='Input the Quantity of this Ingredient' 
                onChange={(e) => dispatch(addToQuantity({ quantity: e.target.value, position: 4 }))}/>
            </div>
            <div>
                <select name='ingredients' id='ingredient6' key='ingredient6' 
                onChange={(e) => dispatch(addToIngredients({ ingredient_id: e.target.value, position: 5 }))}> 
                    { options.map((ingredient, index) => {
                        return <option key={index} multiple={false} value={ingredient.id}> {ingredient.name} </option>
                    })}    
                </select>
                <input className='quantityInput' id='amount6' placeholder='Input the Quantity of this Ingredient' 
                onChange={(e) => dispatch(addToQuantity({ quantity: e.target.value, position: 5 }))}/>
            </div>
            <div>
                <select name='ingredients' id='ingredient7' key='ingredient7' 
                onChange={(e) => dispatch(addToIngredients({ ingredient_id: e.target.value, position: 6 }))}> 
                    { options.map((ingredient, index) => {
                        return <option key={index} multiple={false} value={ingredient.id}> {ingredient.name} </option>
                    })}    
                </select>
                <input className='quantityInput' id='amount7' placeholder='Input the Quantity of this Ingredient' 
                onChange={(e) => dispatch(addToQuantity({ quantity: e.target.value, position: 6 }))}/>
            </div>    
            <div>
                <select name='ingredients' id='ingredient8' key='ingredient8' 
                onChange={(e) => dispatch(addToIngredients({ ingredient_id: e.target.value, position: 7 }))}> 
                    { options.map((ingredient, index) => {
                        return <option key={index} multiple={false} value={ingredient.id}> {ingredient.name} </option>
                    })}    
                </select>
                <input className='quantityInput' id='amount8' placeholder='Input the Quantity of this Ingredient' 
                onChange={(e) => dispatch(addToQuantity({ quantity: e.target.value, position: 7 }))}/>
            </div>
            <div>
                <select name='ingredients' id='ingredient9' key='ingredient9' 
                onChange={(e) => dispatch(addToIngredients({ ingredient_id: e.target.value, position: 8 }))}> 
                    { options.map((ingredient, index) => {
                        return <option key={index} multiple={false} value={ingredient.id}> {ingredient.name} </option>
                    })}    
                </select>
                <input className='quantityInput' id='amount9' placeholder='Input the Quantity of this Ingredient' 
                onChange={(e) => dispatch(addToQuantity({ quantity: e.target.value, position: 8 }))}/>
            </div>
            <div>    
                <select name='ingredients' id='ingredient10' key='ingredient10' 
                onChange={(e) => dispatch(addToIngredients({ ingredient_id: e.target.value, position: 9 }))}> 
                    { options.map((ingredient, index) => {
                        return <option key={index} multiple={false} value={ingredient.id}> {ingredient.name} </option>
                    })}    
                </select>
                <input className='quantityInput' id='amount10' placeholder='Input the Quantity of this Ingredient' 
                onChange={(e) => dispatch(addToQuantity({ quantity: e.target.value, position: 9 }))}/>
            </div>    
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
