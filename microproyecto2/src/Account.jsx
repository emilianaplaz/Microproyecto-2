import './SignUp.css';
import { Link } from 'react-router-dom'; 
import db from './firebase'; 
import React, { useState, useEffect } from "react";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';


const Account = () => {
    const [userData, setUserData] = useState({
        name: "",
        lastname: "",
        username: "",
        favoriteGame: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const usersCollectionRef = collection(db, 'usuarios');
            const q = query(usersCollectionRef, where('email', '==', 'USER_EMAIL_HERE')); // Replace 'USER_EMAIL_HERE' with the user's email

            try {
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    setUserData(doc.data());
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="container">
            <div className="submit-container">
                <div className="title-signup">Cuenta</div>
            </div>

            <div className="underline"></div>

            <div className="inputs">
                <div className="input">
                    <input type="text" id="account-name" placeholder="Nombre" value={userData.name} />
                </div>
                <div className="input">
                    <input type="text" id="account-lastname" placeholder="Apellido" value={userData.lastname} />
                </div>
                <div className="input">
                    <input type="text" id="account-user" placeholder="Usuario" value={userData.username} />
                </div>
                <div className="input">
                    <input type="text" id="account-favoritegame" placeholder="Videojuego favorito" value={userData.favoriteGame} />
                </div>
                <div className="input">
                    <input type="email" id="account-email" placeholder="Email" value={userData.email} />
                </div>
                <div className="input">
                    <input type="password" id="account-password" placeholder="Contraseña" value={userData.password} />
                </div>

                <div className="botones">
                    <div className="header">
                        <button className="editar-btn" type="submit">Editar</button>
                    </div>

                    <div className="redirect-login">
                        <Link to="/homepage"> 
                            <button className="redirect-homepage-btn" type="button">Atrás</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;