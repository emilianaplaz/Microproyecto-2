import { useState } from 'react'
import './App.css'
import LogIn from './Login'
import SignUp from './SignUp'
import HomePage from './HomePage'

import app from './firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(app)

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App