import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import './SignUp.css';
import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app);
import SignUp from "./SignUp";
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [registrando, setRegistrando] = useState(false);
    const navigate = useNavigate(); 

    const functAuth = async (e) => {
        e.preventDefault();
        const correo = document.querySelector('#email').value;
        const contraseña = document.querySelector('#password').value;

        if (registrando) { 
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
            } catch (error) {
                alert('Error al registrar: ' + error.message);
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);
                navigate('/homepage'); 
            } catch (error) {
                alert('El correo o la contraseña son incorrectos');
            }
        }
    }

    return (
        <div className="container">
            <div className="submit-container">
                <div className="title-signup">Ingresar</div>
            </div>

            <div className="underline"></div>

            <form onSubmit={functAuth}>
                <div className="inputs">
                    <div className="input">
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    
                    <div className="input">
                        <input type="password" id="password" placeholder="Contraseña" />
                    </div>

                    <div className="header">
                        <button className="sign-up-button" type="submit">Iniciar sesión</button>
                    </div>

                    <div className="redirect-registro">
                        <h1 className="redirect-registro">No tiene cuenta?</h1>
                        <Link to="/signup"> 
                            <button className="redirect-registro-btn" type="button">Registrarse</button>
                        </Link>
                    </div>
                </div>
            </form>
            
        </div>
    );
};

export default LogIn;

