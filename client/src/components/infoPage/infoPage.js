import React from 'react';
import './infoPage.css';
import meat from '../recipe-list/RecipeIcons/meatIcon.png';
import fish from '../recipe-list/RecipeIcons/fishIcon.png';
import alch from '../recipe-list/RecipeIcons/wineIcon.png';
import gluten from '../recipe-list/RecipeIcons/glutenIcon.png';
import vegan from '../recipe-list/RecipeIcons/vegetarianIcon.png';

const InfoPage = () => {
    return (
        <div className='infoPage'>
            <div className='infoHeader'>
                <h1> Discover New Recipes, or Share Your Own! </h1>
            </div>
            <div className='infoCards'>
                <div className='siteInfo'> 
                    <h2> Meal Sharing App </h2>
                    <p className='boxText'> This App is a place to create and share your favourite
                    healthy recipes with other users.
                    Health food novice or pro, there'll be something new for you
                    here, which can help you on the road to a healthier life.
                    </p>
                </div>
                <div className='logInInfo'> 
                    <h2> Log In to Contribute </h2>
                    <p className='boxText'> Once registered and logged in, you can begin to contribute and 
                        manage your own recipes, or comment on other peoples.
                    </p>
                    <p> Picture of Logged in Area once completed </p>
                    <p> button to click to go to the log in area </p>
                </div>
                <div className='allergenInfo'>                    
                    <h2> Allergen Info </h2>
                    <p className='boxText'> On our recipe pages, you'll find these icons indicating 
                        which food groups are found within that recipe </p> 
                    <ul className='allergyList'>
                        <li> <img src={meat} alt='' /> <p>Recipe Contains Meat</p> </li>
                        <li> <img src={fish} alt='' /> <p>Recipe Contains Fish</p> </li>
                        <li> <img src={alch} alt='' /> <p>Recipe Contains Alcohol</p> </li>
                        <li> <img src={gluten} alt='' /> <p>Recipe Contains Gluten</p> </li>
                        <li> <img src={vegan} alt='' /> <p>Recipe is Vegan</p> </li>
                    </ul>
                </div>
                <div className='emailInfo'> 
                    <h2> Mailing List </h2>
                    <p className='boxText'> Need even more information sent direct to you? Join our 
                    mailing list below and receive direct updates. </p>
                    <input type='email' placeholder='Email Address'/>
                    <button> Submit </button>
                </div>
            </div>
        </div>
    );
}

export default InfoPage;
