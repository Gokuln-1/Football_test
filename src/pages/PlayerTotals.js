import React, { useState } from 'react';
import './PlayerTotals.css';

const PlayerTotals = ({ players }) => {
  const [sortCriteria, setSortCriteria] = useState('name');

  const sortedPlayers = [...players].sort((a, b) => {
    if (sortCriteria === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === 'gamesPlayed') {
      return b.gamesPlayed - a.gamesPlayed;
    } else if (sortCriteria === 'wins') {
      return b.wins - a.wins;
    } else if (sortCriteria === 'losses') {
      return b.losses - a.losses;
    } else if (sortCriteria === 'draws') {
      return b.draws - a.draws;
    } else if (sortCriteria === 'winRate') {
      return (b.wins / b.gamesPlayed) - (a.wins / a.gamesPlayed);
    } else if (sortCriteria === 'score') {
      return b.score - a.score;
    } else if (sortCriteria === 'assists') {
      return b.assists - a.assists;
    } else if (sortCriteria === 'saves') {
      return b.saves - a.saves;
    }
    return 0;
  });

  return (
    <div className="player-totals-page">
      <h2>Player Totals</h2>
      <div className="filter-container">
        <label htmlFor="sortCriteria">Sort by: </label>
        <select
          id="sortCriteria"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="gamesPlayed">Games Played</option>
          <option value="wins">Wins</option>
          <option value="losses">Losses</option>
          <option value="draws">Draws</option>
          <option value="winRate">Win Rate</option>
          <option value="score">Total Score</option>
          <option value="assists">Total Assists</option>
          <option value="saves">Total Saves</option>
        </select>
      </div>
      <div className="player-totals-cards">
        <div className="player-totals-card player-totals-header-card">
          <p><strong>Player Name</strong></p>
          <p><strong>Played</strong></p>
          <p><strong>W</strong></p>
          <p><strong>L</strong></p>
          <p><strong>D</strong></p>
          <p><strong>WR</strong></p>
          <p><strong>G</strong></p>
          <p><strong>A</strong></p>
          <p><strong>S</strong></p>
        </div>
        {sortedPlayers.map((player, index) => (
          <div key={index} className="player-totals-card">
            <div className="player-totals-card-content">
              <p>{player.name}</p>
              <p>{player.gamesPlayed || 0}</p>
              <p>{player.wins || 0}</p>
              <p>{player.losses || 0}</p>
              <p>{player.draws || 0}</p>
              <p>{player.gamesPlayed > 0 ? ((player.wins / player.gamesPlayed) * 100).toFixed(2) : 0}%</p>
              <p>{player.score}</p>
              <p>{player.assists}</p>
              <p>{player.saves}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerTotals;