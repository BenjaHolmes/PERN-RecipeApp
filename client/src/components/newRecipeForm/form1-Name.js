import React from 'react';
import './form.css';

const Form1Name = () => {
    return (
        <div>
            <div className='titleHolder'>
                <h2 className='formTitle'> Name Your New Recipe </h2> 
            </div>
            <div className='nameInputHolder'>
            <input type='text' placeholder='Name' className='nameInput'/>
            </div>
        </div>
    );
}

export default Form1Name;
