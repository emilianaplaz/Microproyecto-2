import React, { useState } from "react";
import './SignUp.css';

const SignUp = () => {

    const funcSignUp = async(e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email);
    }

    const handleSubmit = () => {
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
            <form onSubmit={logIn}>
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
                        <button className="sign-up-button" type="submit" onClick={handleSubmit}>Registrarse</button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default SignUp;