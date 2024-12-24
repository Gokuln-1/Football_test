import React, { useState } from 'react';
import './Home.css';

const Home = ({ games, setGames, players, setPlayers }) => {
  const [gameToDelete, setGameToDelete] = useState(null);
  const [confirmationText, setConfirmationText] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const handleDeleteGame = (game) => {
    setGameToDelete(game);
  };

  const confirmDeleteGame = () => {
    if (confirmationText === 'delete') {
      const updatedPlayers = players.map((player) => {
        const playerStats = gameToDelete?.playerStats?.find((p) => p.name === player.name);
        if (playerStats) {
          return {
            ...player,
            score: player.score - playerStats.score,
            assists: player.assists - playerStats.assists,
            saves: player.saves - playerStats.saves,
            gamesPlayed: player.gamesPlayed - 1,
            wins: player.wins - ((gameToDelete.winningTeam === 'team1' && gameToDelete.team1.includes(player.name)) || (gameToDelete.winningTeam === 'team2' && gameToDelete.team2.includes(player.name)) ? 1 : 0),
            losses: player.losses - ((gameToDelete.winningTeam === 'team1' && gameToDelete.team2.includes(player.name)) || (gameToDelete.winningTeam === 'team2' && gameToDelete.team1.includes(player.name)) ? 1 : 0),
            draws: player.draws - (gameToDelete.winningTeam === 'draw' ? 1 : 0),
          };
        }
        return player;
      });

      setPlayers(updatedPlayers);
      setGames(games.filter((game) => game.gameID !== gameToDelete.gameID));
      setGameToDelete(null);
      setConfirmationText('');
    } else {
      alert('Please type "delete" to confirm.');
    }
  };

  const cancelDeleteGame = () => {
    setGameToDelete(null);
    setConfirmationText('');
  };

  const filteredGames = filterDate
    ? games.filter((game) => game.gameDate === filterDate)
    : games;

  return (
    <div className="home-page">
      <h2>Home Page</h2>
      <div className="filter-section">
        <label htmlFor="filter-date">Filter by Date:</label>
        <select
          id="filter-date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        >
          <option value="">All Dates</option>
          {[...new Set(games.map((game) => game.gameDate))].map((date, index) => (
            <option key={index} value={date}>{date}</option>
          ))}
        </select>
      </div>
      <div className="game-list">
        {filteredGames.map((game, index) => (
          <div key={index} className="game-card">
            <h3>{game.gameName} (ID: {game.gameID})</h3>
            <p>Date: {game.gameDate}</p>
            <p>Winning Team: {game.winningTeam}</p>
            <div className="team-tables">
              <div className="team-table">
                <h4>Team 1</h4>
                <table className="player-stats-table">
                  <thead>
                    <tr>
                      <th>Player Name</th>
                      <th>Score</th>
                      <th>Assists</th>
                      <th>Saves</th>
                    </tr>
                  </thead>
                  <tbody>
                    {game.playerStats
                      .filter((player) => game.team1.includes(player.name))
                      .map((player, idx) => (
                        <tr key={idx}>
                          <td>{player.name}</td>
                          <td>{player.score}</td>
                          <td>{player.assists}</td>
                          <td>{player.saves}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="team-table">
                <h4>Team 2</h4>
                <table className="player-stats-table">
                  <thead>
                    <tr>
                      <th>Player Name</th>
                      <th>Score</th>
                      <th>Assists</th>
                      <th>Saves</th>
                    </tr>
                  </thead>
                  <tbody>
                    {game.playerStats
                      .filter((player) => game.team2.includes(player.name))
                      .map((player, idx) => (
                        <tr key={idx}>
                          <td>{player.name}</td>
                          <td>{player.score}</td>
                          <td>{player.assists}</td>
                          <td>{player.saves}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <button className="delete-btn" onClick={() => handleDeleteGame(game)}>Delete Game</button>
          </div>
        ))}
      </div>

      {gameToDelete && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete {gameToDelete.gameName}? Type "delete" to confirm.</p>
          <input
            type="text"
            value={confirmationText}
            onChange={(e) => setConfirmationText(e.target.value)}
            placeholder="Type 'delete' to confirm"
          />
          <button onClick={confirmDeleteGame}>Confirm</button>
          <button onClick={cancelDeleteGame}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Home;