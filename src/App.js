import React, { Profiler } from 'react'
import './App.css'
import Dialogs from './components/dialogs/Dialogs'
import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import Profile from './components/profile/Profile'
import {Route} from 'react-router-dom'
import { Routes } from 'react-router-dom'
const App = () => 
    <div className='app_wrapper'>
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dialogs/*' element={<Dialogs/>}/>
      </Routes>
    </div>

export default App

