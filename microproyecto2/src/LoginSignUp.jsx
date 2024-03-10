import React, { useState } from "react";
import './LoginSignUp.css';

const LoginSignUp = () => {

    const [action, setAction] = useState("Registrarse");

    const[name, setName]=useState('');
    const[lastname, setLastName]=useState('');
    const[user, setUser]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[favoritegame, setFavoriteGame]=useState('');

    const logIn = () => {
        // sign in
    }

    // Check que los inputs esten llenos
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
            <form onSubmit={logIn}>
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
                            <input type="text" placeholder="Usuario" value={user} onChange={(e)=>setUser(e.target.value)}/>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Videojuego favorito" value={favoritegame} onChange={(e)=>setFavoriteGame(e.target.value)}/>
                        </div>
                    </>
                )}

                
                <div className="input">
                            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>

                <div className="input">
                    <input type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="header">
                    <button className="sign-up-button" type="submit" onClick={handleSubmit}>{action}</button>
                </div>

            </div>
            </form>
        </div>
    );
};

export default LoginSignUp;