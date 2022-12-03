import React from 'react';
import replyIcon from './commentIcons/replyIcon.png';
import deleteIcon from './commentIcons/deleteIcon.png';
import { useSelector, useDispatch } from 'react-redux';
import { userIDSelector } from '../../slices/authSlice';
import { subCommentsSelector, deleteComment, setCommentForDeletion } from '../../slices/commentSlice';
import './comment.css'
import Subcomment from './subcomment';

const Comment = (props) => {
    const dispatch = useDispatch();
    const allSubcomments = useSelector(subCommentsSelector);
    const userId = useSelector(userIDSelector);

    const handleDeletion = () => {
        dispatch(deleteComment(props.id));
        dispatch(setCommentForDeletion(props.id));
    }
     
    return (
        <div>
            <div className='commentBox'>
                <div className='replyBox'> 
                    <img src={replyIcon} alt='Click to Reply to This Comment'/>
                    <p> Reply </p> 
                </div>
                <div className='bodyBox'> 
                    <p className='commentContent'> {props.body} </p> 
                    <p className='commentAuthor'> {props.author} </p> 
                </div>
                <div className='trashBox'>
                    { userId === props.userId ? 
                    <img src={deleteIcon} className='trashCan' alt='Click to Delete This Comment' 
                    onClick={handleDeletion}/>
                    : '' }
                </div>
            </div>
            <div className='subCommentBox'>
                {/* Here I filter out the subcomments that are related to the main comment */}
                { allSubcomments != null ? allSubcomments.map((subcomment, index) => {
                    if (subcomment.main_comment_id === props.id) {
                     return <Subcomment key={index} author={subcomment.author} body={subcomment.body} 
                     userId={subcomment.user_id}
                    /> } else {
                        return ''
                    }
                }) : '' }
            </div>
        </div>
    );
}

export default Comment;
