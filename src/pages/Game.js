import React, { useState } from 'react';
import './Game.css';

const Game = ({ players, setPlayers, saveGameData }) => {
  const [gameName, setGameName] = useState('');
  const [gameDate, setGameDate] = useState('');
  const [playerStats, setPlayerStats] = useState(
    players.map((player) => ({
      ...player,
      score: 0,
      assists: 0,
      saves: 0,
    }))
  );

  const updateStat = (index, stat, type) => {
    const updatedStats = [...playerStats];
    if (type === 'increase') {
      updatedStats[index][stat] += 1;
    } else if (type === 'decrease' && updatedStats[index][stat] > 0) {
      updatedStats[index][stat] -= 1;
    }
    setPlayerStats(updatedStats);
  };

  const handleSaveGame = () => {
    if (!gameName || !gameDate) {
      alert('Please provide a game name and date.');
      return;
    }

    const gameData = {
      gameName,
      gameDate,
      playerStats,
    };

    saveGameData(gameData);

    const updatedPlayers = players.map((player) => {
      const gamePlayerStats = playerStats.find((p) => p.name === player.name);
      return {
        ...player,
        score: player.score + gamePlayerStats.score,
        assists: player.assists + gamePlayerStats.assists,
        saves: player.saves + gamePlayerStats.saves,
      };
    });

    setPlayers(updatedPlayers);
    setGameName('');
    setGameDate('');
  };

  return (
    <div className="game-page">
      <h2>Game Page</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Game Name"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
        <input
          type="date"
          value={gameDate}
          onChange={(e) => setGameDate(e.target.value)}
        />
      </form>

      <div className="player-cards">
        {playerStats.map((player, index) => (
          <div key={index} className="player-card">
            <h3>{player.name}</h3>
            <p>
              <strong>Score:</strong>
              <button className="small-btn" onClick={() => updateStat(index, 'score', 'increase')}>+</button>
              {player.score}
              <button className="small-btn" onClick={() => updateStat(index, 'score', 'decrease')}>-</button>
            </p>
            <p>
              <strong>Assists:</strong>
              <button className="small-btn" onClick={() => updateStat(index, 'assists', 'increase')}>+</button>
              {player.assists}
              <button className="small-btn" onClick={() => updateStat(index, 'assists', 'decrease')}>-</button>
            </p>
            <p>
              <strong>Saves:</strong>
              <button className="small-btn" onClick={() => updateStat(index, 'saves', 'increase')}>+</button>
              {player.saves}
              <button className="small-btn" onClick={() => updateStat(index, 'saves', 'decrease')}>-</button>
            </p>
          </div>
        ))}
      </div>

      <button onClick={handleSaveGame}>Save Changes</button>
    </div>
  );
};

export default Game;

