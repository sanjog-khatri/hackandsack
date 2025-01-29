// Themes.js
import React, { useState } from 'react';
import './Themes.css';

const Themes = () => {
  const [themes] = useState([
    { id: 1, name: 'Light Theme', description: 'A bright and airy theme', image: 'https://via.placeholder.com/150/FFFFFF' },
    { id: 2, name: 'Dark Theme', description: 'A sleek and modern theme', image: 'https://via.placeholder.com/150/333333' },
  ]);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="themes-container">
      <h4>Themes</h4>
      <div className="themes-cards">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className="theme-card"
            onClick={() => handleThemeClick(theme)}
          >
            <img src={theme.image} alt={theme.name} />
            <h5>{theme.name}</h5>
            <p>{theme.description}</p>
            <button className="update-button">Update Customization</button>
          </div>
        ))}
      </div>
      {selectedTheme && (
        <div className="theme-details">
          <h5>Selected Theme: {selectedTheme.name}</h5>
          <p>{selectedTheme.description}</p>
        </div>
      )}
    </div>
  );
};

export default Themes;
