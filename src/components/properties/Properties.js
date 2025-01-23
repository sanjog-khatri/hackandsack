import React, { useState } from 'react';
import {FaTachometerAlt,FaBox,FaThList,FaTools,FaTicketAlt,FaUsers,FaStore,FaSearch,FaExpandArrowsAlt,FaBars,FaChevronDown,FaChevronRight,} from 'react-icons/fa';
import Catalog from '../../pages/Catalogs/Catalog';
import './Properties.css';

const Properties = ({ onIconsToggle }) => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCatalogExpanded, setIsCatalogExpanded] = useState(false);

  const properties = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'Orders', icon: <FaBox /> },
    { name: 'Catalogs', icon: <FaThList />, isCatalog: true },
    { name: 'Customization', icon: <FaTools /> },
    { name: 'Ticket', icon: <FaTicketAlt /> },
    { name: 'Manage Staffs', icon: <FaUsers /> },
    { name: 'Store Info', icon: <FaStore /> },
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
    setIsTextVisible(!isTextVisible);
    onIconsToggle();
  };

  const toggleCatalogExpansion = () => {
    setIsCatalogExpanded(!isCatalogExpanded);
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
        <button onClick={toggleSearch} className="properties-icon-button">
          <FaSearch size={24} />
        </button>
      </div>

      {searchQuery && (
        <div className="properties-search">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="properties-search-input"
          />
        </div>
      )}

      <ul className="properties-list">
        {properties.map((item, index) => (
          <li
            key={index}
            className={`properties-item ${item.isCatalog && isCatalogExpanded ? 'expanded' : ''}`}
            onClick={item.isCatalog ? toggleCatalogExpansion : null}
          >
            <div className="properties-icon">{item.icon}</div>
            {isTextVisible && <span className="properties-text">{item.name}</span>}

            {item.isCatalog && isTextVisible && (
              <span className="properties-icon" style={{ marginLeft: 'auto' }}>
                {isCatalogExpanded ? <FaChevronDown size={16} /> : <FaChevronRight size={16} />}
              </span>
            )}
          </li>
        ))}
      </ul>

      {isCatalogExpanded && <Catalog />}
    </div>
  );
};

export default Properties;
