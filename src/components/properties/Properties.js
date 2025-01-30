import React, { useState } from 'react';
import { FaTachometerAlt, FaBox, FaThList, FaTools, FaTicketAlt, FaUsers, FaStore } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Properties.css';

const Properties = ({ isTextVisible }) => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const properties = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, route: '/dashboard' },
    { name: 'Orders', icon: <FaBox />, route: '/order' },
    { name: 'Catalogs', icon: <FaThList />, route: '/catalog' },
    { name: 'Customization', icon: <FaTools />, route: '/customization' },
    { name: 'Ticket', icon: <FaTicketAlt />, route: '/ticket' },
    { name: 'Manage Staffs', icon: <FaUsers />, route: '/staff' },
    { name: 'Store Info', icon: <FaStore />, route: '/store' },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.name);
    navigate(item.route); // Navigate to the specified route
  };

  return (
    <div className={`properties ${isTextVisible ? '' : 'icons-only'}`}>
      <ul className="properties-list">
        {properties.map((item, index) => (
          <li
            key={index}
            className={`properties-item ${activeItem === item.name ? 'active' : ''}`}
            onClick={() => handleItemClick(item)}
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
