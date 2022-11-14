import React from 'react';
import './recipe.css';
import fish from './RecipeIcons/fishIcon.png'
import gluten from './RecipeIcons/glutenIcon.png'
import meat from './RecipeIcons/meatIcon.png'
import veggie from './RecipeIcons/vegetarianIcon.png'
import alcohol from './RecipeIcons/wineIcon.png'

const RecipeCard = () => {
    return (
        <div className='recipeCard'>
            <div className='recipeCardTop'>
                <p> Recipe No: 1 </p>
                <h2> Spaghetti Bolognese </h2>
                <ul>
                    <li>
                        <img className='allergyIcon' src={fish} alt='This Item Contains Fish' />
                    </li>
                    <li>
                        <img className='allergyIcon' src={gluten} alt='This Item Contains Gluten' />
                    </li>
                    <li>
                        <img className='allergyIcon' src={meat} alt='This Item Contains <Meat>' />
                    </li>
                    <li>
                        <img className='allergyIcon' src={veggie} alt='This Item is Vegetarian' />
                    </li>
                    <li>
                        <img className='allergyIcon' src={alcohol} alt='This Item Contains Alcohol'/>
                    </li>
                </ul>
            </div>
            <div className='recipeCardMain'>
                <div className='ingredientList'>
                    <ul>
                        <li>
                            Minced Beef 500g
                        </li>
                        <li>
                            Tinned Tomatoes 400g
                        </li>
                        <li>
                            Spaghetti 400g
                        </li>
                        <li>
                            Onion 1 Whole
                        </li>
                        <li>
                            Garlic 1 Clove
                        </li>
                        <li>
                            Worchester Sauce 1 TBPS
                        </li>
                        <li>
                            Beef Stock Cube 1
                        </li>
                    </ul>
                </div>
                <div className='recipeMethod'>
                    <ol>
                        <li>
                            Saute the Onions and Garlic until translucent.
                        </li>
                        <li>
                            Add the Beef and cook until browned
                        </li>
                        <li>
                            Add the Tomatoes, Worchester Sauce, Stock Cubes and simmer for 20 mins
                        </li>
                        <li>
                            With ten minutes of simmer remaining, cook the spaghetti in boiling water
                        </li>
                        <li>
                            Serve after adding Salt and Pepper
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
