import React from 'react';
import replyIcon from './commentIcons/replyIcon.png';
import deleteIcon from './commentIcons/deleteIcon.png';
import { useSelector, useDispatch } from 'react-redux';
import { userIDSelector, authenticationSelector } from '../../slices/authSlice';
import { subCommentsSelector, 
    deleteComment, 
    setCommentForDeletion, 
    setIdForReply,
    idForReplySelector,
    setNewSubcommentBody,
    replyBodySelector,
    postSubcomment,
    getSubcomments,
    getComments,
} from '../../slices/commentSlice';
import './comment.css'
import Subcomment from './subcomment';
import { useParams } from 'react-router-dom'

const Comment = (props) => {
    const dispatch = useDispatch();
    const params = useParams();
    const allSubcomments = useSelector(subCommentsSelector);
    const userId = useSelector(userIDSelector);
    const idForReply = useSelector(idForReplySelector);
    const replyBody = useSelector(replyBodySelector);
    const isAuthenticated = useSelector(authenticationSelector);

    const handleDeletion = () => {
        dispatch(deleteComment(props.id)).then(()=>dispatch(getComments));
        dispatch(setCommentForDeletion(props.id));
    }

    const handleReply = () => {
        const data = {
            comment_body: replyBody,
            main_comment_id: idForReply,
            user_id: userId,
            recipe_id: params.id
        }
        dispatch(postSubcomment(data)).then(() => dispatch(getSubcomments(params.id)))
        .then(() => dispatch(setIdForReply('')));
    }
     
    return (
        <div>
            <div className='commentBox'>
                <div className='replyBox' onClick={() => dispatch(setIdForReply(props.id))}> 
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
            
            {/* If the User has selected to reply to this comment, 
            we render a box for them to write their subcomment */}
            { idForReply === props.id ? 
                <div className='addSubcomment'>
                    { isAuthenticated === true ?
                    <div className='subHolder'>
                        <textarea placeholder='Write Your Reply...' type='text' maxLength={255} 
                        className='newCommentTextarea' 
                        onChange={(e) => dispatch(setNewSubcommentBody(e.target.value))} />
                        <button onClick={handleReply}> Submit Reply </button>
                        <p className='closeSub' onClick={() => dispatch(setIdForReply(''))}> X </p>
                    </div>
                    : 
                    <div className='disabledHolder'>
                        <textarea disabled type='text' placeholder='Add a Comment..' /> 
                        <p className='disabledSubTxt'> Please Log in to Reply </p>
                        <p className='closeSub' onClick={() => dispatch(setIdForReply(''))}> X </p>
                    </div>
                    }
                </div>
                : '' }


            <div className='subCommentBox'>
                {/* Here I filter out the subcomments that are related to the main comment */}
                { allSubcomments != null ? allSubcomments.map((subcomment, index) => {
                    if (subcomment.main_comment_id === props.id) {
                     return <Subcomment key={index} author={subcomment.author} body={subcomment.body} 
                     userId={subcomment.user_id} subcommentId={subcomment.subcommentId}
                    /> } else {
                        return ''
                    }
                }) : '' }
            </div>
        </div>
    );
}

export default Comment;
