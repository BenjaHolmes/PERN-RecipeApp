import React from 'react';
import './form.css';

const Form4Allergens = () => {
    return (
        <div>
            <div className='titleHolder'>
                <h2 className='formTitle'> Please Check Applicable Boxes </h2> 
                <h3> Does Your Recipe.. </h3>
            </div>
            <div className='allergyListHolder'>
                <div className='checkHolder'>
                    <input type='checkbox' id='meatBox' />
                    <label for='meatBox'> Contain Meat? </label>
                </div>
                <div className='checkHolder'>
                    <input type='checkbox' id='fishBox' />
                    <label for='fishBox'> Contain Fish? </label>
                </div>
                <div className='checkHolder'>
                    <input type='checkbox' id='alchBox' />
                    <label for='alchBox'> Contain Alcohol? </label>
                </div>
                <div className='checkHolder'>
                    <input type='checkbox' id='glutenBox' />
                    <label for='glutenBox'> Contain Gluten? </label>
                </div>
                <h3> And Finally.. </h3>
                <div className='checkHolder'>
                    <input type='checkbox' id='vegBox' />
                    <label for='vegBox'> Is Your Recipe Vegan? </label>
                </div>
            </div>
        </div>
    );
}

export default Form4Allergens;
