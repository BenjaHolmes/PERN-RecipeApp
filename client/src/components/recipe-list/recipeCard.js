import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setChosenRecipe } from '../../slices/recipesSlice';
import { useDispatch } from 'react-redux';

const RecipeCard = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const imgPath = `/RecipeImgs/${props.picId}.jpg`;
    const placeholderImg = '/RecipeImgs/placeholder.jpg';
    const handleClick = () => {
        navigate(`/recipes/${props.id}`)
        dispatch(setChosenRecipe(parseInt(props.id)));
    }
    return (
        <div className='cardBox' onClick={handleClick}>
            { props.picId === null ? 
            <img className='cardImg' src={placeholderImg} alt='Placeholder Food Pic'/> :
            <img className='cardImg' src={imgPath} alt='Food Pic'/>
            }
            <div className='cardData'>
                <p className='recipeTitle'> {props.name} </p>
            </div>
        </div>
    );
}

export default RecipeCard;
