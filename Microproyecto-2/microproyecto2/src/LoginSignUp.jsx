import React, {useState} from "react";
import './LoginSignUp.css'

const LoginSignUp = () => {

    const [action,setAction] = useState("Registrarse");

    return(
        <div className="container">
            <div className="header">
                <div className="sign-up-title">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Ingresar"?<div></div>:<div className="input">
                    <input type="text" placeholder="Nombre"/>
                </div>}

                {action==="Ingresar"?<div></div>:<div className="input">
                    <input type="text" placeholder="Apellido"/>
                </div>}

                {action==="Ingresar"?<div></div>:<div className="input">
                    <input type="email" placeholder="Email"/>
                </div>}

                {action==="Ingresar"?<div></div>:<div className="input">
                    <input type="text" placeholder="Videojuego favorito"/>
                </div>}



                
                <div className="input">
                    <input type="text" placeholder="Usuario"/>
                </div>
                
                <div className="input">
                    <input type="password" placeholder="Contraseña"/>
                </div>
                
                <div className="submit-container">
                    <div className={action==="Registrarse"?"submit gray":"submit"} onClick={()=>{setAction("Registrarse")}}>Registrarse</div>
                    <div className={action==="Ingresar"?"submit gray":"submit"} onClick={()=>{setAction("Ingresar")}}>Ingresar</div>
                </div>
            </div>

        </div>
    )
}

export default LoginSignUp