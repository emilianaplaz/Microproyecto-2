import React from 'react';
import './HomePage.css'; 
import clubsData from './clubs.json';
import { Link } from 'react-router-dom'; 
import { FaUser } from 'react-icons/fa';


function ClubList() {
  return (
    <div className="club-list-container">
        <div className="account">
        <Link to="/account"> 
                <button className="account-btn">
                    <FaUser className="icon" /> 
                </button>
            </Link>
        </div>
      <h1 className="club-list-title">Bienvenido al Clubs de Videojuegos!</h1>
      <ul className="club-list">
        {clubsData.map((club) => (
          <li key={club.ID} className="club-item">
            <h2 className="club-name">{club.nombre}</h2>
            <p className="club-description">{club.descripcion}</p>
            <h3 className="videojuegos-title">Videojuegos:</h3>
            <ul className="videojuegos-list">
              {club.videojuegos.map((videojuego) => (
                <li key={videojuego} className="videojuego-item">{videojuego}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClubList;