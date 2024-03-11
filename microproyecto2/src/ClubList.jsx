import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import clubsData from './clubs.json';
import './ClubDetails.jsx';
import ClubDetails from './ClubDetails';

function ClubList() {
  return (
    <Router>
      <div className="page-container">
        <header className="header">
          <h1 className="header-title">Clubs</h1>
        </header>
        <nav className="navigation">
          <ul className="club-list">
            {clubsData.map((club) => (
              <li key={club.ID} className="club-item">
                <Link to={`/clubs/${club.ID}`} className="club-name">{club.nombre}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="main-content">
          <Switch>
            <Route exact path="/">
              <h2>Welcome to the Clubs Page</h2>
              <p>Select a club to view more details.</p>
            </Route>
            <Route path="/clubs/:clubId">
              <ClubDetails club={clubsData.find((club) => club.ID === clubId)} />
            </Route>
          </Switch>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default ClubList;