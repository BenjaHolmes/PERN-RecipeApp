import React from 'react';
import './logIn.css'
import OutsideClickHandler from 'react-outside-click-handler';
import { useNavigate } from 'react-router-dom';

const LogInMenu = (props) => {
    const navigate = useNavigate();
    return (
        <OutsideClickHandler onOutsideClick={props.logToggle}>
            <div>
                <div className='loginContainer'> 
                    <p onClick={props.logToggle}> X </p>
                    <button className='topBtn' onClick={()=>navigate('/auth')} > Log In </button>
                    <button> Register </button>
                    <button> Your Account </button>
                </div>
            </div>
        </OutsideClickHandler>
    );
}

export default LogInMenu;
