import React, { useState } from 'react';
import { FaExpandArrowsAlt, FaBars, FaBell, FaSearch } from 'react-icons/fa';
import './Header.css';
import Profile from './Profile/Profile';
import Notifications from '../header/notification/Notification';

const Header = ({ onToggleIconsOnly }) => {
  const [logo, setLogo] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBellActive, setIsBellActive] = useState(false); // Track active state for bell
  const [isSearchActive, setIsSearchActive] = useState(false); // Track active state for search

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleBellClick = () => {
    setIsBellActive((prev) => !prev); // Toggle active state for bell
    setShowNotifications((prev) => !prev); // Toggle notifications
  };

  const handleSearchClick = () => {
    setIsSearchActive((prev) => !prev); // Toggle active state for search
  };

  return (
    <header className="header">
      <div className="header__left">
        <button onClick={onToggleIconsOnly} className="header__icon-button">
          <FaBars size={18} />
        </button>
        <button onClick={toggleFullscreen} className="header__icon-button">
          <FaExpandArrowsAlt size={18} />
        </button>
        <div className="header__logo-section">
          {logo ? (
            <img src={logo} alt="Company Logo" className="header__logo" />
          ) : (
            <span className="header__logo-placeholder">Your Logo</span>
          )}
        </div>
        <h1 className="header__company-name">CompanyName</h1>
      </div>

      <div className="header__search" onClick={handleSearchClick}>
        <FaSearch 
          size={20} 
          className={`header__search-icon ${isSearchActive ? 'active' : ''}`} 
        />
        <input 
          type="text" 
          className="header__search-input" 
          placeholder="Search..." 
        />
      </div>

      <div className="header__right">
        <button onClick={handleBellClick} className="header__notification-icon">
          <FaBell 
            size={20} 
            className={`header__bell-icon ${isBellActive ? 'active' : ''}`} 
          />
        </button>
        <div className="header__profile">
          <Profile />
        </div>
      </div>

      {showNotifications && <Notifications />}
    </header>
  );
};

export default Header;
