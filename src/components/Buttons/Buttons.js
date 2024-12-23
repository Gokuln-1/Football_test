// src/Buttons.js
import React from 'react';
import './Buttons.css';

function Button({ Test, onClick, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {Test}
    </button>
  );
}

export default Button;
