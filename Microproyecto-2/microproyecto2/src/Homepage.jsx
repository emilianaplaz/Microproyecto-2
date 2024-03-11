import React from 'react';
import clubsData from './clubs.json';
import './Homepage.css'

function ClubList() {
  return (
    <div>
      <h1>Clubs</h1>
      <ul>
        {clubsData.map((club) => (
          <li key={club.ID}>
            <h2>{club.nombre}</h2>
            <p>{club.descripcion}</p>
            <h3>Videojuegos:</h3>
            <ul>
              {club.videojuegos.map((videojuego) => (
                <li key={videojuego}>{videojuego}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClubList;