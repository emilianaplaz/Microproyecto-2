import React, { useState } from "react";
import app from "./firebase";
import { getAuth,signOut } from "firebase/auth";
const auth = getAuth(app)



const HomePage = () => {
    return(
        <div className="xx">HOMEPAGE
            <button className="logout" onClick={()=>signOut(auth)}>Salir</button>
        </div>

       
    )
    }
   



export default HomePage;