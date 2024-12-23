import React, { useState } from 'react';
import './Players.css';

const Players = ({ players, setPlayers }) => {
  const [newPlayerName, setNewPlayerName] = useState('');

  const addPlayer = () => {
    if (newPlayerName.trim() !== '') {
      const newPlayer = { name: newPlayerName, score: 0, assists: 0, saves: 0 };
      setPlayers([...players, newPlayer]);
      setNewPlayerName('');
    }
  };

  return (
    <div className="player-page">
      <h2>Players</h2>
      <div className="add-player-form">
        <input
          type="text"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          placeholder="Enter player name"
        />
        <button onClick={addPlayer}>Add Player</button>
      </div>

      <div className="player-cards">
        {players.map((player, index) => (
          <div key={index} className="player-card">
            <h3>{player.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;