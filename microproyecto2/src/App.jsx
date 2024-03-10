import { useState } from 'react'
import './App.css'
import LogIn from './Login'
import SignUp from './SignUp'
import HomePage from './HomePage'

import app from './firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(app)

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }
  })

  return (
      <div>
        {usuario ? <HomePage correoUsuario = {usuario.email}/> : <LogIn/>}
      </div>
  )
}

export default App