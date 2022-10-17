import React, { Profiler } from 'react'
import './App.css'
import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import Profile from './components/profile/Profile'

const App = () => 
    <div className='app_wrapper'>
      <Header/>
      <Nav/>
      <Profile/>
    </div>

export default App

