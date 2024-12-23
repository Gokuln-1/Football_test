import React from 'react';
import './PlayerCard.css'; // Optional CSS for styling

const PlayerCard = ({ player, onEdit, onDelete }) => {
  const isHighScore = player.score > 50; // Example condition for dynamic styling

  return (
    <div className={`player-card ${isHighScore ? 'high-score' : ''}`}>
      <h3>{player.name}</h3>
      <p><strong>Score:</strong> {player.score}</p>
      <p><strong>Saves:</strong> {player.saves}</p>
      <p><strong>Assists:</strong> {player.assists}</p>
      <button onClick={() => onEdit(player)} className="edit-btn">Edit</button>
      <button onClick={() => onDelete(player)} className="delete-btn">Delete</button>
    </div>
  );
};

export default PlayerCard;
