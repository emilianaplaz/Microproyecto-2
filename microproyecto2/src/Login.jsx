import React, { useState } from "react";
import './SignUp.css';
import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app);

const LogIn = () => {
    const [registrando, setRegistrando] = useState(false);

    const functAuth = async(e) =>{
         e.preventDefault();
        //  const correo = e.target.email.value;
        //  const contraseña = e.target.password.value;

        const correo = document.querySelector('#email').value;
        const contraseña = document.querySelector('#password').value;

         if (registrando){ 
             await createUserWithEmailAndPassword(auth,correo,contraseña)
         } else {
             await signInWithEmailAndPassword(auth,correo,contraseña)
         }
    }

    const handleSubmit = (e) => {
         e.preventDefault();
         const inputs = document.querySelectorAll('input');
         let allFieldsFilled = true;

         inputs.forEach(input => {
             if (input.value.trim() === "") {
                 allFieldsFilled = false;
             }
         });

         if (allFieldsFilled) {
             console.log("Formulario enviado");
        } else {
             alert("Ingresa todos los campos");
         }
     };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="submit-container">
                    <div className="title-signup">Ingresar</div>
                </div>

                <div className="underline"></div>

                <div className="inputs">
                    <div className="input">
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    
                    <div className="input">
                        <input type="password" id="password" placeholder="Contraseña" />
                    </div>

                    <div className="header">
                        <button className="sign-up-button" type="submit" onClick={functAuth}>Iniciar sesión</button>
                    </div>

                </div>
            </form>

        </div>
    );
};

export default LogIn;

