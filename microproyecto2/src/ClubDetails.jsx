import React from 'react';

function ClubDetails({ club }) {
  return (
    <div>
      <h2>{club.nombre}</h2>
      <p>{club.descripcion}</p>
      <h3>Videojuegos:</h3>
      <ul>
        {club.videojuegos.map((videojuego) => (
          <li key={videojuego}>{videojuego}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClubDetails;