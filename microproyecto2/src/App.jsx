import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; 
import HomePage from './HomePage'; 
import SignUp from './SignUp'; 
import Account from './Account'; 

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;