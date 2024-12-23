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
            <p><strong>Games Played:</strong> {player.gamesPlayed || 0}</p>
            <p><strong>Wins:</strong> {player.wins || 0}</p>
            <p><strong>Losses:</strong> {player.losses || 0}</p>
            <p><strong>Draws:</strong> {player.draws || 0}</p>
            <p><strong>Win Rate:</strong> {player.gamesPlayed > 0 ? ((player.wins / player.gamesPlayed) * 100).toFixed(2) : 0}%</p>
            <p><strong>Total Score:</strong> {player.score}</p>
            <p><strong>Total Assists:</strong> {player.assists}</p>
            <p><strong>Total Saves:</strong> {player.saves}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerTotals;