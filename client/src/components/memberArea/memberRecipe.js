import React from 'react';
import { idForDeletionSelector, setItemForDeletion, deleteMembersRecipe } from '../../slices/memberAreaSlice';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const MemberRecipe = (props) => {
    const dispatch = useDispatch();
    const idForDeletion = useSelector(idForDeletionSelector);

    const showPopup = () => {
        dispatch(setItemForDeletion(props.id));
    }
    const closePopup = () => {
        dispatch(setItemForDeletion(null));
    }
    const handleDeletion = () => {
        dispatch(deleteMembersRecipe(props.id));
    }

    return (
        <div>
            <div className='prevRecipe'>
                <p className='pleft'> {props.id} </p>
                <p> {props.name} </p>
                <p className='pleft'> {props.numLikes} </p>
                <p className='pleft'> {props.numDislikes} </p>
                <button className='deleteText' onClick={showPopup}> Delete This Recipe </button>
            </div>
            <AnimatePresence>
                { idForDeletion === props.id ? 
                <motion.div className='deletePopup' animate={{ y: 0, opacity: 1 }} initial={{ y: -10, opacity: 0 }}
                transition={{type: 'spring', duration: .5 }} key='DeletePopUp' exit={{y: -10, opacity: 0}}>
                    <div className='leftPopup'>
                        <p> Are you sure you want to delete '{props.name}'? </p>
                        <p> You wont be able to recover it.</p>
                    </div>
                        <div className='rightPopup'>
                        <button className='cancelButton' onClick={closePopup}> Cancel </button>
                        <button className='deleteButton' onClick={handleDeletion}> Delete </button>
                    </div>
                </motion.div>
                : '' }
            </AnimatePresence>
        </div>
    );
}

export default MemberRecipe;
