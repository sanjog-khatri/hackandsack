import React, { useState, useEffect } from 'react';
import {FaTachometerAlt, FaBox, FaThList, FaTools, FaTicketAlt, FaUsers, FaStore, FaFacebook, FaInstagram, FaYoutube, FaTiktok} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Properties.css';
import companyLogo from '../../store/hs.png'; // Import your logo image

const Properties = ({ isTextVisible }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Use today's date
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize activeItem from the passed location state if available
  useEffect(() => {
    if (location.state?.activeItem) {
      setActiveItem(location.state.activeItem);
    }
  }, [location.state]);

  const salesData = {
    '2025-01-20': 120,
    '2025-01-21': 80,
    '2025-01-22': 100,
    '2025-01-23': 150,
    '2025-01-24': 70,
    '2025-01-25': 100,
    '2025-01-26': 120,
    '2025-01-27': 90,
    '2025-01-28': 110,
    '2025-01-29': 105,
  };

  const averageSales = 100;

  const getBackgroundColor = (date) => {
    const dateKey = date.toISOString().split('T')[0];
    const sales = salesData[dateKey];
    if (sales === undefined) return null; // No color for undefined days
    if (sales < averageSales) return 'red'; // Below average sales
    return ''; // No color for average or above average sales
  };

  const getCurrentDateColor = (date) => {
    const today = new Date().toISOString().split('T')[0];
    const dateKey = date.toISOString().split('T')[0];
    return today === dateKey ? 'gray' : ''; // Gray for current date
  };

  const properties = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, route: '/dashboard', category: 'Store Management' },
    { name: 'Store Info', icon: <FaStore />, route: '/store', category: 'Store Management' },
    { name: 'Customization', icon: <FaTools />, route: '/customization', category: 'Store Management' },
    { name: 'Catalogs', icon: <FaThList />, route: '/catalog', category: 'Management' },
    { name: 'Orders', icon: <FaBox />, route: '/order', category: 'Management' },
    { name: 'Ticket', icon: <FaTicketAlt />, route: '/ticket', category: 'Administration' },
    { name: 'Manage Staffs', icon: <FaUsers />, route: '/staff', category: 'Administration' },
  ];

  const yourAccounts = [
    { name: 'Facebook', icon: <FaFacebook />, route: '/facebook' },
    { name: 'Instagram', icon: <FaInstagram />, route: '/instagram' },
    { name: 'YouTube', icon: <FaYoutube />, route: '/youtube' },
    { name: 'TikTok', icon: <FaTiktok />, route: '/tiktok' },
  ];

  const groupedProperties = properties.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleItemClick = (item) => {
    setActiveItem(item.name); // Set active item immediately
    // Delay navigation by a tiny bit to ensure state is set first
    setTimeout(() => {
      navigate(item.route, { state: { activeItem: item.name } }); // Pass activeItem in state
    }, 0);
  };

  return (
    <div className={`properties ${isTextVisible ? '' : 'icons-only'}`}>
      {/* Render Calendar First */}
      <div className="properties-category">
        {isTextVisible && <h3 className="category-title">Sales Calendar</h3>}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
          dayClassName={(date) => {
            const color = getBackgroundColor(date) || getCurrentDateColor(date);
            return color ? `calendar-tile-${color}` : '';
          }}
          calendarClassName="sales-calendar"
          minDate={new Date('2023-01-20')}  // Start from Jan 20
        />
      </div>

      {/* Render Other Sections */}
      {Object.entries(groupedProperties).map(([category, items]) => (
        <div key={category} className="properties-category">
          {isTextVisible && <h3 className="category-title">{category}</h3>}
          <ul className="properties-list">
            {items.map((item, index) => (
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
      ))}

      {/* Render Your Accounts Section */}
      <div className="properties-category">
        {isTextVisible && <h3 className="category-title">Your Accounts</h3>}
        <ul className="properties-list">
          {yourAccounts.map((item, index) => (
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

      {/* "Developed by" Section */}
      <div className="footer">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
      </div>
    </div>
  );
};

export default Properties;
