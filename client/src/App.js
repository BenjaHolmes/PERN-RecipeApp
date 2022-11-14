import React from 'react'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { themeSelector } from './slices/headerSlice';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'
import MainPage from './components/mainPage/mainPage';
import AuthPage from './components/log-in/authPage';

export default function App() {
  const theme = useSelector(themeSelector);
  return (
    <div id={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<> <Header /> <MainPage /> <Footer /> </>} />
            <Route path='/auth' element={<> <Header /> <AuthPage /> <Footer /> </>}/>
                
          </Routes>
        </BrowserRouter>
    </div>
  )
}