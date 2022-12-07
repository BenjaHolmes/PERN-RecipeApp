import React from 'react';
import './form.css';
import { addMethodStep, newRecipeSelector } from '../../slices/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setBarPercent } from '../../slices/formSlice';

const Form3Steps = () => {
    const dispatch = useDispatch();
    let newRecipe = useSelector(newRecipeSelector)

    useEffect(() => {
        dispatch(setBarPercent(75))
    }, [dispatch]);

    return (
        <div>
            <div className='titleHolder'>
                <h2 className='formTitle'> Tell Us How to Make It </h2>
            </div>
            <div className='methodHolder'>
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 1..' 
                value={newRecipe.step_1} 
                onChange={(e) => dispatch(addMethodStep({ stepBody: e.target.value, stepNum: 1}))}/> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 2..' 
                value={newRecipe.step_2} 
                onChange={(e) => dispatch(addMethodStep({ stepBody: e.target.value, stepNum: 2}))}/> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 3..' 
                value={newRecipe.step_3} 
                onChange={(e) => dispatch(addMethodStep({ stepBody: e.target.value, stepNum: 3}))}/> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 4..' 
                value={newRecipe.step_4} 
                onChange={(e) => dispatch(addMethodStep({ stepBody: e.target.value, stepNum: 4}))}/> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 5..'
                value={newRecipe.step_5}  
                onChange={(e) => dispatch(addMethodStep({ stepBody: e.target.value, stepNum: 5}))}/> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 6..'
                value={newRecipe.step_6}  
                onChange={(e) => dispatch(addMethodStep({ stepBody: e.target.value, stepNum: 6}))}/> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 7..' 
                value={newRecipe.step_7} 
                onChange={(e) => dispatch(addMethodStep({ stepBody: e.target.value, stepNum: 7}))}/> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 8..' 
                value={newRecipe.step_8} 
                onChange={(e) => dispatch(addMethodStep({ stepBody: e.target.value, stepNum: 8}))}/> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 9..'
                value={newRecipe.step_9}  
                onChange={(e) => dispatch(addMethodStep({ stepBody: e.target.value, stepNum: 9}))}/> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 10..'
                value={newRecipe.step_10}  
                onChange={(e) => dispatch(addMethodStep({ stepBody: e.target.value, stepNum: 10}))}/> 
            </div>
        </div>
    );
}

export default Form3Steps;
