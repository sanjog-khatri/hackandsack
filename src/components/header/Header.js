import React, { useState } from 'react';
import Lottie from 'react-lottie';  // Import Lottie
import './Header.css';
import Profile from './Profile/Profile';
import Notifications from '../header/notification/Notification';
import * as bellAnimation from '../../assets/icons/white_notification_bell.json'; 
import * as searchAnimation from '../../assets/icons/black_search.json'; 

const Header = () => {
  const [logo, setLogo] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

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

  // Lottie options for the bell animation
  const bellAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: bellAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Lottie options for the search animation
  const searchAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: searchAnimation,  // Replace with your search animation JSON
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <header className="header">
      {/* Left Section: Company Logo and Static Name */}
      <div className="header__left">
        <div className="header__logo-section">
          {/* Display the logo here if available */}
          {logo ? (
            <img src={logo} alt="Company Logo" className="header__logo" />
          ) : (
            <span className="header__logo-placeholder">Your Logo</span>  
          )}
        </div>
        {/* Static Company Name */}
        <h1 className="header__company-name">
          CompanyName
        </h1>
      </div>

      {/* Center Section: Search Bar with Lottie */}
      <div className="header__search">
        {/* Lottie animation for the search icon */}
        <Lottie options={searchAnimationOptions} height={30} width={30} />
        <input
          type="text"
          className="header__search-input"
          placeholder="Search..."
        />
      </div>

      {/* Right Section: Notification Icon (Lottie animation) */}
      <div className="header__right">
        <button
          onClick={() => setShowNotifications((prev) => !prev)}
          className="header__notification-icon"
          title="Notifications"
        >
          {/* Lottie animation for Bell Icon */}
          <Lottie options={bellAnimationOptions} height={40} width={40} />
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
