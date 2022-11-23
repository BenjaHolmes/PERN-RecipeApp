import React from 'react';

const RecipeCard = (props) => {
    const imgPath = `/RecipeImgs/${props.picId}.jpg`;
    const placeholderImg = '/RecipeImgs/placeholder.jpg';
    return (
        <div className='cardBox'>
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
