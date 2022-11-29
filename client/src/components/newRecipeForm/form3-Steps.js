import React from 'react';
import './form.css';

const Form3Steps = () => {
    return (
        <div>
            <div className='titleHolder'>
                <h2 className='formTitle'> Tell Us How to Make It </h2>
            </div>
            <div className='methodHolder'>
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 1..' /> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 2..' /> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 3..' /> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 4..' /> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 5..' /> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 6..' /> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 7..' /> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 8..' /> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 9..' /> 
                <textarea className='methodStep' type='text' maxLength={255} placeholder='Step 10..' /> 
            </div>
        </div>
    );
}

export default Form3Steps;
