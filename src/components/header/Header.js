import React, { useState } from 'react';
import { FaBell, FaCamera, FaSearch } from 'react-icons/fa';
import './Header.css';
import Profile from './Profile/Profile';
import Notifications from '../header/notification/Notification';

const Header = () => {
  const [companyName, setCompanyName] = useState('Your Company Name');
  const [logo, setLogo] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState(companyName);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleCompanyNameChange = (e) => setNewCompanyName(e.target.value);
  const handleSaveCompanyName = () => {
    setCompanyName(newCompanyName.trim() || companyName);
    setIsEditingName(false);
  };

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

  const getCurrentTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="header">
      {/* Left Section: Company Logo and Name */}
      <div className="header__left">
        <div className="header__logo-section">
          {logo ? (
            <img src={logo} alt="Company Logo" className="header__logo" />
          ) : (
            <button
              onClick={() => document.getElementById('logo-upload').click()}
              className="header__camera-icon"
              title="Upload Logo"
            >
              <FaCamera />
            </button>
          )}
          <input
            id="logo-upload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleLogoUpload}
          />
        </div>
        {isEditingName ? (
          <div className="header__edit-name">
            <input
              type="text"
              value={newCompanyName}
              onChange={handleCompanyNameChange}
              className="header__name-input"
              placeholder="Enter Company Name"
            />
            <button onClick={handleSaveCompanyName} className="header__save-btn">
              Save
            </button>
          </div>
        ) : (
          <h1 className="header__company-name" onClick={() => setIsEditingName(true)} title="Edit Name">
            {companyName}
          </h1>
        )}
      </div>

      {/* Center Section: Search Bar */}
      <div className="header__search">
        <FaSearch className="header__search-icon" />
        <input
          type="text"
          className="header__search-input"
          placeholder="Search..."
        />
      </div>

      {/* Right Section: Icons for Notifications and Profile */}
      <div className="header__right">
        <button
          onClick={() => setShowNotifications((prev) => !prev)}
          className="header__notification-icon"
          title="Notifications"
        >
          <FaBell />
        </button>
        <div className="header__profile">
          <Profile />
        </div>
      </div>

      {/* Notifications Component */}
      {showNotifications && <Notifications getCurrentTime={getCurrentTime} />}
    </header>
  );
};

export default Header;
