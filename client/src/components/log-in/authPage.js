import React from 'react';
import './logIn.css';
import { setLogInUsername, setLogInPassword,
    setRegisterUsername, setRegisterEmail, setRegisterPassword,
    logInUsernameSelector, logInPasswordSelector,
    registerUsernameSelector, registerEmailSelector, registerPasswordSelector,
    registerUser, logInUser, getUser, usernameSelector
} from '../../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import MemberArea from '../memberArea/memberArea';
import { useEffect } from 'react';

const AuthPage = () => {
    const dispatch = useDispatch();
    const registerUsername = useSelector(registerUsernameSelector);
    const registerEmail = useSelector(registerEmailSelector);
    const registerPassword = useSelector(registerPasswordSelector);
    const logInUsername = useSelector(logInUsernameSelector);
    const logInPassword = useSelector(logInPasswordSelector);
    const username = useSelector(usernameSelector);
    const handleLogIn = () => {
        const data = {
            username: logInUsername,
            password: logInPassword  
        }
        dispatch(logInUser(data))
    }
    const handleRegister = () => {
        const data = {
            username: registerUsername,
            email: registerEmail,
            password: registerPassword  
        }
        dispatch(registerUser(data))
    };

    // Checks if the user is logged in on page load so correct content loads
    useEffect(() => {
        dispatch(getUser());
    })
    
    return (
        <div>
            { username != null ? <MemberArea /> :
            <div className='authBox'>
                <div className='logIn'>
                    <h2> Log In </h2>
                    <input placeholder='Username' 
                    onChange={e => dispatch(setLogInUsername(e.target.value))}/>
                    <input placeholder='Password' type='password' autoComplete='off' 
                    onChange={e => dispatch(setLogInPassword(e.target.value))} />
                    <button onClick={handleLogIn}> Submit </button>
                </div>
                <div className='register'>
                    <h2> Register</h2>
                    <input placeholder='Username' 
                    onChange={e => dispatch(setRegisterUsername(e.target.value))}/>
                    <input placeholder='Email' 
                    onChange={e => dispatch(setRegisterEmail(e.target.value))}/>
                    <input placeholder='Password' type='password' autoComplete='off'
                    onChange={e => dispatch(setRegisterPassword(e.target.value))}/>
                    <button onClick={handleRegister}> Submit </button>
                </div>
            </div>
            }   
        </div>
    );
}

export default AuthPage;
