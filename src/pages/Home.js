import React from 'react';
import './Home.css';

const Home = ({ games }) => {
  return (
    <div className="home-page">
      <h2>Home Page</h2>
      {games.slice().reverse().map((game, index) => (
        <div key={index} className="game-card">
          <h3>{game.gameName} - {game.gameDate}</h3>
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
              {game.playerStats.map((player, index) => (
                <tr key={index}>
                  <td>{player.name}</td>
                  <td>{player.score}</td>
                  <td>{player.assists}</td>
                  <td>{player.saves}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Home;



