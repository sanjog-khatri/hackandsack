import React, { useState } from 'react';
import { FaTachometerAlt, FaBox, FaThList, FaTools, FaTicketAlt, FaUsers, FaStore, FaExpandArrowsAlt, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Properties.css';

const Properties = ({ onIconsToggle }) => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState(null); // Track the active item

  const navigate = useNavigate();

  const properties = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'Orders', icon: <FaBox /> },
    { name: 'Catalogs', icon: <FaThList /> },
    { name: 'Customization', icon: <FaTools />, isCustomization: true },
    { name: 'Ticket', icon: <FaTicketAlt />, isTicket: true },
    { name: 'Manage Staffs', icon: <FaUsers />, isStaff: true },
    { name: 'Store Info', icon: <FaStore />, isStore: true },
  ];

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

  const toggleSearch = () => {
    setSearchQuery('');
  };

  const toggleIconsOnly = () => {
    setIsTextVisible((prev) => !prev); // Toggle the state for the text visibility
    onIconsToggle(); // Trigger the parent handler
  };

  const handleItemClick = (item) => {
    setActiveItem(item.name); // Set the clicked item as active immediately
    // Delay navigation to allow state update to reflect
    setTimeout(() => {
      if (item.route) {
        navigate(item.route); // Navigate to the specific route
      } else if (item.name === 'Dashboard') {
        navigate('/dashboard');
      } else if (item.name === 'Orders') {
        navigate('/order');
      } else if (item.name === 'Catalogs') {
        navigate('/catalog');
      } else if (item.isStore) {
        navigate('/store');
      } else if (item.isCustomization) {
        navigate('/customization');
      } else if (item.isTicket) {
        navigate('/ticket');
      } else if (item.isStaff) {
        navigate('/staff');
      }
    }, 0); // This small timeout ensures the state update happens before navigation
  };
  

  return (
    <div className={`properties ${isTextVisible ? '' : 'icons-only'}`}>
      <div className="properties-toolbar">
        <button onClick={toggleIconsOnly} className="properties-icon-button">
          <FaBars size={24} />
        </button>
        <button onClick={toggleFullscreen} className="properties-icon-button">
          <FaExpandArrowsAlt size={24} />
        </button>
      </div>
      <ul className="properties-list">
        {properties.map((item, index) => (
          <li
            key={index}
            className={`properties-item ${activeItem === item.name ? 'active' : ''}`} // Apply active class
            onClick={() => handleItemClick(item)} // Prevent shrink/unshrink here
          >
            <div className="properties-icon">{item.icon}</div>
            {isTextVisible && <span className="properties-text">{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Properties;
