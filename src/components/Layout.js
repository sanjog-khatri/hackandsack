import React, { useState } from 'react';
import Header from './header/Header';
import Properties from './properties/Properties';
import './Layout.css';

const Layout = ({ children }) => {
  const [isIconsOnly, setIsIconsOnly] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleIconsOnly = () => {
    setIsIconsOnly((prev) => !prev);
  };

  const handleItemClick = (item) => {
    // If the clicked item is already active, set it to null (deactivate it)
    setActiveItem((prevActiveItem) => (prevActiveItem === item.name ? null : item.name));
  };
  

  return (
    <div className="layout">
      <Header onToggleIconsOnly={toggleIconsOnly} />
      <aside className={`properties ${isIconsOnly ? 'icons-only' : ''}`}>
        <Properties isTextVisible={!isIconsOnly} activeItem={activeItem} onItemClick={handleItemClick} />
      </aside>
      <main className={`main-content ${isIconsOnly ? 'icons-only' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
