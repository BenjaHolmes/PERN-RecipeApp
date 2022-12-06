import React from 'react';
import './form.css';
import { setRecipeName } from '../../slices/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { newRecipeSelector } from '../../slices/formSlice';

const Form1Name = () => {
    const dispatch = useDispatch();
    const newRecipe = useSelector(newRecipeSelector);

    return (
        <div>
            <div className='titleHolder'>
                <h2 className='formTitle'> Name Your New Recipe </h2> 
            </div>
            <div className='nameInputHolder'>
                <input type='text' placeholder='Name' className='nameInput'
                minLength={3} maxLength={100} required value={newRecipe.name}
                onChange={(e) => dispatch(setRecipeName(e.target.value))}/>
                <div>
                    Validation
                </div>
            </div>
            <div className='formGuidelines'>
                <p> To Complete a Recipe, you'll need the following Information: </p>
                <ul>
                    <li> A Descriptive Name </li>
                    <li> A List of all of The Ingredients </li>
                    <li> A List of Instructions to complete the Recipe's Steps </li>
                    <li> Information on the Potential Allergens found in your Meal (i.e. Gluten)</li>
                </ul>
            </div>
        </div>
    );
}

export default Form1Name;
