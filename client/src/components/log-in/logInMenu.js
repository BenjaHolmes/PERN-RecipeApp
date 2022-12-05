import React from 'react';
import './logIn.css'
import OutsideClickHandler from 'react-outside-click-handler';
import { useNavigate } from 'react-router-dom';
import { authenticationSelector } from '../../slices/authSlice';
import { useSelector } from 'react-redux';

const LogInMenu = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(authenticationSelector);

    return (
        <OutsideClickHandler onOutsideClick={props.logToggle}>
            <div>
                <div className='loginContainer'> 
                    <p onClick={props.logToggle}> X </p>
                    { isAuthenticated === false ?
                    <div>
                    <button className='topBtn' onClick={()=>navigate('/auth')} > Log In </button>
                    <button onClick={()=>navigate('/auth')}> Register </button>
                    </div>
                    :
                    <button onClick={()=>navigate('/auth')}> Your Account </button>
                    }
                </div>
            </div>
        </OutsideClickHandler>
    );
}

export default LogInMenu;
