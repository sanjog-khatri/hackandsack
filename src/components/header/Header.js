import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { FaExpandArrowsAlt, FaBars } from 'react-icons/fa';
import './Header.css';
import Profile from './Profile/Profile';
import Notifications from '../header/notification/Notification';
import * as bellAnimation from '../../assets/icons/white_notification_bell.json'; 
import * as searchAnimation from '../../assets/icons/black_search.json'; 

const Header = ({ onToggleIconsOnly }) => {
  const [logo, setLogo] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  const bellAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: bellAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const searchAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: searchAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <header className="header">
      <div className="header__left">
        <button onClick={onToggleIconsOnly} className="header__icon-button">
          <FaBars size={24} />
        </button>
        <button onClick={toggleFullscreen} className="header__icon-button">
          <FaExpandArrowsAlt size={24} />
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

      <div className="header__search">
        <Lottie options={searchAnimationOptions} height={30} width={30} />
        <input type="text" className="header__search-input" placeholder="Search..." />
      </div>

      <div className="header__right">
        <button onClick={() => setShowNotifications((prev) => !prev)} className="header__notification-icon">
          <Lottie options={bellAnimationOptions} height={40} width={40} />
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
