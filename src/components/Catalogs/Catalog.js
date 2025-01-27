import React from 'react';
import { FaCube, FaTags, FaCogs } from 'react-icons/fa';
import './Catalog.css';

const catalogItems = [
  { name: 'All products', icon: <FaCube /> },
  { name: 'Categories', icon: <FaTags /> },
  { name: 'Attributes & Classes', icon: <FaCogs /> },
];

const Catalog = () => {
  return (
    <div className="catalog-expanded">
      <ul className="catalog-contents">
        {catalogItems.map((catalogItem, index) => (
          <li key={index} className="catalog-item">
            <div className="catalog-icon">{catalogItem.icon}</div>
            <span className="catalog-text">{catalogItem.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;