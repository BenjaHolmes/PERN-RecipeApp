import React from 'react';
import './comment.css'
import { useSelector } from 'react-redux';
import { userIDSelector } from '../../slices/authSlice';
import deleteIcon from './commentIcons/deleteIcon.png';


const Subcomment = (props) => {
    const userId = useSelector(userIDSelector);
    return (
        <div className='subComment'>
            <p className='subBody'> {props.body} </p>
            <p className='commentAuthor'> {props.author} </p> 
            { userId === props.userId ?
            <img src={deleteIcon} alt='Click to Delete This Comment' />
             : '' }
        </div>
    );
}

export default Subcomment;
