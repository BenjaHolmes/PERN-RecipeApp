import React from 'react';
import './logIn.css';
import { setLogInUsername, setLogInPassword,
    setRegisterUsername, setRegisterEmail, setRegisterPassword,
    logInUsernameSelector, logInPasswordSelector,
    registerUsernameSelector, registerEmailSelector, registerPasswordSelector,
    registerUser
} from '../../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';


const AuthPage = () => {
    const dispatch = useDispatch();
    const registerUsername = useSelector(registerUsernameSelector);
    const registerEmail = useSelector(registerEmailSelector);
    const registerPassword = useSelector(registerPasswordSelector);
    const handleLogIn = () => {

    }
    const handleRegister = () => {
        const data = {
            username: registerUsername,
            email: registerEmail,
            password: registerPassword  
        }
        dispatch(registerUser(data))
    };

    const handleGetUser = () => {

    }
    return (
        <div>
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
            <div className='accountBox'>
                <h3> Get User</h3>
                <button onClick={handleGetUser}> Submit </button>
            </div>
        </div>
    );
}

export default AuthPage;
