import React, { useState } from 'react';
import { FaBell, FaComments, FaCamera } from 'react-icons/fa';
import './Header.css';
import Profile from './Profile/Profile';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../utils/cropImage';
import Notifications from '../header/notification/Notification';
import Chats from '../header/chat/Chat';

const Header = () => {
  const [companyName, setCompanyName] = useState('Your Company Name');
  const [logo, setLogo] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState(companyName);
  const [cropImage, setCropImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropping, setIsCropping] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showChats, setShowChats] = useState(false);

  const handleCompanyNameChange = (e) => setNewCompanyName(e.target.value);
  const handleSaveCompanyName = () => {
    setCompanyName(newCompanyName);
    setIsEditingName(false);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => { setCropImage(reader.result); setIsCropping(true); };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(cropImage, croppedAreaPixels);
      setLogo(croppedImage);
      setIsCropping(false);
    } catch (e) {
      console.error(e);
    }
  };

  const getCurrentTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="header">
      <div className="header__developer-name">Hack and Sack</div>
      <div className="header__name-container">
        <div className="header__logo-section">
          {logo ? <img src={logo} alt="Company Logo" className="header__logo" /> : 
            <button onClick={() => document.getElementById('logo-upload').click()} className="header__camera-icon">
              <FaCamera />
            </button>}
          <input id="logo-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleLogoUpload} />
        </div>
        {isEditingName ? (
          <>
            <input type="text" value={newCompanyName} onChange={handleCompanyNameChange} className="header__name-input" />
            <button onClick={handleSaveCompanyName} className="header__save-btn">Save</button>
          </>
        ) : (
          <h1 className="header__company-name" onClick={() => setIsEditingName(true)}>{companyName}</h1>
        )}
      </div>
      <div className="header__icons">
        <button onClick={() => setShowNotifications(!showNotifications)} className="header__notification-icon">
          <FaBell />
        </button>
        <button onClick={() => setShowChats(!showChats)} className="header__chat-icon">
          <FaComments />
        </button>
      </div>
      <div className="header__profile"><Profile /></div>
      {showNotifications && <Notifications getCurrentTime={getCurrentTime} />}
      {showChats && <Chats setShowChats={setShowChats} />}
      {isCropping && (
        <div className="cropper-container">
          <button onClick={() => setIsCropping(false)} className="cropper-close-btn">✖</button>
          <Cropper image={cropImage} crop={crop} zoom={zoom} aspect={1} onCropChange={setCrop} onCropComplete={(croppedArea, croppedAreaPixels) => setCroppedAreaPixels(croppedAreaPixels)} onZoomChange={setZoom} cropShape="round" showGrid={false} />
          <button onClick={handleSaveCrop} className="crop-save-btn">Save Logo</button>
        </div>
      )}
    </header>
  );
};

export default Header;
