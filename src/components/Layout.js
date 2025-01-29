import React, { useState } from 'react';
import Header from './header/Header';
import Properties from './properties/Properties';
import './Layout.css'; // Import the external CSS file

const Layout = ({ children }) => {
  const [isIconsOnly, setIsIconsOnly] = useState(false);
  const [isPropertiesShrunk, setIsPropertiesShrunk] = useState(false);

  // Only toggle the icons display in the sidebar
  const toggleIconsOnly = () => {
    setIsIconsOnly((prev) => !prev);
  };

  // Only toggle the sidebar shrink state on explicit interaction
  const togglePropertiesShrunk = () => {
    setIsPropertiesShrunk((prev) => !prev);
  };

  return (
    <div className={`layout ${isPropertiesShrunk ? 'store-expanded' : ''}`}>
      <Header />

      {/* Sidebar (Properties) */}
      <aside className={`properties ${isIconsOnly ? 'icons-only' : ''}`}>
        <Properties
          onIconsToggle={toggleIconsOnly} // Toggle icons only, not shrinking
          onShrinkToggle={togglePropertiesShrunk} // Toggle shrinking behavior explicitly
        />
      </aside>

      {/* Main Content */}
      <main className={`main-content ${isIconsOnly ? 'icons-only' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
