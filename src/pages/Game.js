import React, { useState } from 'react';
import './Game.css';

const Game = ({ players, setPlayers, saveGameData, games }) => {
  const [gameNumber, setGameNumber] = useState('');
  const [gameDate, setGameDate] = useState('');
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [winningTeam, setWinningTeam] = useState('');
  const [playerStats, setPlayerStats] = useState(
    players.map((player) => ({
      ...player,
      score: 0,
      assists: 0,
      saves: 0,
      gamesPlayed: 0,
      wins: 0,
      losses: 0,
      draws: 0,
    }))
  );

  const updateStat = (playerName, stat, type) => {
    const updatedStats = playerStats.map((player) => {
      if (player.name === playerName) {
        return {
          ...player,
          [stat]: type === 'increase' ? player[stat] + 1 : Math.max(player[stat] - 1, 0),
        };
      }
      return player;
    });
    setPlayerStats(updatedStats);
  };

  const handleSaveGame = () => {
    if (!gameNumber || !gameDate || !winningTeam) {
      alert('Please provide a game number, date, and select the winning team.');
      return;
    }

    const gameID = games.length + 1;

    const gameData = {
      gameID,
      gameName: `Game ${gameNumber}`,
      gameDate,
      team1,
      team2,
      winningTeam,
      playerStats,
    };

    saveGameData(gameData);

    const updatedPlayers = players.map((player) => {
      const gamePlayerStats = playerStats.find((p) => p.name === player.name);
      const isTeam1 = team1.includes(player.name);
      const isTeam2 = team2.includes(player.name);
      const isDraw = winningTeam === 'draw' && (isTeam1 || isTeam2);

      return {
        ...player,
        score: player.score + gamePlayerStats.score,
        assists: player.assists + gamePlayerStats.assists,
        saves: player.saves + gamePlayerStats.saves,
        gamesPlayed: player.gamesPlayed + (isTeam1 || isTeam2 ? 1 : 0),
        wins: player.wins + ((winningTeam === 'team1' && isTeam1) || (winningTeam === 'team2' && isTeam2) ? 1 : 0),
        losses: player.losses + ((winningTeam === 'team1' && isTeam2) || (winningTeam === 'team2' && isTeam1) ? 1 : 0),
        draws: player.draws + (isDraw ? 1 : 0),
      };
    });

    setPlayers(updatedPlayers);
    setGameNumber('');
    setGameDate('');
    setTeam1([]);
    setTeam2([]);
    setWinningTeam('');
    setPlayerStats(
      players.map((player) => ({
        ...player,
        score: 0,
        assists: 0,
        saves: 0,
        gamesPlayed: 0,
        wins: 0,
        losses: 0,
        draws: 0,
      }))
    );
  };

  const handleTeamChange = (team, setTeam, playerName) => {
    if (!team.includes(playerName)) {
      setTeam([...team, playerName]);
    }
  };

  const handleRemovePlayer = (team, setTeam, playerName) => {
    setTeam(team.filter((name) => name !== playerName));
  };

  return (
    <div className="game-page">
      <h2>Game Page</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <select value={gameNumber} onChange={(e) => setGameNumber(e.target.value)}>
          <option value="">Select Game Number</option>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>Game {num + 1}</option>
          ))}
        </select>
        <input
          type="date"
          value={gameDate}
          onChange={(e) => setGameDate(e.target.value)}
        />
      </form>

      <div className="teams">
        <div className="team">
          <h3>Team 1</h3>
          <select onChange={(e) => handleTeamChange(team1, setTeam1, e.target.value)}>
            <option value="">Select Player</option>
            {players.map((player, index) => (
              <option key={index} value={player.name}>{player.name}</option>
            ))}
          </select>
          <div className="player-cards">
            {team1.map((playerName, index) => {
              const player = playerStats.find((p) => p.name === playerName);
              return (
                <div key={index} className="player-card">
                  <div className="player-card-header">
                    <p className="player-name"><strong>{player.name}</strong></p>
                  </div>
                  <div className="player-card-info">
                    <div className="player-stat">
                      <strong>Score:</strong>
                      <button className="small-btn" onClick={() => updateStat(player.name, 'score', 'increase')}>+</button>
                      {player.score}
                      <button className="small-btn" onClick={() => updateStat(player.name, 'score', 'decrease')}>-</button>
                    </div>
                    <div className="player-stat">
                      <strong>Assists:</strong>
                      <button className="small-btn" onClick={() => updateStat(player.name, 'assists', 'increase')}>+</button>
                      {player.assists}
                      <button className="small-btn" onClick={() => updateStat(player.name, 'assists', 'decrease')}>-</button>
                    </div>
                    <div className="player-stat">
                      <strong>Saves:</strong>
                      <button className="small-btn" onClick={() => updateStat(player.name, 'saves', 'increase')}>+</button>
                      {player.saves}
                      <button className="small-btn" onClick={() => updateStat(player.name, 'saves', 'decrease')}>-</button>
                    </div>
                  </div>
                  <div className="player-card-footer">
                    <button className="remove-btn" onClick={() => handleRemovePlayer(team1, setTeam1, playerName)}>✖</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="team">
          <h3>Team 2</h3>
          <select onChange={(e) => handleTeamChange(team2, setTeam2, e.target.value)}>
            <option value="">Select Player</option>
            {players.map((player, index) => (
              <option key={index} value={player.name}>{player.name}</option>
            ))}
          </select>
          <div className="player-cards">
            {team2.map((playerName, index) => {
              const player = playerStats.find((p) => p.name === playerName);
              return (
                <div key={index} className="player-card">
                  <div className="player-card-header">
                    <p className="player-name"><strong>{player.name}</strong></p>
                  </div>
                  <div className="player-card-info">
                    <div className="player-stat">
                      <strong>Score:</strong>
                      <button className="small-btn" onClick={() => updateStat(player.name, 'score', 'increase')}>+</button>
                      {player.score}
                      <button className="small-btn" onClick={() => updateStat(player.name, 'score', 'decrease')}>-</button>
                    </div>
                    <div className="player-stat">
                      <strong>Assists:</strong>
                      <button className="small-btn" onClick={() => updateStat(player.name, 'assists', 'increase')}>+</button>
                      {player.assists}
                      <button className="small-btn" onClick={() => updateStat(player.name, 'assists', 'decrease')}>-</button>
                    </div>
                    <div className="player-stat">
                      <strong>Saves:</strong>
                      <button className="small-btn" onClick={() => updateStat(player.name, 'saves', 'increase')}>+</button>
                      {player.saves}
                      <button className="small-btn" onClick={() => updateStat(player.name, 'saves', 'decrease')}>-</button>
                    </div>
                  </div>
                  <div className="player-card-footer">
                    <button className="remove-btn" onClick={() => handleRemovePlayer(team2, setTeam2, playerName)}>✖</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="radio-inputs">
        <label className="radio">
          <input
            type="radio"
            name="winningTeam"
            value="team1"
            checked={winningTeam === 'team1'}
            onChange={() => setWinningTeam('team1')}
          />
          <span className="name">Team 1</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="winningTeam"
            value="team2"
            checked={winningTeam === 'team2'}
            onChange={() => setWinningTeam('team2')}
          />
          <span className="name">Team 2</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="winningTeam"
            value="draw"
            checked={winningTeam === 'draw'}
            onChange={() => setWinningTeam('draw')}
          />
          <span className="name">Draw</span>
        </label>
      </div>

      <button onClick={handleSaveGame}>Save Changes</button>
    </div>
  );
};

export default Game;