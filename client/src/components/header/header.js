import React from 'react'
import './header.css'
import logo from './logo1.png';
import Menu from './menuIcons/menuIcon.png';
import Switch from './menuIcons/switchIcon.png';
import Account from './menuIcons/accountIcon.png';
import Info from './menuIcons/infoIcon.png';
import HomePage from './menuIcons/homepageIcon.png';
import LogInMenu from '../log-in/logInMenu';
import { themeSelector, menuSelector, themeToggle, menuToggle, 
        logInSelector, logInToggle } from '../../slices/headerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const menuOpen = useSelector(menuSelector);
    const theme = useSelector(themeSelector);
    const logInOpen = useSelector(logInSelector)
    const themeClicked = () => {
        if (theme === 'Dark') {
            dispatch(themeToggle('Light'));
        } else {
            dispatch(themeToggle('Dark'));
        }
    }
    const menuClicked = () => {
        dispatch(menuToggle());
    }
    const accountClicked = () => {
        dispatch(logInToggle())
    }
  return (
    <header className='header-container'>
        <div className='left-side'>
            <img src={logo} className='logo' onClick={()=>navigate('/')} 
                alt='The Sites Logo of an Apple, Knife and Fork' />
            <h1> Meal Share App </h1>
        </div>
        <div className='right-side'>
            {/* Animate Prescene is Required to animate the exit of the motion.div before it is removed from the DOM */}
            <AnimatePresence>
                {menuOpen === true  ? 
                <motion.div animate={{opacity: 1}} initial={{opacity: 0}} 
                transition={{type: 'tween', duration: .65}} key='menuBar'
                exit={{opacity: 0}} className='menu-buttons'>
                    <img src={HomePage} onClick={()=>navigate('/')} alt='Press for Home Page' />
                    <img src={Info} onClick={()=>navigate('/info')} alt='Press for Info Page'/>
                    <img src={Account} onClick={accountClicked} alt='Press for Account Page'/>
                    <img src={Switch} onClick={themeClicked} alt='Press to Switch between Light and Dark Mode'/>
                </motion.div>
                : ''}
            </AnimatePresence>
            {logInOpen === true ?
                <LogInMenu logToggle={accountClicked}/>
            : ''}
            <img src={Menu} onClick={menuClicked} className='menu-logo' alt='Button Which Opens the Menu' />
        </div>
    </header>
  )
}