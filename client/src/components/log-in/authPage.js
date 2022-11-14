import React from 'react';
import './logIn.css';

const AuthPage = () => {
    return (
        <div>
            <div className='authBox'>
                <div className='logIn'>
                    <h2> Log In </h2>
                    <input placeholder='Username' />
                    <input placeholder='Password' type='password' autoComplete='off' />
                    <button> Submit </button>
                </div>
                <div className='register'>
                    <h2> Register</h2>
                    <input placeholder='Username' />
                    <input placeholder='Email' />
                    <input placeholder='Password' type='password' autoComplete='off' />
                    <button> Submit </button>
                </div>
            </div>
            <div className='accountBox'>
                <h3> Get User</h3>
                <button> Submit </button>
            </div>
        </div>
    );
}

export default AuthPage;
