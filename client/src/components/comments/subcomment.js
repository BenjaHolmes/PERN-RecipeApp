import React from 'react';
import './comment.css'
import { useSelector, useDispatch } from 'react-redux';
import { userIDSelector } from '../../slices/authSlice';
import deleteIcon from './commentIcons/deleteIcon.png';
import { deleteSubcomment, getSubcomments } from '../../slices/commentSlice';
import { useParams } from 'react-router-dom';


const Subcomment = (props) => {
    const userId = useSelector(userIDSelector);
    const dispatch = useDispatch();
    const params = useParams();

    const handleSubDeletion = () => {
        dispatch(deleteSubcomment(props.subcommentId)).then(() => dispatch(getSubcomments(params.id)));
    }

    return (
        <div className='subComment'>
            <p className='subBody'> {props.body} </p>
            <p className='commentAuthor'> {props.author} </p> 
            { userId === props.userId ?
            <img src={deleteIcon} onClick={handleSubDeletion} alt='Click to Delete This Comment' />
             : '' }
        </div>
    );
}

export default Subcomment;
