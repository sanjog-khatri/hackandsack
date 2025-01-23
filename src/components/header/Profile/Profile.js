import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="profile">
      {/* Profile Image */}
      <div className="profile__image-container" onClick={toggleMenu}>
        <img 
          src="https://via.placeholder.com/50" 
          alt="User Profile" 
          className="profile__image"
        />
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="profile__menu">
          <ul>
            <li>Profile</li>
            <li>Calendar</li>
            <li>Messages</li>
            <li>Account Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
