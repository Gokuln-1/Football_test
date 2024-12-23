import React from 'react';
import './PlayerTotals.css';

const PlayerTotals = ({ players }) => {
  return (
    <div className="player-totals-page">
      <h2>Player Totals</h2>
      <div className="player-cards">
        {players.map((player, index) => (
          <div key={index} className="player-card">
            <h3>{player.name}</h3>
            <p><strong>Score:</strong> {player.score}</p>
            <p><strong>Saves:</strong> {player.saves}</p>
            <p><strong>Assists:</strong> {player.assists}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerTotals;
