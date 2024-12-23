import React, { useState } from 'react';
import './Players.css';

const Players = ({ players, setPlayers }) => {
  const [newPlayerName, setNewPlayerName] = useState('');

  const addPlayer = () => {
    if (newPlayerName.trim() !== '') {
      const newPlayer = {
        name: newPlayerName,
        score: 0,
        assists: 0,
        saves: 0,
        gamesPlayed: 0,
        wins: 0,
        losses: 0,
        draws: 0,
      };
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

      <div className="player-list">
        {players.map((player, index) => (
          <div key={index} className="player-item">
            {player.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
