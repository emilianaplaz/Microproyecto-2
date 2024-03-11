import React from 'react';
import './HomePage.css'; 
import clubsData from './clubs.json';
import { Link } from 'react-router-dom'; 
import { FaUser } from 'react-icons/fa';
import videojuegosData from './videojuegos.json';


function ClubList() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [showGames, setShowGames] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);

  const handleClubClick = (club) => {
    setSelectedClub(club);
  };

  const handleBackClick = () => {
    setSelectedClub(null);
  };

  const getVideojuegoById = (id) => {
    return videojuegosData.find((videojuego) => videojuego.ID === id);
  };

  const handleAfiliarseClick = () => {
    // codigo para afiliarse
  };

  const handleViewGamesClick = () => {
    setShowGames(true);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    filterGames(event.target.value);
  };

  const filterGames = (query) => {
    const filtered = videojuegosData.filter((videojuego) =>
      videojuego.titulo.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  if (selectedClub) {
    return (
      <div className="club-info-container">
        <h2 className="club-info-title">{selectedClub.nombre}</h2>
        <p className="club-info-description">{selectedClub.descripcion}</p>
        <h3 className="videojuegos-title">Videojuegos:</h3>
        <ul className="videojuegos-list">
          {selectedClub.videojuegos.map((videojuegoId) => {
            const videojuego = getVideojuegoById(videojuegoId);
            return (
              <li key={videojuego.ID} className="videojuego-item">
                <h4>{videojuego.titulo}</h4>
                <p>Género: {videojuego.genero}</p>
                <p>{videojuego.descripcion}</p>
              </li>
            );
          })}
        </ul>
        <button className="afiliarse-button" onClick={handleAfiliarseClick}>
          Afiliarse a este club
        </button>
        <button className="back-button" onClick={handleBackClick}>
          Volver al listado
        </button>
      </div>
    );
  }

  if (showGames) {
    return (
      <div className="club-list-container">
        <h1 className="club-list-title">Vista por juego</h1>
        <input
          type="text"
          placeholder="Buscar por juego"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="search-input"
        />
        <ul className="videojuegos-list">
          {filteredGames.map((videojuego) => (
            <li key={videojuego.ID} className="videojuego-item">
              <h4>{videojuego.titulo}</h4>
              <p>Género: {videojuego.genero}</p>
              <p>{videojuego.descripcion}</p>
            </li>
          ))}
        </ul>
        <button className="back-button" onClick={() => setShowGames(false)}>
          Volver al listado de clubes
        </button>
      </div>
    );
  }

  return (
    <div className="club-list-container">
      <h1 className="club-list-title">Bienvenido al Club de Videojuegos!</h1>
      <button className="view-games-button" onClick={handleViewGamesClick}>
        Vista por juego
      </button>
      <ul className="club-list">
        {clubsData.map((club) => (
          <li key={club.ID} className="club-item">
            <h2 className="club-name">{club.nombre}</h2>
            <p className="club-description">{club.descripcion}</p>
            <button className="club-button" onClick={() => handleClubClick(club)}>
              Ver más
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClubList;