import React, { useState } from "react";
import './LoginSignUp.css';

const LoginSignUp = () => {

    const [action, setAction] = useState("Registrarse");

    const[name, setName]=useState('');
    const[lastname, setLastName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[favoritegame, setFavoriteGame]=useState('');



    const handleSubmit = () => {
        const inputs = document.querySelectorAll('input');
        let allFieldsFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFieldsFilled = false;
            }
        });

        if (allFieldsFilled) {
            console.log("Form submitted");
        } else {
            alert("Ingresa todos los campos");
        }
    };

    return (
        <div className="container">

            <div className="submit-container">
                <div className={action === "Registrarse" ? "submit gray" : "submit"} onClick={() => { setAction("Registrarse") }}>Registrarse</div>
                <div className={action === "Ingresar" ? "submit gray" : "submit"} onClick={() => { setAction("Ingresar") }}>Ingresar</div>
            </div>

            <div className="underline"></div>

            <div className="inputs">
                {action === "Ingresar" ? null : (
                    <>
                        <div className="input">
                            <input type="text" placeholder="Nombre" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Apellido" value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Usuario" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Videojuego favorito" />
                        </div>
                    </>
                )}

                
                <div className="input">
                            <input type="email" placeholder="Email" />
                        </div>

                <div className="input">
                    <input type="password" placeholder="Contraseña" />
                </div>

                <div className="header">
                    <div className="sign-up-title" onClick={handleSubmit}>{action}</div>
                </div>

            </div>

        </div>
    );
};

export default LoginSignUp;