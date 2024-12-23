import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Players from './pages/Players';
import PlayerTotals from './pages/PlayerTotals';
import Game from './pages/Game';

function App() {
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);

  const saveGameData = (gameData) => {
    setGames([...games, gameData]);
  };

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/players" element={<Players players={players} setPlayers={setPlayers} />} />
          <Route path="/player-totals" element={<PlayerTotals players={players} />} />
          <Route path="/game" element={<Game players={players} setPlayers={setPlayers} saveGameData={saveGameData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


