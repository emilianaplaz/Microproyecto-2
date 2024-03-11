import React, { useState } from "react";
import './SignUp.css';
import { Link } from 'react-router-dom'; 


const Account = () => {

    return (
        <div className="container">
                <div className="submit-container">
                    <div className="title-signup">Cuenta</div>
                </div>

                <div className="underline"></div>

                <div className="inputs">
                    <div className="input">
                        <input type="text" id="account-name" placeholder="Nombre" />
                    </div>
                    <div className="input">
                        <input type="text" id="account-lastname" placeholder="Apellido" />
                    </div>
                    <div className="input">
                        <input type="text" id="account-user" placeholder="Usuario" />
                    </div>
                    <div className="input">
                        <input type="text" id="account-favoritegame" placeholder="Videojuego favorito" />
                    </div>
                    <div className="input">
                        <input type="email" id="account-email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <input type="password" id="account-password" placeholder="Contraseña" />
                    </div>

                    <div className="botones">

                        <div className="header">
                            <button className="editar-btn" type="submit">Editar</button>
                        </div>

                        <div className="redirect-login">
                            <Link to="/homepage"> 
                                <button className="redirect-homepage-btn" type="button" >Atrás</button>
                            </Link>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default Account;