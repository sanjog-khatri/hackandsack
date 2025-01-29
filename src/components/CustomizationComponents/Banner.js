// Banners.js
import React, { useState } from 'react';
import './Banner.css';

const Banners = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSaveChanges = () => {
    // Implement the save functionality for banners
    alert('Changes saved!');
  };

  return (
    <div className="banners-container">
      <h4>Banners</h4>
      <div className="banner-upload">
        <div className="banner-upload-box">
          <p>Choose a file to upload</p>
          <input type="file" onChange={handleFileChange} accept="image/*" />
          {file && (
            <div className="file-details">
              <p>File selected: {file.name}</p>
            </div>
          )}
        </div>
        <button className="save-changes-button" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Banners;
