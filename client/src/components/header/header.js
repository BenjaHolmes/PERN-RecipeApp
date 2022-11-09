import React from 'react'
import './header.css'
import logo from './logo1.png';
import Menu from './menuIcons/menuIcon.png';
import Cart from './menuIcons/cartIcon.png';
import Switch from './menuIcons/switchIcon.png';
import Account from './menuIcons/accountIcon.png';
import Info from './menuIcons/infoIcon.png';
import HomePage from './menuIcons/homepageIcon.png';
import LogIn from '../../log-in/logIn';
import { themeSelector, menuSelector, themeToggle, menuToggle, logInSelector, logInToggle } from '../../slices/headerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function Header() {
    const dispatch = useDispatch();
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
    <div className='header-container'>
        <div className='left-side'>
            <img src={logo} className='logo' alt='The Sites Logo of an Apple, Knife and Fork' />
            <h1> Midweek Meal Planner </h1>
        </div>
        <div className='right-side'>
            {menuOpen === true  ? 
            <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{type: 'tween', duration: .65}} className='menu-buttons'>
                <img src={HomePage} alt='Press for Home Page' />
                <img src={Info} alt='Press for Info Page'/>
                <img src={Cart} alt='Press for Shopping List Generation Page'/>
                <img src={Account} onClick={accountClicked} alt='Press for Account Page'/>
                <img src={Switch} onClick={themeClicked} alt='Press to Switch between Light and Dark Mode'/>
            </motion.div>
            : ''}
            {logInOpen === true ?
                <LogIn />
            : ''}
            <img src={Menu} onClick={menuClicked} className='menu-logo' alt='Button Which Opens the Menu' />
        </div>
    </div>
  )
}