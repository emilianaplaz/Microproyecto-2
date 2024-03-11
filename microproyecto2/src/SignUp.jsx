import React, { useState } from "react";
import './SignUp.css';
import { Link } from 'react-router-dom'; 


const SignUp = () => {

    return (
        <div className="container">
                <div className="submit-container">
                    <div className="title-signup">Registrarse</div>
                </div>

                <div className="underline"></div>

                <div className="inputs">
                    <div className="input">
                        <input type="text" id="name" placeholder="Nombre"/>
                    </div>
                    <div className="input">
                        <input type="text" id="lastname" placeholder="Apellido" />
                    </div>
                    <div className="input">
                        <input type="text" id="user" placeholder="Usuario" />
                    </div>
                    <div className="input">
                        <input type="text" id="favoritegame" placeholder="Videojuego favorito" />
                    </div>
                    <div className="input">
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <input type="password" id="password" placeholder="Contraseña" />
                    </div>

                    <div className="header">
                        <button className="sign-up-button" type="submit">Registrarse</button>
                    </div>

                    <div className="redirect-login">
                    <h1 className="redirect-login">Ya tiene cuenta?</h1>
                    <Link to="/login"> 
                        <button className="redirect-login-btn" type="button" >Ingresar</button>
                    </Link>
                </div>

                </div>
        </div>
    );
};

export default SignUp;