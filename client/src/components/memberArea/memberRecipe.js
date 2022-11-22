import React from 'react';

const MemberRecipe = () => {
    const showPopup = () => {
        
    }
    return (
        <div className='prevRecipe'>
                        <p> ID: 1 </p>
                        <p> Spaghetti Bolognese </p>
                        <p className='deleteText' onClick={showPopup}> DELETE </p>
                    </div>
    );
}

export default MemberRecipe;
