import React from 'react';
import './form.css';
import { setRecipeName } from '../../slices/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { newRecipeSelector, newRecipeNameSelector } from '../../slices/formSlice';
import { setBarPercent } from '../../slices/formSlice';
import { useEffect } from 'react';

const Form1Name = () => {
    const dispatch = useDispatch();
    const newRecipe = useSelector(newRecipeSelector);
    const newRecipeName = useSelector(newRecipeNameSelector);

    useEffect(() => {
        dispatch(setBarPercent(25))
    }, [dispatch]);

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
                    {
                     newRecipeName.length < 4 ? 
                     <div className='nameValidation'> 
                        <p class='formX'> X </p> 
                        <p> Recipe Name Must be Longer </p> 
                    </div> : ''
                    }
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
