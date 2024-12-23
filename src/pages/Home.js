import React from 'react';
import './Home.css';

const Home = ({ games }) => {
  return (
    <div className="home-page">
      <h2>Home Page</h2>
      {games.map((game, gameIndex) => (
        <div key={gameIndex} className="game-tables">
          <h3>{game.gameName} - {game.gameDate}</h3>
          <p>Winning Team: {game.winningTeam === 'team1' ? 'Team 1' : 'Team 2'}</p>
          <div className="teams-tables">
            <div className="team-table">
              <h4>Team 1</h4>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Assists</th>
                    <th>Saves</th>
                  </tr>
                </thead>
                <tbody>
                  {game.team1.map((playerName, index) => {
                    const player = game.playerStats.find(p => p.name === playerName);
                    return (
                      <tr key={index}>
                        <td>{player.name}</td>
                        <td>{player.score}</td>
                        <td>{player.assists}</td>
                        <td>{player.saves}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="team-table">
              <h4>Team 2</h4>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Assists</th>
                    <th>Saves</th>
                  </tr>
                </thead>
                <tbody>
                  {game.team2.map((playerName, index) => {
                    const player = game.playerStats.find(p => p.name === playerName);
                    return (
                      <tr key={index}>
                        <td>{player.name}</td>
                        <td>{player.score}</td>
                        <td>{player.assists}</td>
                        <td>{player.saves}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;