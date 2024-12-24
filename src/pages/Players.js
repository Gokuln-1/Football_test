import React, { useState } from 'react';
import './Players.css';

const Players = ({ players, setPlayers }) => {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [playerToDelete, setPlayerToDelete] = useState(null);
  const [confirmationText, setConfirmationText] = useState('');

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

  const handleDeletePlayer = (playerName) => {
    setPlayerToDelete(playerName);
  };

  const confirmDeletePlayer = () => {
    if (confirmationText === 'delete') {
      setPlayers(players.filter((player) => player.name !== playerToDelete));
      setPlayerToDelete(null);
      setConfirmationText('');
    } else {
      alert('Please type "delete" to confirm.');
    }
  };

  const cancelDeletePlayer = () => {
    setPlayerToDelete(null);
    setConfirmationText('');
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
            <button className="delete-btn" onClick={() => handleDeletePlayer(player.name)}>Delete</button>
          </div>
        ))}
      </div>

      {playerToDelete && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete {playerToDelete}? Type "delete" to confirm.</p>
          <input
            type="text"
            value={confirmationText}
            onChange={(e) => setConfirmationText(e.target.value)}
            placeholder="Type 'delete' to confirm"
          />
          <button onClick={confirmDeletePlayer}>Confirm</button>
          <button onClick={cancelDeletePlayer}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Players;
