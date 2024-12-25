import React from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledButton onClick={toggleDarkMode} isDarkMode={isDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#555' : '#ddd')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
`;

export default DarkModeToggle;