import React from 'react';
import './form.css';
import { incrementFormPage, decrementFormPage, formPageSelector } from '../../slices/memberAreaSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllIngredients } from '../../slices/formSlice';
import Form1Name from './form1-Name';
import Form2Ingredients from './form2-Ingredients';
import Form3Steps from './form3-Steps';
import Form4Allergens from './form4-Allergens';

const NewRecipeForm = () => {
    const dispatch = useDispatch();
    const formPage = useSelector(formPageSelector);

    useEffect(() => {
        dispatch(getAllIngredients());
    }, [dispatch]);

    const displayFormPage = () => {
        if (formPage === 1) {
            return <Form1Name />
        } else if (formPage === 2) {
            return <Form2Ingredients />
        } else if (formPage === 3) {
            return <Form3Steps />
        } else if (formPage === 4) {
            return <Form4Allergens />
        } 
    }

    return (
        <div className='newRecipeForm'>
            <div className='progressBarHolder'>
                <div className='progressBar'>
                    
                </div> 
            </div>
            <div className='formBody'>
                {displayFormPage()}
            </div>
            <div className='formFooter'> 
                <button 
                disabled={formPage === 1}
                onClick={()=> dispatch(decrementFormPage())}
                className='formBtn2' id='prev'> Previous </button>
                <button 
                disabled={formPage === 4}
                onClick={() => dispatch(incrementFormPage())}
                className='formBtn' id='next'> Next </button>
            </div>
        </div>
    );
}

export default NewRecipeForm;
