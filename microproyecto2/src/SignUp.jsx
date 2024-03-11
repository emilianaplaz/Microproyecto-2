import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 
import app from "./firebase";
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const SignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [favoriteGame, setFavoriteGame] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [registrando, setRegistrando] = useState(false); 

    const functSignUp = async () => {
        const correo = document.querySelector('#signup-email').value;
        const contraseña = document.querySelector('#signup-password').value;

        try {
            setRegistrando(true); 
            await createUserWithEmailAndPassword(auth, correo, contraseña);
            console.log('usuario creado')
            navigate('/login'); 
        } catch (error) {
            alert('Error al registrar: ' + error.message);
        } finally {
            setRegistrando(false); 
        }
    }

    return (
        <div className="container">
            <div className="submit-container">
                <div className="title-signup">Registrarse</div>
            </div>

            <div className="underline"></div>

            <div className="inputs">
                <div className="input">
                    <input type="text" id="signup-name" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" id="signup-lastname" placeholder="Apellido" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" id="signup-user" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" id="signup-favoritegame" placeholder="Videojuego favorito" onChange={(e) => setFavoriteGame(e.target.value)} />
                </div>
                <div className="input">
                    <input type="email" id="signup-email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <input type="password" id="signup-password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="header">
                    <button className="sign-up-button" onClick={functSignUp}>Registrarse</button>
                </div>
            </div>

            <div className="redirect-login">
                <h1 className="redirect-login">¿Ya tiene cuenta?</h1>
                <Link to="/login"> 
                    <button className="redirect-login-btn" type="button">Ingresar</button>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;