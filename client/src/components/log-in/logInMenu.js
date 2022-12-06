import React from 'react';
import './logIn.css'
import OutsideClickHandler from 'react-outside-click-handler';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '../../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../../slices/authSlice';

const LogInMenu = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    return (
        <OutsideClickHandler onOutsideClick={props.logToggle}>
            <div>
                <div className='loginContainer'> 
                    <p onClick={props.logToggle}> X </p>
                    { user === '' ?
                    <div>
                    <button className='topBtn' onClick={()=>navigate('/auth')} > Log In </button>
                    <button onClick={()=>navigate('/auth')}> Register </button>
                    </div>
                    :
                    <div>
                    <button onClick={()=>navigate('/auth')}> Your Account </button>
                    <button onClick={()=> dispatch(logOutUser())}> Log Out </button>
                    </div>
                    }
                </div>
            </div>
        </OutsideClickHandler>
    );
}

export default LogInMenu;
